import 'dotenv/config';

import { parseApiConfig } from '@template/config';

export const env = parseApiConfig({
  NODE_ENV: process.env.NODE_ENV,
  APP_NAME: process.env.APP_NAME ?? 'stack-template',
  API_PORT: process.env.API_PORT ?? '4000',
  APP_ORIGIN: process.env.APP_ORIGIN ?? 'http://localhost:5173',
  API_ORIGIN: process.env.API_ORIGIN ?? 'http://localhost:4000',
  DATABASE_URL:
    process.env.DATABASE_URL ?? 'postgresql://postgres:postgres@localhost:5432/stack',
  SHADOW_DATABASE_URL:
    process.env.SHADOW_DATABASE_URL ?? 'postgresql://postgres:postgres@localhost:5433/stack_shadow',
  REDIS_URL: process.env.REDIS_URL ?? 'redis://localhost:6379',
  RABBITMQ_URL: process.env.RABBITMQ_URL ?? 'amqp://guest:guest@localhost:5672',
  SMTP_HOST: process.env.SMTP_HOST ?? 'localhost',
  SMTP_PORT: process.env.SMTP_PORT ?? '1025',
  SMTP_SECURE: process.env.SMTP_SECURE ?? 'false',
  SMTP_USER: process.env.SMTP_USER ?? '',
  SMTP_PASSWORD: process.env.SMTP_PASSWORD ?? '',
  SMTP_FROM: process.env.SMTP_FROM ?? 'Stack Template <noreply@example.com>',
  BETTER_AUTH_SECRET:
    process.env.BETTER_AUTH_SECRET ?? 'change-me-change-me-change-me-change-me',
  BETTER_AUTH_URL: process.env.BETTER_AUTH_URL ?? 'http://localhost:4000',
  COOKIE_DOMAIN: process.env.COOKIE_DOMAIN ?? 'localhost',
  SPACES_ENDPOINT: process.env.SPACES_ENDPOINT ?? 'https://nyc3.digitaloceanspaces.com',
  SPACES_REGION: process.env.SPACES_REGION ?? 'nyc3',
  SPACES_BUCKET: process.env.SPACES_BUCKET ?? 'stack-template',
  SPACES_ACCESS_KEY: process.env.SPACES_ACCESS_KEY ?? 'local-access-key',
  SPACES_SECRET_KEY: process.env.SPACES_SECRET_KEY ?? 'local-secret-key',
});
