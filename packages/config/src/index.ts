import { z } from 'zod';

const baseSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  APP_NAME: z.string().default('stack-template'),
});

const webSchema = baseSchema.extend({
  APP_ORIGIN: z.string().url(),
  API_ORIGIN: z.string().url(),
});

const apiSchema = baseSchema.extend({
  API_PORT: z.coerce.number().default(4000),
  APP_ORIGIN: z.string().url(),
  API_ORIGIN: z.string().url(),
  DATABASE_URL: z.string().min(1),
  SHADOW_DATABASE_URL: z.string().min(1),
  REDIS_URL: z.string().min(1),
  RABBITMQ_URL: z.string().min(1),
  SMTP_HOST: z.string().min(1),
  SMTP_PORT: z.coerce.number().default(1025),
  SMTP_SECURE: z.coerce.boolean().default(false),
  SMTP_USER: z.string().optional().default(''),
  SMTP_PASSWORD: z.string().optional().default(''),
  SMTP_FROM: z.string().min(1),
  BETTER_AUTH_SECRET: z.string().min(1),
  BETTER_AUTH_URL: z.string().url(),
  COOKIE_DOMAIN: z.string().min(1),
  SPACES_ENDPOINT: z.string().url(),
  SPACES_REGION: z.string().min(1),
  SPACES_BUCKET: z.string().min(1),
  SPACES_ACCESS_KEY: z.string().min(1),
  SPACES_SECRET_KEY: z.string().min(1),
});

export type BaseConfig = z.infer<typeof baseSchema>;
export type WebConfig = z.infer<typeof webSchema>;
export type ApiConfig = z.infer<typeof apiSchema>;

export const parseBaseConfig = (env: Record<string, string | undefined>): BaseConfig =>
  baseSchema.parse(env);

export const parseWebConfig = (env: Record<string, string | undefined>): WebConfig =>
  webSchema.parse(env);

export const parseApiConfig = (env: Record<string, string | undefined>): ApiConfig =>
  apiSchema.parse(env);
