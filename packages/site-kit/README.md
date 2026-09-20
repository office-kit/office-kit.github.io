# @office-kit/site-kit

The shell shared by the Office Kit websites. It is a Svelte 5 + SvelteKit
source package: there is no build step, and the consuming site compiles it.

| Export | What it is |
| --- | --- |
| `@office-kit/site-kit/site.css` | Design tokens, base element styles, and the `.band` / `.frame` / `.btn` primitives. Light and dark themes. |
| `KitHeader` | Sticky header: the Office Kit mark, the product chip with its switcher, the site's nav, a slot for the site's search, the theme toggle, and the phone menu. |
| `KitFooter` | Footer with the product's links, the family's links, and the `llms.txt` entry points. |
| `FamilyGrid` | The three libraries side by side, each in its own accent. |
| `KitMark` | The stacked-files mark, with the current product on top. |
| `ThemeToggle` | Light / dark switch. The choice is stored under `office-kit-theme`, and because the sites share an origin it carries across all of them. |
| `InstallCommand` | Copyable `npm i` chip. |
| `products`, `getProduct`, `HOME_URL`, `ORG_URL` | The family registry: the only place that knows where each product lives. |

## Using it in a product site

Add the dependency (pnpm resolves a package from a subdirectory of a git repo):

```json
{
  "devDependencies": {
    "@office-kit/site-kit": "github:office-kit/office-kit.github.io#main&path:/packages/site-kit"
  }
}
```

Set the product on `<html>` in `src/app.html`. This selects the accent colour:

```html
<html lang="en" data-product="pptx">
```

Also copy the theme bootstrap `<script>` and the font `<link>` from this
repo's [`src/app.html`](../../src/app.html); a stylesheet cannot do either.

Then, in `src/routes/+layout.svelte`:

```svelte
<script lang="ts">
  import '@office-kit/site-kit/site.css';
  import { KitFooter, KitHeader, type NavLink } from '@office-kit/site-kit';
  import Search from '$lib/components/Search.svelte';

  const { children } = $props();

  const links: NavLink[] = [
    { label: 'Docs', path: '/docs/getting-started', section: '/docs' },
    { label: 'API', path: '/api' },
  ];
</script>

<KitHeader product="pptx" {links}>
  {#snippet search()}<Search />{/snippet}
</KitHeader>

<main>{@render children()}</main>

<KitFooter product="pptx" {links} />
```

Search is a snippet because each site indexes its own pages; the shell has
no index of its own.

A `NavLink` is either `{ label, path }` for a page inside the site (the
SvelteKit base path is prepended, and `section` sets the prefix that marks the
link current) or `{ label, href }` for anywhere else.

The home page uses the same components with no `product`: the accent is then
the neutral ink colour, and the header shows no product chip.
