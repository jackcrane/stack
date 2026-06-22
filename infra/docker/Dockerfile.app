FROM node:24-alpine AS base
WORKDIR /workspace
RUN corepack enable

COPY package.json pnpm-workspace.yaml turbo.json ./
COPY app/package.json app/package.json
COPY packages ./packages

RUN pnpm install --filter @template/app... --frozen-lockfile=false

COPY app ./app

RUN pnpm --filter @template/app build

FROM nginx:1.27-alpine
COPY --from=base /workspace/app/dist /usr/share/nginx/html
