import { TRPCError } from '@trpc/server';
import { ZodError } from 'zod';

export class AppError extends Error {
  constructor(
    message: string,
    public readonly code:
      | 'BAD_REQUEST'
      | 'UNAUTHORIZED'
      | 'FORBIDDEN'
      | 'NOT_FOUND'
      | 'CONFLICT'
      | 'DEPENDENCY_FAILURE'
      | 'INTERNAL_SERVER_ERROR' = 'INTERNAL_SERVER_ERROR',
    public readonly cause?: unknown,
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class ValidationError extends AppError {
  constructor(message: string, cause?: unknown) {
    super(message, 'BAD_REQUEST', cause);
    this.name = 'ValidationError';
  }
}

export class AuthenticationError extends AppError {
  constructor(message = 'Authentication required', cause?: unknown) {
    super(message, 'UNAUTHORIZED', cause);
    this.name = 'AuthenticationError';
  }
}

export class AuthorizationError extends AppError {
  constructor(message = 'Not allowed', cause?: unknown) {
    super(message, 'FORBIDDEN', cause);
    this.name = 'AuthorizationError';
  }
}

export class DependencyError extends AppError {
  constructor(message: string, cause?: unknown) {
    super(message, 'DEPENDENCY_FAILURE', cause);
    this.name = 'DependencyError';
  }
}

export const isAppError = (value: unknown): value is AppError => value instanceof AppError;

export const toHttpStatus = (error: AppError): number => {
  switch (error.code) {
    case 'BAD_REQUEST':
      return 400;
    case 'UNAUTHORIZED':
      return 401;
    case 'FORBIDDEN':
      return 403;
    case 'NOT_FOUND':
      return 404;
    case 'CONFLICT':
      return 409;
    case 'DEPENDENCY_FAILURE':
      return 503;
    default:
      return 500;
  }
};

export const toTrpcError = (error: unknown): TRPCError => {
  if (error instanceof TRPCError) {
    return error;
  }

  if (error instanceof ZodError) {
    return new TRPCError({
      code: 'BAD_REQUEST',
      message: error.flatten().formErrors.join(', ') || 'Validation failed',
      cause: error,
    });
  }

  if (error instanceof AppError) {
    const codeMap: Record<AppError['code'], TRPCError['code']> = {
      BAD_REQUEST: 'BAD_REQUEST',
      UNAUTHORIZED: 'UNAUTHORIZED',
      FORBIDDEN: 'FORBIDDEN',
      NOT_FOUND: 'NOT_FOUND',
      CONFLICT: 'CONFLICT',
      DEPENDENCY_FAILURE: 'INTERNAL_SERVER_ERROR',
      INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
    };

    return new TRPCError({
      code: codeMap[error.code],
      message: error.message,
      cause: error,
    });
  }

  return new TRPCError({
    code: 'INTERNAL_SERVER_ERROR',
    message: 'Unexpected error',
    cause: error,
  });
};

export const normalizeError = (error: unknown): AppError => {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof ZodError) {
    return new ValidationError('Validation failed', error);
  }

  if (error instanceof Error) {
    return new AppError(error.message, 'INTERNAL_SERVER_ERROR', error);
  }

  return new AppError('Unexpected error', 'INTERNAL_SERVER_ERROR', error);
};
