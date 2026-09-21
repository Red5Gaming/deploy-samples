# deploy-samples

Small, deliberately boring apps in the frameworks people actually deploy. Each one listens on `PORT`
(default 3000), answers `GET /` with a JSON greeting and `GET /healthz` with `ok`, and reads nothing but
environment variables. Handy for testing build pipelines, buildpacks and PaaS setups.

| Directory | What | Build |
|---|---|---|
| `nuxt-ssr/` | Nuxt 4, server-rendered | auto-detected (Node) |
| `nest-prisma/` | NestJS + Prisma with a migration (`DATABASE_URL`, Postgres) | auto-detected (Node); run `npx prisma migrate deploy` before start |
| `fastapi/` | Python FastAPI + uvicorn | auto-detected (Python) |
| `go/` | Go net/http | auto-detected (Go) |
| `dockerfile/` | Plain Dockerfile (busybox httpd) | `docker build` |
| `astro-static/` | Astro static site | auto-detected (Node, static output in `dist/`) |
| `monorepo/` | pnpm workspace with `apps/web` (static) and `apps/api` (Node) | build each app from its directory |
| `worker-cron/` | Node app with a web process, a worker loop and a cron script | `node web.js`, `node worker.js`, `node cron.js` |

MIT.
