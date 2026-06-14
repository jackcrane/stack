import { createApp } from './app/create-app';
import { env } from './config/env';
import { runExampleWorker } from './workers/example-worker';

const app = createApp();

app.listen(env.API_PORT, () => {
  console.log(`API listening on ${env.API_ORIGIN}`);
});

void runExampleWorker();
