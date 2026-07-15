# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

Package manager is pnpm (see `pnpm-lock.yaml` / `pnpm-workspace.yaml`) — use `pnpm`, not `npm`/`yarn`.

- `pnpm dev` — start the dev server (Turbopack)
- `pnpm build` — production build
- `pnpm start` — run the production build
- `pnpm lint` — ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next`)

There is no test runner configured in this repo yet.

## Architecture

This is a fresh `create-next-app` scaffold (Next.js 16.2.10, React 19) using the App Router — currently just the default root route in `app/`. There is no `src/` directory; `app/` and `public/` live at the repo root.

- Routing, layouts, data fetching, etc. follow App Router conventions (`app/layout.tsx`, `app/page.tsx`, and file conventions like `page`/`layout`/`loading`/`error`/`route`).
- Styling is Tailwind CSS v4 via `@tailwindcss/postcss` (see `postcss.config.mjs`), plus `app/globals.css`. There is no `tailwind.config.*` — v4 is configured via CSS/PostCSS, not a JS config file.
- Path alias `@/*` maps to the repo root (`tsconfig.json`).

### Next.js 16 API changes relevant here (per AGENTS.md)

Since this Next.js version postdates most training data, double-check `node_modules/next/dist/docs/` before using an API that looks even slightly unfamiliar. One change worth knowing up front:

- **Middleware is now called Proxy.** A root-level request-interception file is `proxy.ts`/`proxy.js` (exporting `proxy`, not `middleware`) — see `node_modules/next/dist/docs/01-app/01-getting-started/16-proxy.md`.
