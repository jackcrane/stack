import { Connection } from 'rabbitmq-client';

import type { ApiConfig } from '@template/config';
import type { Logger } from '@template/logger';

export type QueueEnvelope<TPayload> = {
  name: string;
  payload: TPayload;
};

export const createQueueClient = (config: Pick<ApiConfig, 'RABBITMQ_URL'>, logger: Logger) => {
  const connection = new Connection(config.RABBITMQ_URL);

  return {
    connection,
    async publish<TPayload>(routingKey: string, payload: QueueEnvelope<TPayload>) {
      logger.info({ routingKey }, 'publishing queue message');
      const publisher = await connection.createPublisher({
        confirm: true,
      });

      await publisher.send(
        {
          routingKey,
        },
        payload,
      );
    },
  };
};
