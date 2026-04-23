# Pitchr

> Agency proposals, written in ten minutes.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict)
- **Styles:** Tailwind CSS v4 (CSS-first, no config file)
- **Runtime:** React 19
- **Package manager:** pnpm

## Routes

| Route | Description |
|---|---|
| `/` | Landing page with waitlist form |
| `/try` | Proposal generator (client name, description, budget → mocked proposal) |
| `/api/waitlist` | POST `{ email }` → proxies to waitlist service |

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Deploy to [Vercel](https://vercel.com) — zero config required. Push to `main` and Vercel picks it up automatically.

```bash
vercel --prod
```

## Status

v0 skeleton. Landing page ported from static HTML. `/try` uses mocked proposal output. Waitlist API proxies to `waitlist-api-sigma.vercel.app`.
