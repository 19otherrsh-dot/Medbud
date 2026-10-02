# MedBud

Turborepo monorepo (npm workspaces).

| Path | What it is |
|------|------------|
| `apps/web` | Next.js 16 frontend (React 19, Tailwind 4) — http://localhost:3000 |
| `apps/backend` | Fastify API (JWT auth, Prisma) — http://localhost:8080 |
| `packages/database` | Prisma schema and client (`@medbud/database`) |

## Setup on a new machine

Requirements: Node.js 20+, npm, Git, and a PostgreSQL 15+ server (or `npx prisma dev` for a local Prisma Postgres).

```bash
git clone https://github.com/19otherrsh-dot/Medbud.git
cd Medbud
npm install
```

Recreate the env files from the committed templates (they hold the local dev defaults):

```bash
cp apps/backend/.env.example apps/backend/.env
cp packages/database/.env.example packages/database/.env
```

Optional for the web app: `apps/web/.env.local` with `NEXT_PUBLIC_API_URL=http://localhost:8080` (this is already the default).

Create a database named `medbud` in Postgres, then push the schema, generate the client and seed:

```bash
npm run db:push -w @medbud/database
npm run db:generate -w @medbud/database
npm run seed -w @medbud/backend
```

Run everything:

```bash
npm run dev
```

Health check: `GET http://localhost:8080/api/health` (see `apps/backend/src/routes/health.ts`).

## Not in the repo (regenerated automatically)

- `node_modules/` — `npm install`
- `.next/`, `dist/` — `npm run build` / `npm run dev`
- `.turbo/` — Turborepo cache
- `.env` files — copy from `.env.example` as above
