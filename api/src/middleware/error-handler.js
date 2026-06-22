import { normalizeError, toHttpStatus } from '@template/errors';

export const errorHandler = (error, _request, response, _next) => {
  const normalized = normalizeError(error);

  response.status(toHttpStatus(normalized)).json({
    error: {
      code: normalized.code,
      message: normalized.message,
    },
  });
};
