---
name: template-implementation
description: Implement and extend this repository's full-stack application template. Use when Codex is asked to add features, infrastructure, tests, or documentation in this repo and needs to preserve the app/api/packages layering, shared package boundaries, tRPC contracts, Prisma 7 conventions, Better Auth wiring, Docker/Terraform deployment model, and pragmatic Storybook coverage expectations.
---

# Template Implementation

Follow the repository shape strictly:

- Put frontend code in `app/`.
- Put backend code in `api/`.
- Put shared logic in `packages/`.
- Keep infrastructure in `infra/`.

## Working rules

- Extend package interfaces before reaching for direct vendor imports in `app/` or `api/`.
- Keep Express handlers, tRPC procedures, and React route modules thin.
- Prefer service and adapter layers for business logic and side effects.
- Preserve Prisma 7 conventions:
  - ESM-first TypeScript
  - explicit generated client output
  - driver adapter usage for Postgres
- Preserve auth conventions:
  - Better Auth email/password baseline
  - SMTP-backed verification and reset flows
- Preserve deployment conventions:
  - app droplet for frontend/backend
  - stateful droplet for Postgres/Redis/RabbitMQ
  - DigitalOcean Spaces for object storage

## Testing expectations

- Add unit tests for new logic in shared packages or services.
- Add integration tests when behavior crosses API/data/infrastructure boundaries.
- Add or update Storybook stories for representative UI states, not necessarily every primitive.
- Add Cypress coverage for workflows that matter to end users.

## References

- For architecture expectations, read `references/architecture.md`.
- For delivery expectations, read `references/delivery.md`.
