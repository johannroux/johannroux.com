## AGENTS.md

Guidance for AI agents working in this repo.

### Important: Next.js version

This repo uses a Next.js version that may differ from what you expect from training data. If an API seems unfamiliar,
check the local docs in `node_modules/next/dist/docs/` and follow deprecation notices.

### Project overview

- **Stack**: Next.js (static export), React, TypeScript, Tailwind.
- **Output**: Static export to `out/` (`output: "export"` in `next.config.ts`).
- **Content**: Authored in `content/pages/**/*.mdx` and rendered via the app router (`app/**`).

### Commands

```bash
npm install
npm run dev
```

```bash
npm run lint
npm run build
```

### Static export + base path

- Static export is enabled with `trailingSlash: true`.
- Deploys may set `NEXT_PUBLIC_BASE_PATH` to host under a subpath. This affects both `basePath` and `assetPrefix`.

When changing routing, links, or asset URLs, ensure they work with and without a base path.

### Repo hygiene (important)

- **Do not commit build artifacts**: `out/` and `.next/` should stay untracked (see `.gitignore`).
- **Avoid committing secrets**: `.env*` is ignored by default.

### Editing conventions

- Prefer changing copy in `content/pages/**/*.mdx` over hardcoding text in `app/**`.
- Keep components small and composable in `components/**`.
- Use TypeScript and React function components; avoid `any` unless there’s a concrete reason.

### Before finishing a change

- If you touched TS/JS/MDX rendering code, run `npm run lint`.
- If you changed content pages, sanity-check the relevant route(s) in dev mode.
