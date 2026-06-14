import { Card } from '@template/ui';

import styles from './HomePage.module.css';

const pillars = [
  'React + Vite + Router',
  'Express + tRPC + Better Auth',
  'Prisma 7 + Postgres',
  'RabbitMQ + Redis + Spaces + SMTP',
];

export const HomePage = () => (
  <div className={styles.layout}>
    <section className={styles.hero}>
      <p className={styles.muted}>A reusable starting point for organized product teams.</p>
      <h1>Build web applications on a template that already respects boundaries.</h1>
      <p className={styles.muted}>
        Frontend, backend, infrastructure, testing, and deployment live in one opinionated
        workspace so every new app starts with the same strong defaults.
      </p>
    </section>
    <section className={styles.metrics}>
      {pillars.map((pillar) => (
        <Card key={pillar}>
          <strong>{pillar}</strong>
        </Card>
      ))}
    </section>
  </div>
);
