import { Injectable, Logger } from '@nestjs/common';

import { wrapCallMetric } from '../../metrics';
import { JOB_SIGNAL, namespace } from './def';
import { JobHandlerScanner } from './scanner';

/**
 * Job executor for local mode — runs handlers directly without BullMQ workers.
 */
@Injectable()
export class JobExecutor {
  private readonly logger = new Logger('job');

  constructor(private readonly scanner: JobHandlerScanner) {}

  async run<T extends JobName>(
    name: T,
    payload: Jobs[T],
    jobId?: string
  ): Promise<JOB_SIGNAL | undefined> {
    const ns = namespace(name);
    const handler = this.scanner.getHandler(name);

    if (!handler) {
      this.logger.warn(`Job handler for [${name}] not found.`);
      return;
    }

    const fn = wrapCallMetric(
      async () => {
        const signature = `[${name}] (${handler.name}, id=${jobId})`;
        try {
          const ts = Date.now();
          this.logger.verbose(`Job started: ${signature}`, payload);
          const ret = await handler.fn(payload);
          this.logger.verbose(`Job finished: ${signature}`, {
            signature,
            signal: ret,
            cost: Date.now() - ts,
          });
          return ret;
        } catch (e) {
          this.logger.error(`Job failed: ${signature}`, e);
          throw e;
        }
      },
      'queue',
      'job_handler',
      {
        job: name,
        namespace: ns,
        handler: handler.name,
      }
    );

    return await fn();
  }
}
