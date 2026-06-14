import { rpcCore } from '../core';

export const createUserRouter = (userRepository: {
  listRecentUsers: (limit?: number) => Promise<unknown>;
}) =>
  rpcCore.router({
    recent: rpcCore.protectedProcedure.query(() => userRepository.listRecentUsers()),
  });
