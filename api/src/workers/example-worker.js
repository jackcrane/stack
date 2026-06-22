import { createLogger } from '@template/logger';
import { trackBackgroundJob } from '@template/observability';

const logger = createLogger({ name: 'example-worker' });

export const runExampleWorker = async () => {
  trackBackgroundJob('example-worker', 'started');
  logger.info('example worker bootstrapped');
  trackBackgroundJob('example-worker', 'completed');
};
