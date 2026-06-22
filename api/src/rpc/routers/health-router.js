import { rpcCore } from '../core.js';

export const createHealthRouter = (healthService) =>
  rpcCore.router({
    snapshot: rpcCore.publicProcedure.query(() => healthService.getSnapshot()),
  });
