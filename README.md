# Next.js + React + SCSS — 3 Pages Demo (GitHub Pages)

Pages included:
- `/` (Home) — Intro, components showcase
- `/about` — Content cards
- `/objectives` — Mixed static + interactive widgets

Components:
- `Navbar/` — header with active link highlighting and mobile burger menu
- `InfoCard/` — simple content card with header/body/footer
- `Counter/` — stateful counter with configurable step

## Dev
```bash
npm install
npm run dev
```

## Build & Export
```bash
npm run build && npm run export
```

## Deploy to GitHub Pages
Push to `main`. The provided GitHub Actions workflow exports the site to `out/` and deploys it.
