import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

import type { ApiConfig } from '@template/config';
import type { Logger } from '@template/logger';

export const createStorageClient = (
  config: Pick<
    ApiConfig,
    'SPACES_ACCESS_KEY' | 'SPACES_SECRET_KEY' | 'SPACES_BUCKET' | 'SPACES_ENDPOINT' | 'SPACES_REGION'
  >,
  logger: Logger,
) => {
  const client = new S3Client({
    region: config.SPACES_REGION,
    endpoint: config.SPACES_ENDPOINT,
    forcePathStyle: false,
    credentials: {
      accessKeyId: config.SPACES_ACCESS_KEY,
      secretAccessKey: config.SPACES_SECRET_KEY,
    },
  });

  return {
    async createUploadUrl(key: string, contentType: string) {
      logger.info({ key, contentType }, 'creating signed upload url');

      return getSignedUrl(
        client,
        new PutObjectCommand({
          Bucket: config.SPACES_BUCKET,
          Key: key,
          ContentType: contentType,
        }),
        { expiresIn: 60 * 5 },
      );
    },
  };
};
