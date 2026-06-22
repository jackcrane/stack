import { Button, Card, TextField } from '@template/ui';

const meta = {
  title: 'Template/Card',
  component: Card,
};

export default meta;

export const Default = {
  render: () => (
    <Card>
      <div style={{ display: 'grid', gap: '1rem', width: 360 }}>
        <h2>Primitive sample</h2>
        <TextField id="storybook-field" label="Email" placeholder="hello@example.com" />
        <Button type="button">Continue</Button>
      </div>
    </Card>
  ),
};
