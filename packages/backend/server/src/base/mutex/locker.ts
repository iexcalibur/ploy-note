import { Injectable, Logger } from '@nestjs/common';

import { Lock } from './lock';

/**
 * In-memory mutex locker for single-user local deployments.
 * Uses a simple Map with auto-expiry instead of Redis Lua scripts.
 */
@Injectable()
export class Locker {
  private readonly logger = new Logger(Locker.name);
  private readonly locks = new Map<string, { owner: string; timer: ReturnType<typeof setTimeout> }>();

  async lock(owner: string, key: string): Promise<Lock> {
    const lockKey = `MutexLock:${key}`;
    this.logger.verbose(`Client ${owner} is trying to lock resource ${key}`);

    const existing = this.locks.get(lockKey);
    if (existing) {
      throw new Error(`Failed to acquire lock for resource [${key}]`);
    }

    // Auto-expire after 60s to prevent deadlocks
    const timer = setTimeout(() => {
      this.locks.delete(lockKey);
    }, 60_000);

    this.locks.set(lockKey, { owner, timer });

    return new Lock(async () => {
      const current = this.locks.get(lockKey);
      if (!current) return;
      if (current.owner !== owner) {
        throw new Error(`Failed to release lock ${key}`);
      }
      clearTimeout(current.timer);
      this.locks.delete(lockKey);
    });
  }
}
