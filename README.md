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

### Keyboard and motion checks

After changing navigation, layout, or animation styles, check these behaviors in the local preview:

- Reload a page and press Tab to reveal **Skip to content**. Activate it and confirm it reaches the page's main content. The link in `src/app/layout.tsx` targets `#main`, so new pages need to preserve that target.
- At a narrow viewport, use the keyboard to open the **Menu** button. Confirm its label changes to **Close menu**, Escape closes it, and selecting a section link closes it and reaches the matching homepage section. These behaviors are implemented in `src/components/Navbar.tsx`.
- Enable reduced motion in your operating system or browser's rendering tools, then reload. Confirm that sections remain visible without waiting for a scroll reveal. `src/components/Reveal.tsx` checks the preference on mount, and the reduced-motion rules in `src/app/polish.css` make reveal content visible and shorten animations.

These are manual regression checks, not a claim that the site has passed a full accessibility audit.

## Organization

- `src/app/page.tsx` — homepage; Story → Impact → Education → Projects → Experience → Leadership → Beyond Engineering → Book → Contact
- `src/app/work/[slug]/page.tsx` — four detailed case studies with contextual demos
- `src/app/story`, `/experience`, `/research`, `/writing`, `/contact` — optional deeper pages
- `src/data/projects.ts` and `src/data/journey.ts` — structured project and experience information
- `src/app/globals.css` — foundation styles; `src/app/polish.css` — responsive and legibility improvements
- `public/images` — the owner's approved photography and SASE event images

The interactive project demos are browser illustrations and previously documented measurements, **not** live FPGA or TensorRT execution. Hardware designs are explicitly distinguished from physically tested builds.

## Adding or updating a project

Edit the `projects` array in [src/data/projects.ts](src/data/projects.ts), using its `Project` type and existing entries as the field checklist. The homepage and `/work` listing both render this array; [the case-study route](src/app/work/[slug]/page.tsx) uses the same entries for page content, metadata, and generated route parameters.

- Give each entry a unique, URL-friendly `slug` and keep it stable: links use `/work/<slug>`. If an existing slug changes, add a redirect in `next.config.ts` so old links still work.
- Include at least one `lessons` item. Project cards display `lessons[0]`, while the case study displays the full list.
- Use `imageAlt` to describe the main image and `imageCredit` to identify its source. Local image URLs use `/images/<filename>` for files under `public/images/`. Without an explicit credit, the case-study image label defaults to “IMAGE FROM THE PROJECT REPOSITORY.”
- Keep the written project count in `src/app/page.tsx` and this README in sync when adding or removing entries; those counts are not calculated from the array.
- Interactive demos are selected by explicit slug checks in the case-study route. Adding an entry does not automatically add a demo.

After an edit, run the checks above and preview the homepage, `/work`, and the affected `/work/<slug>` page. Check the card's **More detail** button, images, source link, and any redirect affected by a renamed slug.

## Updating experience and education

Edit roles, skills, and awards in [src/data/journey.ts](src/data/journey.ts). Check both the homepage and [the full experience page](src/app/experience/page.tsx) after making changes:

- The homepage puts entries with `category: 'Leadership'` in its Leadership section and shows only the first three highlights per role. The full `/experience` page shows every highlight and follows the order of the `experiences` array.
- Homepage experience ordering is defined separately by `showExperiences` in `src/app/page.tsx`; changing the array order alone may not produce the same order on both pages.
- Degree, graduation date, GPA, and coursework text are written directly in both `src/app/page.tsx` and `src/app/experience/page.tsx`. Update both when those details change, and keep any repeated GPA or award details in `honors` consistent.

## Deployment

Connect this GitHub repository to Vercel and deploy as a Next.js app from the repository root. New pushes to `main` trigger deployments when the Git integration is enabled. No environment variables are required.

## Assets and privacy

The photographs are personal images provided by the portfolio owner; please do not reuse them without permission.

### Keeping résumé and contact links current

The résumé is linked as an external Google Doc. Its contents and sharing permissions are managed in Google Drive, not in this repository.

- If the résumé document URL changes, update both the `RESUME` constant in [src/app/page.tsx](src/app/page.tsx) and the résumé anchor in [src/app/contact/page.tsx](src/app/contact/page.tsx).
- Email and social links are also repeated on the homepage and contact page. The navigation's GitHub and LinkedIn URLs live in the `socials` array in [src/components/Navbar.tsx](src/components/Navbar.tsx).
- After updating links, open both résumé buttons in a signed-out or private browser window. Confirm that visitors can read the intended document without requesting access and cannot edit it. Check the email and social links on both pages as well.

A successful site build does not verify the external document's contents or access permissions.
