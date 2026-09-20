# office-kit.github.io

The [Office Kit](https://office-kit.github.io/) website, and the site shell
shared by the three product sites.

| URL | Built from |
| --- | --- |
| [`office-kit.github.io/`](https://office-kit.github.io/) | this repo |
| [`office-kit.github.io/pptx/`](https://office-kit.github.io/pptx/) | [`office-kit/pptx`](https://github.com/office-kit/pptx), `site/` |
| [`office-kit.github.io/xlsx/`](https://office-kit.github.io/xlsx/) | [`office-kit/xlsx`](https://github.com/office-kit/xlsx), `site/` |
| [`office-kit.github.io/docx/`](https://office-kit.github.io/docx/) | [`office-kit/docx`](https://github.com/office-kit/docx), `site/` |

GitHub Pages serves a repository named `<org>.github.io` from the origin root
and every other repository from `/<repo>/`, so the four deploy independently
and still read as one site. Nothing here builds the product sites.

## Why the product sites stay in their own repos

Each product's docs, playground, and examples import that library's **source**
and are type-checked against it, so an API rename fails the docs build in the
same commit. Building them here would mean building against a different commit
than the one being documented, and one product's broken build would block the
others from deploying.

What the sites do share lives in [`packages/site-kit`](packages/site-kit): the
design tokens, the header with the product switcher, the footer, and the
family grid.

## Layout

```
src/                 the home page (SvelteKit, prerendered)
packages/site-kit/   @office-kit/site-kit, the shared shell
```

## Develop

```sh
pnpm install
pnpm dev      # http://localhost:5173
pnpm check    # svelte-check
pnpm build    # static output in build/
```

Pushing to `main` deploys.

## License

[MIT](./LICENSE)
