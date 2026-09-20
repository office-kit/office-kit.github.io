# Brand assets

The favicon, touch icon, and social card of each site, plus the page that
draws them.

| Directory | Site | Goes into |
| --- | --- | --- |
| `home/` | https://office-kit.github.io/ | `static/` in this repo |
| `pptx/` | https://office-kit.github.io/pptx/ | `site/static/` in office-kit/pptx |
| `xlsx/` | https://office-kit.github.io/xlsx/ | `site/static/` in office-kit/xlsx |
| `docx/` | https://office-kit.github.io/docx/ | `site/static/` in office-kit/docx |

Each holds `favicon.svg`, `apple-touch-icon.png` (180×180, opaque because iOS
paints transparency black) and `og.png` (1200×630). `KitSeo` from
`@office-kit/site-kit` points `og:image` at `<site root>/og.png`, so the file
name is fixed.

The icon is the kit mark with the site's own product on top, the same order
`KitMark` draws in the header. The gaps between the files are transparent so
it reads on light and dark tab bars.

## Regenerating

`render.html` draws everything from the product colours and headlines at the
top of its script. Open it in a browser and screenshot the `#art` element:

- `render.html?kind=og&product=pptx`: the social card (`home`, `pptx`, `xlsx`, `docx`)
- `render.html?kind=icon&product=pptx`: the icon; `#art` carries the SVG source in `data-svg`
- `render.html?kind=icon&product=pptx&opaque`: the touch icon at 512 px; scale it to 180

Copy the results into the directories above and into each site's `static/`.
