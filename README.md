# Adhyayan Tiwari — Engineering, Curiosity & People

A cinematic, story-driven engineering portfolio built with Next.js, React, and TypeScript. Built to document real engineering projects, ongoing research, and the human stories behind the work.

## Local setup

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Validate with `npm run build`.

## Site structure

The homepage follows these chapters: **Story → Impact → Education → Projects → Professional Experience → Leadership → Beyond Engineering → First Book → Contact**. The navbar links to the homepage sections, while detailed pages are available at `/work`, `/work/[slug]`, `/story`, `/research`, `/experience`, `/writing`, and `/contact`.

`src/data/projects.ts` stores verified case-study material, actual project-source links, and metrics. `src/data/journey.ts` stores experience and education context. `src/app/page.tsx` controls the homepage and `src/app/globals.css` contains the visual system.

## Media and attribution

The author has supplied original photographs of himself and USF student workshops / events. These are stored as optimized WebP files under `public/images/`. Please don't repurpose the personal or student photos without permission.

Project case-study screenshots and figures are displayed from the corresponding public engineering GitHub repositories. The NanaBot robot graphic is a *conceptual illustration*, not a hardware photograph. The book graphic is a typographic tribute, not an original cover scan.

## Engineering accuracy

- Reflex Vision shows recorded, device-specific benchmark results, not browser GPU benchmarks or universal acceleration claims.
- Orion-1 is an unvalidated, design-stage PCB prototype.
- The Four-Worker Scheduler is RTL simulation, not an FPGA implementation.
- The BCD Counter breadboard has been tested; the PCB is a completed design, not an assembled hardware validation.
- NanaBot is ongoing research, not a finished or medically validated product.
- Interactive diagrams on individual project pages are educational browser illustrations, not live RTL/physical execution.

## Deployment

Import `adhyayan15/adhyayan-portfolio` into Vercel, choose Next.js, leave Root Directory at the repository root, and deploy. Pushing further commits to `main` updates the deployment. The GitHub Actions workflow verifies the production build on each push.

The resume button opens a blank, view-only public Google Doc provided by the author; he can add his approved resume there later without updating the website.
