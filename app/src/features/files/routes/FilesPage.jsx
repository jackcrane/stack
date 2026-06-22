import { Button, Card, TextField } from '@template/ui';

export const FilesPage = () => (
  <Card>
    <h1>Upload workflow stub</h1>
    <p>
      This screen is here to anchor Spaces uploads, signed URL flow, and one Cypress path without
      forcing a full product implementation into the template.
    </p>
    <form style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
      <TextField id="file-name" label="Object key" placeholder="documents/demo.txt" />
      <TextField id="content-type" label="Content type" placeholder="text/plain" />
      <Button type="submit">Request signed upload URL</Button>
    </form>
  </Card>
);
