import { LiveData, Service } from '@toeverything/infra';

import type {
  SpaceMemoryRecord,
  SpaceMemoryStore,
} from '../stores/space-memory';

export class SpaceMemoryService extends Service {
  constructor(private readonly store: SpaceMemoryStore) {
    super();
  }

  memories$(spaceId: string): LiveData<SpaceMemoryRecord[]> {
    return LiveData.from<SpaceMemoryRecord[]>(
      this.store.watchMemories$(spaceId),
      []
    );
  }

  addMemory(spaceId: string, content: string): string {
    return this.store.addMemory(spaceId, content);
  }

  deleteMemory(id: string) {
    this.store.deleteMemory(id);
  }

  updateMemory(id: string, content: string) {
    this.store.updateMemory(id, content);
  }
}
