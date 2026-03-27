import type { Space } from '@affine/core/modules/space';
import { SpaceChatService } from '@affine/core/modules/space';
import { useLiveData, useServices } from '@toeverything/infra';
import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import * as styles from './index.css';

interface SpaceChatPanelProps {
  space: Space;
  docCount: number;
}

export const SpaceChatPanel = ({ space, docCount }: SpaceChatPanelProps) => {
  const { spaceChatService } = useServices({ SpaceChatService });
  const spaceName = useLiveData(space.name$);
  const messages = useLiveData(spaceChatService.messages$(space.id));

  const [input, setInput] = useState('');
  /** Accumulates streaming text during an in-flight response */
  const [streamingContent, setStreamingContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // API-key setup state
  const [hasKey, setHasKey] = useState(() => spaceChatService.hasApiKey());
  const [apiKeyInput, setApiKeyInput] = useState('');

  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom when new content arrives
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, streamingContent]);

  // ── Send message ──────────────────────────────────────────────────────

  const handleSend = useCallback(() => {
    const msg = input.trim();
    if (!msg || isLoading) return;

    setInput('');
    setError(null);
    setIsLoading(true);
    setStreamingContent('');

    spaceChatService
      .sendMessage(space.id, spaceName, docCount, msg, chunk =>
        setStreamingContent(prev => (prev ?? '') + chunk)
      )
      .catch(err => {
        setError(err instanceof Error ? err.message : 'Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
        setStreamingContent(null);
      });
  }, [input, isLoading, space.id, spaceName, docCount, spaceChatService]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  // ── API key setup ─────────────────────────────────────────────────────

  const handleSaveKey = useCallback(() => {
    const key = apiKeyInput.trim();
    if (!key) return;
    spaceChatService.setApiKey(key);
    setHasKey(true);
    setApiKeyInput('');
  }, [apiKeyInput, spaceChatService]);

  const handleResetKey = useCallback(() => {
    spaceChatService.removeApiKey();
    setHasKey(false);
  }, [spaceChatService]);

  // ── API key setup screen ──────────────────────────────────────────────

  if (!hasKey) {
    return (
      <div className={styles.chatPanel}>
        <div className={styles.apiKeySetup}>
          <div className={styles.apiKeyTitle}>Connect Claude</div>
          <p className={styles.apiKeyDesc}>
            Enter your Anthropic API key to enable AI chat for this Space. Your
            key is stored locally and never synced.
          </p>
          <input
            className={styles.apiKeyInput}
            type="password"
            placeholder="sk-ant-api03-..."
            value={apiKeyInput}
            onChange={e => setApiKeyInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSaveKey()}
            autoFocus
          />
          <button
            className={styles.apiKeySaveButton}
            onClick={handleSaveKey}
            disabled={!apiKeyInput.trim()}
          >
            Save Key
          </button>
          <a
            className={styles.apiKeyLink}
            href="https://console.anthropic.com"
            target="_blank"
            rel="noreferrer"
          >
            Get an API key →
          </a>
        </div>
      </div>
    );
  }

  // ── Main chat UI ──────────────────────────────────────────────────────

  return (
    <div className={styles.chatPanel}>
      {/* Header */}
      <div className={styles.chatHeader}>
        <span className={styles.chatHeaderTitle}>Chat with {spaceName}</span>
        <div className={styles.chatHeaderActions}>
          <button
            className={styles.chatActionButton}
            onClick={() => spaceChatService.clearHistory(space.id)}
            title="Clear chat history"
            disabled={isLoading}
          >
            Clear
          </button>
          <button
            className={styles.chatActionButton}
            onClick={handleResetKey}
            title="Change API key"
          >
            Key
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className={styles.chatMessages} ref={scrollRef}>
        {messages.length === 0 && streamingContent === null && (
          <div className={styles.chatEmpty}>
            <div className={styles.chatEmptyTitle}>
              AI assistant for this Space
            </div>
            <p className={styles.chatEmptyDesc}>
              Ask me about your documents, get summaries, brainstorm ideas, or
              plan your work. Add memories below to give me persistent context.
            </p>
          </div>
        )}

        {messages.map(msg => (
          <div key={msg.id} className={styles.chatMessage} data-role={msg.role}>
            <div className={styles.chatMessageRole}>
              {msg.role === 'user' ? 'You' : 'Claude'}
            </div>
            <div className={styles.chatMessageContent}>{msg.content}</div>
          </div>
        ))}

        {/* Streaming response */}
        {streamingContent !== null && (
          <div className={styles.chatMessage} data-role="assistant">
            <div className={styles.chatMessageRole}>Claude</div>
            <div className={styles.chatMessageContent}>
              {streamingContent || (
                <span className={styles.typingDots}>
                  <span />
                  <span />
                  <span />
                </span>
              )}
            </div>
          </div>
        )}

        {error && <div className={styles.chatError}>{error}</div>}
      </div>

      {/* Input */}
      <div className={styles.chatInputArea}>
        <textarea
          ref={textareaRef}
          className={styles.chatTextarea}
          placeholder={`Ask about ${spaceName}… (Enter to send, Shift+Enter for newline)`}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          rows={3}
        />
        <button
          className={styles.chatSendButton}
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
        >
          {isLoading ? '…' : 'Send'}
        </button>
      </div>
    </div>
  );
};
