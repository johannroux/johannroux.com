## johannroux.com

Personal website built with [Next.js](https://nextjs.org). This repo is configured as a **static export**
(`output: "export"` in `next.config.ts`), producing an `out/` directory.

### Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

### Build

```bash
npm run build
```

### Deploy (Cloudflare Pages)

- **Build command**: `npm run build`
- **Build output directory**: `out`

#### Base path (only if deploying under a subpath)

If deploying under a subpath (e.g. `https://example.com/my-site`), set:

- `NEXT_PUBLIC_BASE_PATH=/my-site`
