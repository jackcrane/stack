import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const createStorageClient = (config, logger) => {
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
    async createUploadUrl(key, contentType) {
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
