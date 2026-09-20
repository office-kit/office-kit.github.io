<script lang="ts">
  import { base } from '$app/paths';
  import KitMark from './KitMark.svelte';
  import { ORG_URL, getProduct, products, type NavLink, type ProductId } from './products';

  type Props = {
    /** The product this site documents. Omit it on the family home page. */
    product?: ProductId;
    /** Links for the product's own column; ignored when there is no product. */
    links?: NavLink[];
  };

  const { product, links = [] }: Props = $props();

  const current = $derived(product ? getProduct(product) : undefined);
  const hrefOf = (link: NavLink): string => ('href' in link ? link.href : `${base}${link.path}`);
</script>

<footer class="kit-footer" data-pagefind-ignore>
  <div class="frame inner">
    <div class="about">
      <span class="wordmark">
        <KitMark front={product} size={24} />
        Office Kit
      </span>
      <p>
        TypeScript libraries for Office files. MIT licensed, no native modules, one ESM build for
        Node and the browser.
      </p>
    </div>

    {#if current}
      <nav class="col" aria-label="{current.id} site">
        <h2>{current.id}</h2>
        <ul>
          {#each links as link (link.label)}
            <li><a href={hrefOf(link)}>{link.label}</a></li>
          {/each}
          <li><a href="{current.repo}/blob/main/CHANGELOG.md">Changelog</a></li>
        </ul>
      </nav>
    {/if}

    <nav class="col" aria-label="Office Kit libraries">
      <h2>Libraries</h2>
      <ul>
        {#each products as p (p.id)}
          <li>
            <a href={p.id === product ? `${base}/` : p.href}>{p.pkg}</a>
          </li>
        {/each}
        <li><a href={ORG_URL}>GitHub organization</a></li>
      </ul>
    </nav>

    {#if current}
      <nav class="col" aria-label="For AI agents">
        <h2>For AI agents</h2>
        <ul>
          <li><a href="{base}/llms.txt">llms.txt</a></li>
          <li><a href="{base}/llms-full.txt">llms-full.txt</a></li>
        </ul>
      </nav>
    {/if}
  </div>
</footer>

<style>
  .kit-footer {
    background: var(--wash);
  }

  .inner {
    display: grid;
    grid-template-columns: minmax(0, 1.6fr) repeat(3, minmax(0, 1fr));
    gap: 2rem;
    padding: 3rem var(--gutter) 3.5rem;
  }

  .wordmark {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    font-family: var(--display);
    font-weight: 650;
    font-size: 1.1rem;
    letter-spacing: -0.02em;
  }

  .about p {
    max-width: 34ch;
    margin: 0.9rem 0 0;
    color: var(--ink-2);
    font-size: 0.92rem;
  }

  h2 {
    margin: 0 0 0.8rem;
    font-family: var(--sans);
    font-size: 0.88rem;
    font-weight: 600;
    letter-spacing: 0;
    color: var(--ink-3);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
  }

  li a {
    display: inline-block;
    padding: 0.3rem 0;
    color: var(--ink);
    font-size: 0.94rem;
    overflow-wrap: anywhere;
  }

  @media (max-width: 860px) {
    .inner {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      padding-block: 2.25rem 2.75rem;
    }

    .about {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 560px) {
    .inner {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
