import { rpcCore } from './core.js';
import { createHealthRouter } from './routers/health-router.js';
import { createTemplateRouter } from './routers/template-router.js';
import { createUserRouter } from './routers/user-router.js';

export const createAppRouter = (deps) =>
  rpcCore.router({
    health: createHealthRouter(deps.healthService),
    template: createTemplateRouter(deps.templateService, deps.storageService),
    users: createUserRouter(deps.userRepository),
  });
