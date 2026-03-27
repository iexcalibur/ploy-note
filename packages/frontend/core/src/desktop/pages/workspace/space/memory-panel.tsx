import type { Space } from '@affine/core/modules/space';
import { SpaceMemoryService } from '@affine/core/modules/space';
import { useLiveData, useServices } from '@toeverything/infra';
import { type KeyboardEvent, useCallback, useRef, useState } from 'react';

import * as styles from './index.css';

interface MemoryPanelProps {
  space: Space;
}

export const SpaceMemoryPanel = ({ space }: MemoryPanelProps) => {
  const { spaceMemoryService } = useServices({ SpaceMemoryService });
  const memories = useLiveData(spaceMemoryService.memories$(space.id));

  const [newMemory, setNewMemory] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // ── Add ───────────────────────────────────────────────────────────────

  const handleAdd = useCallback(() => {
    const content = newMemory.trim();
    if (!content) return;
    spaceMemoryService.addMemory(space.id, content);
    setNewMemory('');
    inputRef.current?.focus();
  }, [newMemory, space.id, spaceMemoryService]);

  const handleAddKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAdd();
      }
    },
    [handleAdd]
  );

  // ── Edit ──────────────────────────────────────────────────────────────

  const startEdit = useCallback((id: string, content: string) => {
    setEditingId(id);
    setEditingContent(content);
  }, []);

  const commitEdit = useCallback(() => {
    if (!editingId) return;
    const content = editingContent.trim();
    if (content) {
      spaceMemoryService.updateMemory(editingId, content);
    } else {
      spaceMemoryService.deleteMemory(editingId);
    }
    setEditingId(null);
    setEditingContent('');
  }, [editingId, editingContent, spaceMemoryService]);

  const handleEditKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') commitEdit();
      if (e.key === 'Escape') {
        setEditingId(null);
        setEditingContent('');
      }
    },
    [commitEdit]
  );

  return (
    <div className={styles.memoryPanel}>
      {/* Header */}
      <div className={styles.memoryHeader}>
        <div className={styles.memoryHeaderTitle}>Space Memory</div>
        <div className={styles.memoryHeaderDesc}>
          Pinned facts injected into every AI chat as context
        </div>
      </div>

      {/* Memory list */}
      <div className={styles.memoryList}>
        {memories.length === 0 && (
          <div className={styles.memoryEmpty}>
            No memories yet. Add key facts, recurring context, or goals for this
            Space below.
          </div>
        )}

        {memories.map(mem => (
          <div key={mem.id} className={styles.memoryItem}>
            {editingId === mem.id ? (
              <input
                className={styles.memoryEditInput}
                value={editingContent}
                onChange={e => setEditingContent(e.target.value)}
                onBlur={commitEdit}
                onKeyDown={handleEditKeyDown}
                autoFocus
              />
            ) : (
              <>
                <span
                  className={styles.memoryContent}
                  onClick={() => startEdit(mem.id, mem.content)}
                  title="Click to edit"
                >
                  {mem.content}
                </span>
                <button
                  className={styles.memoryDeleteButton}
                  onClick={() => spaceMemoryService.deleteMemory(mem.id)}
                  title="Delete memory"
                >
                  ×
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Add new memory */}
      <div className={styles.memoryAddRow}>
        <input
          ref={inputRef}
          className={styles.memoryAddInput}
          placeholder="Add a memory (e.g. 'Daily standup at 10am')"
          value={newMemory}
          onChange={e => setNewMemory(e.target.value)}
          onKeyDown={handleAddKeyDown}
        />
        <button
          className={styles.memoryAddButton}
          onClick={handleAdd}
          disabled={!newMemory.trim()}
        >
          Add
        </button>
      </div>
    </div>
  );
};
