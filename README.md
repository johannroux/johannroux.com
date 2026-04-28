## johannroux.com

Personal website built with [Next.js](https://nextjs.org). This repo is configured as a **static export**
(`output: "export"` in `next.config.ts`), producing an `out/` directory.

### Development

This repo is set up for pnpm. If you don't have pnpm installed, enable it via Corepack:

```bash
corepack enable
```

```bash
pnpm install
pnpm run dev
```

Then open `http://localhost:3000`.

### Build

```bash
pnpm run build
```

### Deploy (Cloudflare Pages)

- **Build command**: `pnpm run build`
- **Build output directory**: `out`

#### Base path (only if deploying under a subpath)

If deploying under a subpath (e.g. `https://example.com/my-site`), set:

- `NEXT_PUBLIC_BASE_PATH=/my-site`
