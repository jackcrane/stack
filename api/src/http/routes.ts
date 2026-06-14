import type { Express, Request, Response } from 'express';

import { metricsRegistry } from '../infra/observability/metrics';

export const registerHttpRoutes = (
  app: Express,
  healthService: {
    getSnapshot: () => { status: 'ok'; timestamp: string };
  },
) => {
  app.get('/health', (_request: Request, response: Response) => {
    response.json(healthService.getSnapshot());
  });

  app.get('/ready', (_request: Request, response: Response) => {
    response.json({
      status: 'ready',
    });
  });

  app.get('/metrics', async (_request: Request, response: Response) => {
    response.setHeader('Content-Type', metricsRegistry.contentType);
    response.send(await metricsRegistry.metrics());
  });
};
