import { describe, expect, it } from 'vitest';

import { getMetricsRegistry, trackBackgroundJob } from './index.js';

describe('observability package', () => {
  it('tracks background job metrics', async () => {
    trackBackgroundJob('demo-job', 'completed');

    const metrics = await getMetricsRegistry().metrics();
    expect(metrics).toContain('background_job_total');
  });
});
