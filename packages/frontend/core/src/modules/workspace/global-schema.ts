import { AIChatBlockSchema } from '@polymind/core/blocksuite/ai/blocks/ai-chat-block/model';
import { TranscriptionBlockSchema } from '@polymind/core/blocksuite/ai/blocks/transcription-block/model';
import { AffineSchemas } from '@blockmind/polymind/schemas';
import { Schema } from '@blockmind/polymind/store';

let _schema: Schema | null = null;
export function getPolyMindWorkspaceSchema() {
  if (!_schema) {
    _schema = new Schema();

    _schema.register([
      ...AffineSchemas,
      AIChatBlockSchema,
      TranscriptionBlockSchema,
    ]);
  }

  return _schema;
}
