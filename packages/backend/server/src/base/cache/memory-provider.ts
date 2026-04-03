import { type CacheSetOptions } from './provider';

interface CacheEntry {
  value: string;
  expiry?: number;
}

/**
 * In-memory cache provider for LOCAL_MODE.
 * Replaces Redis-backed CacheProvider for single-user local deployments.
 */
export class InMemoryCacheProvider {
  private readonly store = new Map<string, CacheEntry>();
  private readonly lists = new Map<string, string[]>();
  private readonly maps = new Map<string, Map<string, string>>();
  private readonly cleanupInterval: ReturnType<typeof setInterval>;

  constructor() {
    // Periodic cleanup of expired keys every 30 seconds
    this.cleanupInterval = setInterval(() => this.cleanup(), 30_000);
  }

  destroy() {
    clearInterval(this.cleanupInterval);
  }

  private isExpired(entry: CacheEntry): boolean {
    return entry.expiry !== undefined && Date.now() > entry.expiry;
  }

  private cleanup() {
    for (const [key, entry] of this.store) {
      if (this.isExpired(entry)) this.store.delete(key);
    }
  }

  // standard operations
  async get<T = unknown>(key: string): Promise<T | undefined> {
    const entry = this.store.get(key);
    if (!entry || this.isExpired(entry)) {
      if (entry) this.store.delete(key);
      return undefined;
    }
    return JSON.parse(entry.value);
  }

  async set<T = unknown>(
    key: string,
    value: T,
    opts: CacheSetOptions = {}
  ): Promise<boolean> {
    this.store.set(key, {
      value: JSON.stringify(value),
      expiry: opts.ttl ? Date.now() + opts.ttl : undefined,
    });
    return true;
  }

  async increase(key: string, count: number = 1): Promise<number> {
    const current = await this.get<number>(key);
    const next = (current ?? 0) + count;
    await this.set(key, next);
    return next;
  }

  async decrease(key: string, count: number = 1): Promise<number> {
    return this.increase(key, -count);
  }

  async setnx<T = unknown>(
    key: string,
    value: T,
    opts: CacheSetOptions = {}
  ): Promise<boolean> {
    const existing = this.store.get(key);
    if (existing && !this.isExpired(existing)) return false;
    await this.set(key, value, opts);
    return true;
  }

  async delete(key: string): Promise<boolean> {
    return this.store.delete(key) || this.lists.delete(key) || this.maps.delete(key);
  }

  async has(key: string): Promise<boolean> {
    const entry = this.store.get(key);
    if (!entry) return false;
    if (this.isExpired(entry)) {
      this.store.delete(key);
      return false;
    }
    return true;
  }

  async ttl(key: string): Promise<number> {
    const entry = this.store.get(key);
    if (!entry || !entry.expiry) return -1;
    const remaining = Math.ceil((entry.expiry - Date.now()) / 1000);
    return remaining > 0 ? remaining : -2;
  }

  async expire(key: string, ttl: number): Promise<boolean> {
    const entry = this.store.get(key);
    if (!entry) return false;
    entry.expiry = Date.now() + ttl;
    return true;
  }

  // list operations
  async pushBack<T = unknown>(key: string, ...values: T[]): Promise<number> {
    const list = this.lists.get(key) ?? [];
    list.push(...values.map(v => JSON.stringify(v)));
    this.lists.set(key, list);
    return list.length;
  }

  async pushFront<T = unknown>(key: string, ...values: T[]): Promise<number> {
    const list = this.lists.get(key) ?? [];
    list.unshift(...values.map(v => JSON.stringify(v)));
    this.lists.set(key, list);
    return list.length;
  }

  async len(key: string): Promise<number> {
    return this.lists.get(key)?.length ?? 0;
  }

  async list<T = unknown>(key: string, start: number, end: number): Promise<T[]> {
    const arr = this.lists.get(key) ?? [];
    return arr.slice(start, end + 1).map(v => JSON.parse(v));
  }

  async popFront<T = unknown>(key: string, count: number = 1): Promise<T[]> {
    const arr = this.lists.get(key) ?? [];
    return arr.splice(0, count).map(v => JSON.parse(v));
  }

  async popBack<T = unknown>(key: string, count: number = 1): Promise<T[]> {
    const arr = this.lists.get(key) ?? [];
    return arr.splice(-count, count).map(v => JSON.parse(v));
  }

  // map (hash) operations
  async mapSet<T = unknown>(map: string, key: string, value: T): Promise<boolean> {
    let m = this.maps.get(map);
    if (!m) {
      m = new Map();
      this.maps.set(map, m);
    }
    const isNew = !m.has(key);
    m.set(key, JSON.stringify(value));
    return isNew;
  }

  async mapIncrease(map: string, key: string, count: number = 1): Promise<number> {
    const current = await this.mapGet<number>(map, key);
    const next = (current ?? 0) + count;
    await this.mapSet(map, key, next);
    return next;
  }

  async mapDecrease(map: string, key: string, count: number = 1): Promise<number> {
    return this.mapIncrease(map, key, -count);
  }

  async mapGet<T = unknown>(map: string, key: string): Promise<T | undefined> {
    const v = this.maps.get(map)?.get(key);
    return v ? JSON.parse(v) : undefined;
  }

  async mapDelete(map: string, key: string): Promise<boolean> {
    return this.maps.get(map)?.delete(key) ?? false;
  }

  async mapKeys(map: string): Promise<string[]> {
    const m = this.maps.get(map);
    return m ? Array.from(m.keys()) : [];
  }

  async mapRandomKey(map: string): Promise<string | undefined> {
    const keys = await this.mapKeys(map);
    if (keys.length === 0) return undefined;
    return keys[Math.floor(Math.random() * keys.length)];
  }

  async mapLen(map: string): Promise<number> {
    return this.maps.get(map)?.size ?? 0;
  }
}
