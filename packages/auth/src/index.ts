import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';

import type { ApiConfig } from '@template/config';
import type { DatabaseClient } from '@template/db';

type MailSender = (input: {
  to: string;
  subject: string;
  text: string;
  html: string;
}) => Promise<unknown>;

export const createAuth = (config: ApiConfig, database: DatabaseClient, sendMail: MailSender) =>
  betterAuth({
    baseURL: config.BETTER_AUTH_URL,
    secret: config.BETTER_AUTH_SECRET,
    database: prismaAdapter(database, {
      provider: 'postgresql',
    }),
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: true,
      sendResetPassword: async ({ user, url }) => {
        await sendMail({
          to: user.email,
          subject: 'Reset your password',
          text: `Reset your password at ${url}`,
          html: `<p>Reset your password <a href="${url}">here</a>.</p>`,
        });
      },
    },
    emailVerification: {
      sendVerificationEmail: async ({ user, url }) => {
        await sendMail({
          to: user.email,
          subject: 'Verify your email',
          text: `Verify your email at ${url}`,
          html: `<p>Verify your email <a href="${url}">here</a>.</p>`,
        });
      },
    },
    trustedOrigins: [config.APP_ORIGIN, config.API_ORIGIN],
  });
