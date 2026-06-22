import { QueryClient } from '@tanstack/react-query';
import { createTRPCReact, httpBatchLink, loggerLink } from '@trpc/react-query';
import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { ZodError } from 'zod';

import { AuthenticationError } from '@template/errors';

export const createRpcCore = () => {
  const t = initTRPC.context().create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
      if (error.cause instanceof ZodError) {
        return {
          ...shape,
          data: {
            ...shape.data,
            zodError: error.cause.flatten(),
          },
        };
      }

      return shape;
    },
  });

  return {
    t,
    publicProcedure: t.procedure,
    protectedProcedure: t.procedure.use(({ ctx, next }) => {
      if (!ctx.session.userId) {
        throw new AuthenticationError();
      }

      return next();
    }),
    router: t.router,
  };
};

export const trpcReact = createTRPCReact();

export const createRpcClient = (baseUrl) => ({
  queryClient: new QueryClient(),
  clientConfig: {
    links: [
      loggerLink({
        enabled: () => import.meta.env?.DEV ?? false,
      }),
      httpBatchLink({
        url: `${baseUrl}/api/v1/trpc`,
        transformer: superjson,
        fetch(url, options) {
          return fetch(url, {
            ...options,
            credentials: 'include',
          });
        },
      }),
    ],
  },
});
