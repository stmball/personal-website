# Personal website

Samuel Ball's personal website; built with Astro and deployed as a static site on Cloudflare Pages.

## Development

Install dependencies and start Astro's background development server:

```sh
npm ci
npm run dev -- --background
```

Use `npm run astro -- dev status`, `npm run astro -- dev logs`, and `npm run astro -- dev stop` to manage the server.

## Project structure

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Pages are in `src/pages`; reusable components are in `src/components`; blog posts are in `src/content/blog`; and static assets are in `public`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm ci`                  | Installs the locked dependencies                 |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Cloudflare Pages deployment

Connect this repository to a Cloudflare Pages project with these build settings:

| Setting | Value |
| :-- | :-- |
| Production branch | `main` |
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |

Cloudflare Pages builds production deployments from `main` and preview deployments from pull requests. No Astro adapter is required because the site is statically generated. The canonical production URL is `https://stmball.uk`; if the domain changes, update the `site` value in `astro.config.mjs` so canonical URLs, the sitemap, and RSS links remain correct.

The design began with Astro's [blog starter](https://github.com/withastro/astro/tree/main/examples/blog).
