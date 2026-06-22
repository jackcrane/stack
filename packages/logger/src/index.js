import pino from 'pino';
import pinoHttp from 'pino-http';

export const createLogger = (options = {}) =>
  pino({
    level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
    transport:
      process.env.NODE_ENV === 'development'
        ? {
            target: 'pino-pretty',
            options: {
              colorize: true,
            },
          }
        : undefined,
    ...options,
  });

export const createRequestLogger = () =>
  pinoHttp({
    logger: createLogger(),
    genReqId: (request) =>
      request.headers['x-request-id']?.toString() ?? `req_${crypto.randomUUID()}`,
    customProps: (request) => ({
      correlationId: request.headers['x-correlation-id']?.toString() ?? null,
    }),
  });

export const withLogContext = (logger, bindings) => logger.child(bindings);
