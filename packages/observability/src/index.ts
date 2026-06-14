import { Counter, Histogram, Registry, collectDefaultMetrics } from 'prom-client';

const registry = new Registry();

collectDefaultMetrics({ register: registry });

export const httpRequestDuration = new Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in milliseconds',
  labelNames: ['method', 'route', 'status_code'],
  registers: [registry],
});

export const backgroundJobCounter = new Counter({
  name: 'background_job_total',
  help: 'Background jobs processed',
  labelNames: ['job', 'status'],
  registers: [registry],
});

export const getMetricsRegistry = () => registry;

export const trackBackgroundJob = (job: string, status: 'started' | 'completed' | 'failed') => {
  backgroundJobCounter.inc({ job, status });
};
