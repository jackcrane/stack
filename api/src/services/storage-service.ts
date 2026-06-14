export const createStorageService = (client: {
  createUploadUrl: (key: string, contentType: string) => Promise<string>;
}) => ({
  async createSignedUpload(key: string, contentType: string) {
    const url = await client.createUploadUrl(key, contentType);

    return {
      key,
      contentType,
      url,
    };
  },
});
