import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { app } from '../helpers/test-app';

describe('health endpoints', () => {
  it('returns a health snapshot', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
  });
});
