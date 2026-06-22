import { getMetricsRegistry, httpRequestDuration } from '@template/observability';

export const metricsRegistry = getMetricsRegistry();
export { httpRequestDuration };
