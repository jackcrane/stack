import { createMailer } from '@template/mail';

import { createLogger } from '@template/logger';

import { env } from '../../config/env';

export const mailer = createMailer(env, createLogger({ name: 'mail' }));
