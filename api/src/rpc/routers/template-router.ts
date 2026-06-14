import { z } from 'zod';

import { rpcCore } from '../core';

export const createTemplateRouter = (
  templateService: {
    getOverview: () => Promise<{ message: string; checklist: string[] }>;
  },
  storageService: {
    createSignedUpload: (
      key: string,
      contentType: string,
    ) => Promise<{ key: string; contentType: string; url: string }>;
  },
) =>
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
