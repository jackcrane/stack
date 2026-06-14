import { PrismaPg } from '@prisma/adapter-pg';

import type { ApiConfig } from '@template/config';
import { PrismaClient } from './generated/client/client';

export const createPrismaClient = (config: Pick<ApiConfig, 'DATABASE_URL'>) => {
  const adapter = new PrismaPg({
    connectionString: config.DATABASE_URL,
  });

  return new PrismaClient({ adapter });
};

export type DatabaseClient = ReturnType<typeof createPrismaClient>;
