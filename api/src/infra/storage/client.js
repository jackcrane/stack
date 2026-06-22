import { createStorageClient } from '@template/storage';

import { createLogger } from '@template/logger';

import { env } from '../../config/env.js';

export const storage = createStorageClient(env, createLogger({ name: 'storage' }));
