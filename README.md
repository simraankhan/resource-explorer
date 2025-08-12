# Resource Explorer — Next.js + TypeScript (Rick & Morty)

This single-file project scaffold contains a minimal, working Next.js + TypeScript **Resource Explorer** that implements the Must‑Have requirements using the Rick & Morty API.

**What it includes (implemented):**

- Next.js + TypeScript project structure
- List view with pagination (API pagination) and detail route `/characters/[id]`
- Debounced search (300ms) bound to URL query param `q`
- Filter (`name`), sort (`name` asc/desc) and page in URL
- Favorites persisted in `localStorage` with toggle from list & detail
- Loading and error state with retry
- Requests cancelled/managed via AbortController inside fetcher function of react query
- React Query (TanStack Query) for caching and background refetch

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
