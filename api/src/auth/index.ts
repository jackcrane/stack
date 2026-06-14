import { toNodeHandler } from 'better-auth/node';

import { createAuth } from '@template/auth';

import { db } from '../infra/db/client';
import { mailer } from '../infra/mail/client';
import type { Express } from 'express';

import { env } from '../config/env';

export const auth = createAuth(env, db, (message) => mailer.send(message));

export const registerAuthRoutes = (app: Express) => {
  app.all('/api/auth/*', toNodeHandler(auth));
};
