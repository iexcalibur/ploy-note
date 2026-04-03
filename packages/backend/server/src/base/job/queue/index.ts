import './config';

import { DynamicModule } from '@nestjs/common';

import { JobExecutor } from './executor';
import { JobQueue } from './queue';
import { JobHandlerScanner } from './scanner';

export class JobModule {
  static forRoot(): DynamicModule {
    return {
      global: true,
      module: JobModule,
      providers: [JobQueue, JobExecutor, JobHandlerScanner],
      exports: [JobQueue],
    };
  }
}

export { JobQueue };
export { JOB_SIGNAL, OnJob } from './def';
