# Template Directives

- Preserve the top-level split between `app/`, `api/`, and `packages/`.
- Keep cross-cutting concerns in shared packages before duplicating helpers in app or api.
- Route handlers should stay thin and call service-layer functions.
- Vendor SDK usage belongs in infra adapters or shared packages, not route components.
- New features should add the narrowest useful tests first: unit, then integration, then E2E when behavior crosses boundaries.
- Storybook should cover representative primitives and composed states without blocking early delivery on exhaustive story inventories.
- Deployment changes must update Docker, GitHub Actions, Terraform, and README guidance together when the runtime contract changes.
