import 'dotenv/config';

import { createPrismaClient } from '@template/db';
import { parseApiConfig } from '@template/config';

const env = parseApiConfig(process.env);
const db = createPrismaClient(env);

async function main() {
  await db.user.upsert({
    where: {
      email: 'demo@example.com',
    },
    update: {},
    create: {
      email: 'demo@example.com',
      name: 'Demo User',
      role: 'admin',
      emailVerified: true,
    },
  });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await db.$disconnect();
    process.exit(1);
  });
