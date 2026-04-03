import { Injectable, Logger } from '@nestjs/common';

import { genRequestId } from '../../utils';
import { JobHandlerScanner } from './scanner';

@Injectable()
export class JobQueue {
  private readonly logger = new Logger(JobQueue.name);

  constructor(private readonly scanner: JobHandlerScanner) {}

  async add<T extends JobName>(name: T, payload: Jobs[T], _opts?: unknown) {
    const handler = this.scanner.getHandler(name);
    if (!handler) {
      this.logger.warn(`Job handler for [${name}] not found`);
      return { id: genRequestId('job') } as any;
    }

    // Execute synchronously via setImmediate (non-blocking but same process)
    setImmediate(async () => {
      try {
        await handler.fn(payload);
        this.logger.debug(`Job [${name}] executed`);
      } catch (e) {
        this.logger.error(`Job [${name}] failed`, e);
      }
    });

    return { id: genRequestId('job') } as any;
  }

  async remove<T extends JobName>(
    _jobId: string,
    _jobName: T
  ): Promise<Jobs[T] | undefined> {
    // No persistent queue — jobs execute immediately
    return undefined;
  }

  async get<T extends JobName>(_jobId: string, _jobName: T) {
    return undefined;
  }
}
