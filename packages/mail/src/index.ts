import nodemailer from 'nodemailer';

import type { ApiConfig } from '@template/config';
import type { Logger } from '@template/logger';

export type MailMessage = {
  to: string;
  subject: string;
  html: string;
  text: string;
};

export const createMailer = (config: ApiConfig, logger: Logger) => {
  const transporter = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: config.SMTP_PORT,
    secure: config.SMTP_SECURE,
    auth:
      config.SMTP_USER && config.SMTP_PASSWORD
        ? {
            user: config.SMTP_USER,
            pass: config.SMTP_PASSWORD,
          }
        : undefined,
  });

  return {
    async send(message: MailMessage) {
      logger.info({ to: message.to, subject: message.subject }, 'sending email');

      return transporter.sendMail({
        from: config.SMTP_FROM,
        ...message,
      });
    },
  };
};

export const buildAuthEmail = (type: 'verify' | 'reset', url: string): MailMessage => ({
  to: 'user@example.com',
  subject: type === 'verify' ? 'Verify your email' : 'Reset your password',
  text:
    type === 'verify'
      ? `Verify your email by visiting ${url}`
      : `Reset your password by visiting ${url}`,
  html:
    type === 'verify'
      ? `<p>Verify your email by <a href="${url}">clicking here</a>.</p>`
      : `<p>Reset your password by <a href="${url}">clicking here</a>.</p>`,
});
