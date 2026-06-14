import { createPrismaClient } from '@template/db';

import { env } from '../../config/env';

export const db = createPrismaClient(env);
