import { toNodeHandler } from 'better-auth/node';

import { createAuth } from '@template/auth';

import { env } from '../config/env.js';
import { db } from '../infra/db/client.js';
import { mailer } from '../infra/mail/client.js';

export const auth = createAuth(env, db, (message) => mailer.send(message));

export const registerAuthRoutes = (app) => {
  app.all('/api/auth/*', toNodeHandler(auth));
};
