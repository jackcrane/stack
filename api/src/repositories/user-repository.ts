import type { DatabaseClient } from '@template/db';

export const createUserRepository = (database: DatabaseClient) => ({
  async listRecentUsers(limit = 5) {
    return database.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: limit,
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });
  },
});
