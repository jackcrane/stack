import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient } from './generated/client/client.js';

export const createPrismaClient = (config) => {
  const adapter = new PrismaPg({
    connectionString: config.DATABASE_URL,
  });

  return new PrismaClient({ adapter });
};
