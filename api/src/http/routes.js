import { metricsRegistry } from '../infra/observability/metrics.js';

export const registerHttpRoutes = (app, healthService) => {
  app.get('/health', (_request, response) => {
    response.json(healthService.getSnapshot());
  });

  app.get('/ready', (_request, response) => {
    response.json({
      status: 'ready',
    });
  });

  app.get('/metrics', async (_request, response) => {
    response.setHeader('Content-Type', metricsRegistry.contentType);
    response.send(await metricsRegistry.metrics());
  });
};
