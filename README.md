# My-Profile

Portfolio of Duong Thanh Truong — Backend Game Engineer.
Live at **https://bt2701.github.io/My-Profile/**.

Built with Next.js 15 (App Router, static export), TypeScript, Tailwind CSS v4 and Framer Motion.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000/My-Profile/
npm run lint
npm run typecheck
npm run build      # static site in out/
```

## Edit content

All text lives in typed data files — no markup changes needed for most updates:

| File                     | Content                                     |
| ------------------------ | ------------------------------------------- |
| `src/data/profile.ts`    | Name, links, contact, hero, about, SEO      |
| `src/data/experience.ts` | Experience timeline                         |
| `src/data/projects.ts`   | Featured work, project cards, more projects |
| `src/data/skills.ts`     | Skill groups, education and awards          |

Images and the resume PDF are in `public/`. Reference them with `asset('/images/…')` from `src/lib/asset.ts` so the `/My-Profile` base path is applied.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`: lint, typecheck, build, then publish `out/` to GitHub Pages.
One-time setup: **Settings → Pages → Source: GitHub Actions**.

To host at a different path (e.g. a custom domain at `/`), build with `NEXT_PUBLIC_BASE_PATH=""`.
