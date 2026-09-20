<script lang="ts">
  import { page } from '$app/state';
  import { HOME_URL, type ProductId } from './products';

  type Props = {
    /** The product site this page belongs to; omit on the family home page. */
    product?: ProductId;
    title: string;
    description: string;
  };

  const { product, title, description }: Props = $props();

  // Crawlers need absolute URLs, and while prerendering the page's own origin
  // is a placeholder, so both are built on the public origin. Each site ships
  // its card as `og.png` at its root (see brand/README.md in this repo).
  const image = $derived(`${HOME_URL}${product ? `${product}/` : ''}og.png`);
  const url = $derived(new URL(page.url.pathname, HOME_URL).href);
</script>

<svelte:head>
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Office Kit" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={url} />
  <meta property="og:image" content={image} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={title} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
</svelte:head>
