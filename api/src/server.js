import { createApp } from './app/create-app.js';
import { env } from './config/env.js';
import { runExampleWorker } from './workers/example-worker.js';

const app = createApp();

app.listen(env.API_PORT, () => {
  console.log(`API listening on ${env.API_ORIGIN}`);
});

void runExampleWorker();
