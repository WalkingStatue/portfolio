# Dhruv Saija — Developer Portfolio

A React and TypeScript portfolio sharing the engineering notebook’s paper, olive, and lime palette. Serif headings, Satoshi body text, and a static orbital illustration frame the projects, writing, and experience.

## Running locally

```bash
npm install
npm run dev
```

## Validation and production

```bash
npm run lint
npm run build
npm run preview
```

The build runs TypeScript, Vite, and `scripts/prerender.tsx`. The generated page contains its content before JavaScript loads; `src/main.tsx` hydrates that markup in production. JavaScript and CSS target Safari 15, and responsive breakpoints use traditional min/max-width syntax.

## Content and design

- `src/portfolio-content.ts`: projects, roles, toolkit, education, and recognition.
- `src/App.tsx`: page layout, navigation, contact links, and featured essay.
- `src/index.css`: ordinary CSS, palette, typography, responsive layouts, and reduced-motion support.
- `index.html`: SEO metadata, structured data, font loading, and GA4 configuration.

The notebook links to https://blog.dhruvsaija.in. The featured writing card is maintained manually in `src/App.tsx`; update its title, description, cover, reading time, and links together when featuring a new essay.

The previous components in `src/components/` remain available but are not mounted. Their Tailwind, Framer Motion, and icon dependencies are retained for now. The active page uses CSS transitions and mounts Vercel Analytics alongside the existing GA4 configuration.

## Brand assets

Run `node scripts/brand.mjs` to regenerate the olive-and-lime `ds.` favicons, home-screen icons, manifest, and 1200×630 social card. The blog uses the same generator with `--site blog` for its notebook card. `--output` can stage assets in another directory. Keep the shared palette in the generator aligned with `src/index.css`. The generated images are committed assets, separate from the build.
