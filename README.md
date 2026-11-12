# Logarithm Technologies

Marketing site for [www.logarithmtech.com](https://www.logarithmtech.com), built with Next.js (App Router) and exported as a static site to GitHub Pages.

Requires Node 20.9+.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server at http://localhost:3000 |
| `npm run build` | Static export to `out/` |
| `npm run deploy` | Builds, then publishes `out/` to the `gh-pages` branch (adds `CNAME` and `.nojekyll`) |

## Structure

- `src/app/` – routes: `/` (home), `/privacy/`, and the 404 page; site-wide SEO metadata lives in `layout.jsx`
- `src/Home.jsx`, `src/PrivacyPolicy.jsx`, `src/ErrorPage.jsx` – page content
- `src/components/` – nav, footer and shared pieces
- `src/stylesheets/` – SCSS (Sass modules via `@use`)
- `public/` – static files served as-is (`robots.txt`, `sitemap.xml`, icons, manifest)

When adding a page, also add it to `public/sitemap.xml`.
