import { Connection } from 'rabbitmq-client';

export const createQueueClient = (config, logger) => {
  const connection = new Connection(config.RABBITMQ_URL);

  return {
    connection,
    async publish(routingKey, payload) {
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
