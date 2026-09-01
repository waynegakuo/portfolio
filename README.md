# Wayne Gakuo — Portfolio

Server-rendered Angular portfolio with a neo-brutalist interface. It showcases experience, shipped work, community leadership, education, talks, and a downloadable résumé.

## Stack

- Angular 22 with `@angular/ssr` (SSR + prerender)
- Standalone components, lazy routes, hydration
- SCSS neo-brutalist design system

## Prerequisites

Node.js **22.22.3+**, **24.15+**, or **26+** (this repo includes `.nvmrc` for Node 26).

```bash
nvm use
npm install
```

## Scripts

```bash
npm start                 # SSR-enabled dev server
npm run build             # Production browser + server bundles, prerendered routes
npm run serve:ssr:portfolio-ssr
```

Dev server: [http://localhost:4200](http://localhost:4200)

## Deploy

`npm run build` prerenders Home, Work, Experience, Communities, and Education. Publish `dist/portfolio-ssr/browser` (Netlify config is included) or run the Express server in `dist/portfolio-ssr/server`.
