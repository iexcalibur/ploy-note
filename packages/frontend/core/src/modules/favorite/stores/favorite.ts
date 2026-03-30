import { LiveData, Store } from '@toeverything/infra';
import { EMPTY } from 'rxjs';

import type { WorkspaceDBService } from '../../db';
import type { FavoriteSupportTypeUnion } from '../constant';

export interface FavoriteRecord {
  type: FavoriteSupportTypeUnion;
  id: string;
  index: string;
}

/**
 * Favorites have been removed from the product.
 * This store is a no-op stub so that dependent code continues to compile.
 */
export class FavoriteStore extends Store {
  constructor(private readonly _workspaceDBService: WorkspaceDBService) {
    super();
  }

  watchIsLoading() {
    return LiveData.from(EMPTY, false);
  }

  watchFavorites() {
    return LiveData.from<FavoriteRecord[]>(EMPTY, []);
  }

  addFavorite(
    _type: FavoriteSupportTypeUnion,
    _id: string,
    _index: string
  ): FavoriteRecord {
    // no-op
    return { type: _type, id: _id, index: _index };
  }

  reorderFavorite(
    _type: FavoriteSupportTypeUnion,
    _id: string,
    _index: string
  ) {
    // no-op
  }

  removeFavorite(_type: FavoriteSupportTypeUnion, _id: string) {
    // no-op
  }

  watchFavorite(_type: FavoriteSupportTypeUnion, _id: string) {
    return LiveData.from<FavoriteRecord | undefined>(EMPTY, undefined);
  }
}
