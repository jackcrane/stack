export const createHealthService = () => ({
  getSnapshot() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  },
});
