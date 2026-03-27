import { LiveData, Service } from '@toeverything/infra';
import { firstValueFrom, take } from 'rxjs';

import type {
  SpaceChatMessageRecord,
  SpaceChatStore,
} from '../stores/space-chat';
import type { SpaceMemoryStore } from '../stores/space-memory';

const CLAUDE_API_KEY_KEY = 'ploy-note:claude-api-key';
const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';
const CLAUDE_MODEL = 'claude-3-5-haiku-20241022';
/** Maximum number of past messages sent as conversation history */
const MAX_HISTORY = 10;

export class SpaceChatService extends Service {
  constructor(
    private readonly chatStore: SpaceChatStore,
    private readonly memoryStore: SpaceMemoryStore
  ) {
    super();
  }

  // ─── API Key management (localStorage, never synced) ─────────────────

  getApiKey(): string {
    return localStorage.getItem(CLAUDE_API_KEY_KEY) ?? '';
  }

  setApiKey(key: string) {
    localStorage.setItem(CLAUDE_API_KEY_KEY, key.trim());
  }

  hasApiKey(): boolean {
    return !!this.getApiKey();
  }

  removeApiKey() {
    localStorage.removeItem(CLAUDE_API_KEY_KEY);
  }

  // ─── Reactive messages ────────────────────────────────────────────────

  messages$(spaceId: string): LiveData<SpaceChatMessageRecord[]> {
    return LiveData.from<SpaceChatMessageRecord[]>(
      this.chatStore.watchMessages$(spaceId),
      []
    );
  }

  // ─── Send a message and stream the response ───────────────────────────

  async sendMessage(
    spaceId: string,
    spaceName: string,
    docCount: number,
    userMessage: string,
    onChunk: (chunk: string) => void
  ): Promise<void> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error(
        'No Claude API key configured. Enter your key in the Chat panel.'
      );
    }

    // Persist the user message immediately
    this.chatStore.addMessage(spaceId, 'user', userMessage);

    // Fetch memories and history in parallel
    const [memories, allMessages] = await Promise.all([
      firstValueFrom(this.memoryStore.watchMemories$(spaceId).pipe(take(1))),
      firstValueFrom(this.chatStore.watchMessages$(spaceId).pipe(take(1))),
    ]);

    // Build conversation history (exclude the message we just added)
    const history = allMessages
      .slice(0, -1)
      .slice(-MAX_HISTORY)
      .map(m => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      }));

    const systemPrompt = this.buildSystemPrompt(
      spaceName,
      docCount,
      memories.map(m => m.content)
    );

    let fullResponse = '';
    try {
      fullResponse = await this.callClaude(
        apiKey,
        systemPrompt,
        history,
        userMessage,
        onChunk
      );
    } catch (err) {
      // Remove the user message we optimistically added if the call fails
      const latest = allMessages.at(-1);
      if (latest) this.chatStore.deleteMessage(latest.id);
      throw err;
    }

    // Persist the assistant response
    this.chatStore.addMessage(spaceId, 'assistant', fullResponse);
  }

  // ─── Clear chat history ───────────────────────────────────────────────

  clearHistory(spaceId: string) {
    this.chatStore
      .watchMessages$(spaceId)
      .pipe(take(1))
      .subscribe(messages => {
        messages.forEach(m => this.chatStore.deleteMessage(m.id));
      });
  }

  // ─── Internal helpers ─────────────────────────────────────────────────

  private buildSystemPrompt(
    spaceName: string,
    docCount: number,
    memories: string[]
  ): string {
    const lines: string[] = [
      `You are an intelligent assistant for the "${spaceName}" Space in Ploy-Note, a personal knowledge management app.`,
      `Your role is to help the user think, plan, and make sense of their knowledge in this Space.`,
    ];

    lines.push(
      docCount > 0
        ? `\nThis Space contains ${docCount} document${docCount === 1 ? '' : 's'}.`
        : '\nThis Space has no documents yet.'
    );

    if (memories.length > 0) {
      lines.push(
        `\nPinned context for this Space:\n${memories.map(m => `• ${m}`).join('\n')}`
      );
    }

    lines.push(
      '\nBe concise, helpful, and stay focused on topics relevant to this Space.'
    );

    return lines.join('\n');
  }

  private async callClaude(
    apiKey: string,
    systemPrompt: string,
    history: Array<{ role: 'user' | 'assistant'; content: string }>,
    userMessage: string,
    onChunk: (chunk: string) => void
  ): Promise<string> {
    const response = await fetch(CLAUDE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        // Required for direct browser-to-API calls
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: CLAUDE_MODEL,
        max_tokens: 2048,
        system: systemPrompt,
        stream: true,
        messages: [...history, { role: 'user', content: userMessage }],
      }),
    });

    if (!response.ok) {
      let detail = '';
      try {
        detail = await response.text();
      } catch {
        // ignore
      }
      throw new Error(`Claude API error ${response.status}: ${detail}`);
    }

    const reader = response.body?.getReader();
    if (!reader) throw new Error('No response body from Claude API');

    const decoder = new TextDecoder();
    let fullResponse = '';

    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;

      const text = decoder.decode(value, { stream: true });
      for (const line of text.split('\n')) {
        if (!line.startsWith('data: ')) continue;
        const data = line.slice(6).trim();
        if (!data || data === '[DONE]') continue;
        try {
          const parsed = JSON.parse(data) as {
            type?: string;
            delta?: { type?: string; text?: string };
          };
          if (
            parsed.type === 'content_block_delta' &&
            parsed.delta?.type === 'text_delta' &&
            parsed.delta.text
          ) {
            fullResponse += parsed.delta.text;
            onChunk(parsed.delta.text);
          }
        } catch {
          // Incomplete JSON chunk — safe to ignore
        }
      }
    }

    return fullResponse;
  }
}
