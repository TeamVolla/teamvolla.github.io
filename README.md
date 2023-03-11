# Volla landing page

Based on `Astro Starter Kit: Basics`. Created with:

```
npm create astro@latest -- --template basics
```

## 🧰 Requirements
Tested with Node 18

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── CNAME
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Static assets in `src/assets/` are processed with the [assets pipeline](https://docs.astro.build/en/guides/assets/). Assets
that do not require special processing should be placed in `public/` directory.

The `public/CNAME` file should be kept if the site is to run as a GitHub page with custom domain.

See the [Astro GitHub Pages](https://docs.astro.build/en/guides/deploy/github/) for details.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 📦 Deployment
The site will continuously deploy from the `main` branch through GitHub Actions.

## 📑 References
* [Astro documentation](https://docs.astro.build)
* [GitHub Pages](https://docs.github.com/en/pages)
* [GitHub Actions](https://docs.github.com/en/actions)
