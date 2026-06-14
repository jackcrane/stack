import type { NextFunction, Request, Response } from 'express';

import { normalizeError, toHttpStatus } from '@template/errors';

export const errorHandler = (
  error: unknown,
  _request: Request,
  response: Response,
  _next: NextFunction,
) => {
  const normalized = normalizeError(error);

  response.status(toHttpStatus(normalized)).json({
    error: {
      code: normalized.code,
      message: normalized.message,
    },
  });
};
