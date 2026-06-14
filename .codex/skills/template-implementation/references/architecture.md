# Architecture Reference

- `app/` owns route modules, providers, client-side composition, and feature UI.
- `api/` owns Express bootstrap, auth handlers, tRPC routers, services, repositories, workers, and runtime-only adapters.
- `packages/config`, `packages/errors`, `packages/logger`, and `packages/observability` are foundational and should stay small and reusable.
- `packages/rpc` owns shared tRPC setup and app-side client wiring.
- `packages/auth`, `packages/mail`, `packages/queue`, and `packages/storage` hide provider details behind stable interfaces.
- When adding a new external integration, prefer a new package if the concern is cross-cutting or likely to be reused.
