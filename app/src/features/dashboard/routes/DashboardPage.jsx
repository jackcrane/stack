import { Card } from '@template/ui';

const cards = [
  { title: 'Observability', body: 'Wire traces, metrics, and request logging from day one.' },
  { title: 'Async work', body: 'Queue background jobs without inventing a second architecture later.' },
  { title: 'Delivery', body: 'Ship with Docker, CI, and Terraform already aligned.' },
];

export const DashboardPage = () => (
  <section>
    <div>
      <p>Authenticated area</p>
      <h1>Template dashboard</h1>
    </div>
    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
      {cards.map((card) => (
        <Card key={card.title}>
          <h2>{card.title}</h2>
          <p>{card.body}</p>
        </Card>
      ))}
    </div>
  </section>
);
