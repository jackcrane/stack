import type { Request } from 'express';

import type { RpcContext } from '@template/rpc';

export const createRpcContext = async ({
  req,
}: {
  req: Request;
}): Promise<RpcContext> => ({
  requestId: (req.headers['x-request-id'] as string | undefined) ?? `req_${crypto.randomUUID()}`,
  session: {
    userId: null,
    email: null,
  },
});
