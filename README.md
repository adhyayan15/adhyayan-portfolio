# Adhyayan Tiwari — Personal Portfolio

A dark, editorial, mobile-responsive engineering portfolio built with Next.js, React and TypeScript. It combines engineering case studies with stories about research, mentoring, leadership, writing and the person behind the work.

## Run locally

Requires Node.js 20.9+ (Node 22 recommended).

```bash
npm install
npm run dev
# open http://localhost:3000
npm run build
```

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
