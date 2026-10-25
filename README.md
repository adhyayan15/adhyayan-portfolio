# Adhyayan Tiwari — Personal Portfolio

A dark, editorial, mobile-responsive engineering portfolio built with Next.js, React and TypeScript. It combines engineering case studies with stories about research, mentoring, leadership, writing and the person behind the work.

## Run locally

Requires Node.js 20.9+ (Node 22 recommended).

Run these commands from the repository root:

```bash
npm install
npm run dev
```

Open http://localhost:3000. The development server stays running in that terminal; stop it with Ctrl+C before switching to a production preview.

### Check and preview a production build

```bash
npm run lint
npm run build
npm start
```

Run each command after the previous one succeeds, then open http://localhost:3000 to inspect the built site.

- `npm run lint` runs `tsc --noEmit`: it checks TypeScript types without emitting JavaScript. Despite the script name, it does not run ESLint.
- `npm run build` runs `next build` to create the production build.
- `npm start` runs `next start` to serve that build locally. Rebuild after edits before checking them in this preview.

The [Build verification workflow](.github/workflows/build.yml) uses Node.js 22, installs dependencies, and runs `npm run build` on pushes to `main` and on pull requests. It does not run the separate `lint` script.

## Organization

- `src/app/page.tsx` — homepage; Story → Impact → Education → Projects → Experience → Leadership → Beyond Engineering → Book → Contact
- `src/app/work/[slug]/page.tsx` — four detailed case studies with contextual demos
- `src/app/story`, `/experience`, `/research`, `/writing`, `/contact` — optional deeper pages
- `src/data/projects.ts` and `src/data/journey.ts` — structured project and experience information
- `src/app/globals.css` — foundation styles; `src/app/polish.css` — responsive and legibility improvements
- `public/images` — the owner's approved photography and SASE event images

The interactive project demos are browser illustrations and previously documented measurements, **not** live FPGA or TensorRT execution. Hardware designs are explicitly distinguished from physically tested builds.

## Deployment

Connect this GitHub repository to Vercel and deploy as a Next.js app from the repository root. New pushes to `main` trigger deployments when the Git integration is enabled. No environment variables are required.

## Assets and privacy

The photographs are personal images provided by the portfolio owner; please do not reuse them without permission. The résumé button points to the owner's Google Doc configured for public view-only access. The current document is intentionally blank until the owner adds the finished résumé.
