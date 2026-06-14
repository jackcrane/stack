import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { createExpressMiddleware } from '@trpc/server/adapters/express';

import { createRequestLogger } from '@template/logger';

import { registerAuthRoutes } from '../auth';
import { env } from '../config/env';
import { registerHttpRoutes } from '../http/routes';
import { httpRequestDuration } from '../infra/observability/metrics';
import { errorHandler } from '../middleware/error-handler';
import { createAppRouter } from '../rpc/router';
import { createRpcContext } from '../rpc/context';
import { createUserRepository } from '../repositories/user-repository';
import { createHealthService } from '../services/health-service';
import { createStorageService } from '../services/storage-service';
import { createTemplateService } from '../services/template-service';
import { db } from '../infra/db/client';
import { storage } from '../infra/storage/client';

export const createApp = () => {
  const app = express();
  const requestLogger = createRequestLogger();

  const healthService = createHealthService();
  const templateService = createTemplateService();
  const storageService = createStorageService(storage);
  const userRepository = createUserRepository(db);
  const appRouter = createAppRouter({
    healthService,
    templateService,
    storageService,
    userRepository,
  });

  registerAuthRoutes(app);

  app.use(
    cors({
      credentials: true,
      origin: env.APP_ORIGIN,
    }),
  );
  app.use(helmet());
  app.use(requestLogger);
  app.use(express.json());

  app.use((request, response, next) => {
    const end = httpRequestDuration.startTimer({
      method: request.method,
      route: request.path,
    });

    response.on('finish', () => {
      end({
        status_code: response.statusCode.toString(),
      });
    });

    next();
  });

  registerHttpRoutes(app, healthService);

  app.use(
    '/api/v1/trpc',
    createExpressMiddleware({
      router: appRouter,
      createContext: createRpcContext,
    }),
  );

  app.use(errorHandler);

  return app;
};
