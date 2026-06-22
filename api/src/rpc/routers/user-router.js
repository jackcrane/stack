import { rpcCore } from '../core.js';

export const createUserRouter = (userRepository) =>
  rpcCore.router({
    recent: rpcCore.protectedProcedure.query(() => userRepository.listRecentUsers()),
  });
