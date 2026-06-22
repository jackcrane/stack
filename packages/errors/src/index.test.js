import { describe, expect, it } from 'vitest';

import { AuthenticationError, toHttpStatus } from './index.js';

describe('errors package', () => {
  it('maps auth errors to 401', () => {
    expect(toHttpStatus(new AuthenticationError())).toBe(401);
  });
});
