import { Injectable } from '@nestjs/common';

import { InMemoryCacheProvider } from './memory-provider';

@Injectable()
export class Cache extends InMemoryCacheProvider {}

@Injectable()
export class SessionCache extends InMemoryCacheProvider {}
