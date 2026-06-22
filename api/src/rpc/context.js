export const createRpcContext = async ({ req }) => ({
  requestId: req.headers['x-request-id']?.toString() ?? `req_${crypto.randomUUID()}`,
  session: {
    userId: null,
    email: null,
  },
});
