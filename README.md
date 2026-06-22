# Stack Template

Opinionated full-stack template for consistent web applications using `app/` for the React frontend and `api/` for the Express backend, with JavaScript as the default language everywhere practical.

## Included stack

- React + Vite + React Router
- Express + tRPC
- Prisma 7 + Postgres
- Better Auth with email/password baseline
- SMTP mail delivery with Mailpit for local development
- Redis, RabbitMQ, and DigitalOcean Spaces-compatible storage
- Radix UI primitives wrapped in shared UI components
- CSS Modules
- Storybook, Vitest, Cypress, Docker, GitHub Actions, and Terraform

## Workspace layout

```text
app/                 React application shell
api/                 Express API, tRPC, auth, services, workers
packages/            Shared libraries and interfaces
prisma/              Prisma schema, migrations, seed
infra/               Docker and Terraform assets
.github/workflows/   CI, Docker push, Terraform validation
.codex/              Repo-local Codex skills
.agents/             Repo-local agent directives
```

## Shared packages

- `@template/auth`: Better Auth factory and server helpers
- `@template/config`: environment parsing
- `@template/db`: Prisma 7 client factory
- `@template/errors`: domain and transport error utilities
- `@template/logger`: structured logging primitives
- `@template/mail`: SMTP transport abstraction
- `@template/observability`: metrics and tracing hooks
- `@template/queue`: RabbitMQ publishing abstraction
- `@template/rpc`: shared tRPC foundation for app/api
- `@template/storage`: S3-compatible upload helpers
- `@template/test-utils`: lightweight test helpers
- `@template/ui`: reusable UI primitives

## Local setup

1. Copy `.env.example` to `.env` and fill in secrets.
2. Start infrastructure with `npm run dev:infra`.
3. Install workspace dependencies with `pnpm install`.
4. Generate Prisma client with `pnpm prisma generate`.
5. Run migrations with `pnpm prisma migrate dev`.
6. Seed data with `pnpm prisma:seed`.
7. Start the stack with `pnpm dev`.

## Testing

- `pnpm test`: unit tests across workspaces
- `pnpm test:integration`: API integration tests
- `pnpm build-storybook`: Storybook validation without requiring exhaustive story coverage
- `pnpm test:e2e`: Cypress E2E suite

## Deployment model

- App droplet: ephemeral Docker host for frontend and backend images
- Stateful droplet: persistent Docker host for Postgres, Redis, and RabbitMQ
- Spaces: S3-compatible object storage on DigitalOcean

The `infra/terraform` directory is intentionally modular so derived apps can swap droplet sizes, regions, or bootstrap scripts without rewriting the overall topology.

## Notes for derived apps

- Keep new business logic in feature/service layers before touching infra adapters.
- Add stories for representative primitives and composed components, not necessarily every atom on day one.
- Prefer extending shared packages over importing vendor SDKs directly in route components or handlers.
- Keep auth, storage, mail, and queue calls behind package interfaces so future provider changes stay localized.
