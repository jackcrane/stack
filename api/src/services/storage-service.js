export const createStorageService = (client) => ({
  async createSignedUpload(key, contentType) {
    const url = await client.createUploadUrl(key, contentType);

    return {
      key,
      contentType,
      url,
    };
  },
});
