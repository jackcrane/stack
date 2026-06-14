import { parseWebConfig } from '@template/config';

export const webConfig = parseWebConfig({
  APP_NAME: import.meta.env.VITE_APP_NAME ?? 'stack-template',
  APP_ORIGIN: import.meta.env.VITE_APP_ORIGIN ?? 'http://localhost:5173',
  API_ORIGIN: import.meta.env.VITE_API_ORIGIN ?? 'http://localhost:4000',
  NODE_ENV: import.meta.env.MODE,
});
