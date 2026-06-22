import { describe, expect, it } from 'vitest';

import { createLogger } from './index.js';

describe('logger package', () => {
  it('creates a logger instance', () => {
    const logger = createLogger({ name: 'test-logger' });

    expect(logger).toBeDefined();
  });
});
