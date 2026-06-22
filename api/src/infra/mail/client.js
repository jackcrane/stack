import { createMailer } from '@template/mail';

import { createLogger } from '@template/logger';

import { env } from '../../config/env.js';

export const mailer = createMailer(env, createLogger({ name: 'mail' }));
