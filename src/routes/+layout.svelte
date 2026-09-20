<script lang="ts">
  import '@office-kit/site-kit/site.css';
  import { KitFooter, KitHeader, products, type NavLink } from '@office-kit/site-kit';

  type Props = {
    children?: import('svelte').Snippet;
  };

  const { children }: Props = $props();

  const links: NavLink[] = products.map((p) => ({ label: p.id, href: p.href }));
</script>

<a class="skip" href="#main">Skip to content</a>

<KitHeader {links} />

<main id="main">
  {@render children?.()}
</main>

<KitFooter />

<style>
  .skip {
    position: absolute;
    left: 1rem;
    top: -4rem;
    z-index: 40;
    padding: 0.6rem 1rem;
    border-radius: var(--radius);
    background: var(--ink);
    color: var(--paper);
  }

  .skip:focus {
    top: 0.75rem;
  }
</style>
