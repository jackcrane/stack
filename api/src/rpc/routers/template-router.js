import { z } from 'zod';

import { rpcCore } from '../core.js';

export const createTemplateRouter = (templateService, storageService) =>
  rpcCore.router({
    overview: rpcCore.publicProcedure.query(() => templateService.getOverview()),
    createSignedUpload: rpcCore.protectedProcedure
      .input(
        z.object({
          key: z.string().min(1),
          contentType: z.string().min(1),
        }),
      )
      .mutation(({ input }) => storageService.createSignedUpload(input.key, input.contentType)),
  });
