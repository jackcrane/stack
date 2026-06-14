import { createHealthRouter } from './routers/health-router';
import { createTemplateRouter } from './routers/template-router';
import { createUserRouter } from './routers/user-router';
import { rpcCore } from './core';

export const createAppRouter = (deps: {
  healthService: Parameters<typeof createHealthRouter>[0];
  templateService: Parameters<typeof createTemplateRouter>[0];
  storageService: Parameters<typeof createTemplateRouter>[1];
  userRepository: Parameters<typeof createUserRouter>[0];
}) =>
  rpcCore.router({
    health: createHealthRouter(deps.healthService),
    template: createTemplateRouter(deps.templateService, deps.storageService),
    users: createUserRouter(deps.userRepository),
  });

export type AppRouter = ReturnType<typeof createAppRouter>;
