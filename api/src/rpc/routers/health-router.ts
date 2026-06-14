import { rpcCore } from '../core';

export const createHealthRouter = (healthService: {
  getSnapshot: () => { status: 'ok'; timestamp: string };
}) =>
  rpcCore.router({
    snapshot: rpcCore.publicProcedure.query(() => healthService.getSnapshot()),
  });
