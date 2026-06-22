import { createPrismaClient } from '@template/db';

import { env } from '../../config/env.js';

export const db = createPrismaClient(env);
