import { createQueueClient } from '@template/queue';

import { createLogger } from '@template/logger';

import { env } from '../../config/env';

export const queue = createQueueClient(env, createLogger({ name: 'queue' }));
