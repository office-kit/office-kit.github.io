<script lang="ts">
  import { InstallCommand, products, type ProductId } from '@office-kit/site-kit';
  import type { PageProps } from './$types';

  const { data }: PageProps = $props();

  const about: Record<ProductId, string> = {
    pptx: 'Open a deck made in PowerPoint, Keynote, or Google Slides, fill its placeholders, add slides, charts, and tables, and save it back. A companion package draws slides as SVG and PNG, so you can check a deck without opening Office.',
    xlsx: 'Read and write workbooks with styles, formulas, charts, and conditional formatting. Streaming reads and writes keep memory flat on sheets with millions of rows. Inspired by openpyxl.',
    docx: 'Build a Word document from paragraphs, lists, tables, and images, or open an existing .docx as a template and replace its text. A companion package renders documents in the browser.',
  };

  const principles = [
    {
      claim: 'They read as well as they write.',
      how: 'Each library opens a file a person made, changes it, and saves it. Generating from nothing is one use; filling in a template someone designed is the more common one.',
    },
    {
      claim: 'The spec is the source of truth.',
      how: 'The models follow ECMA-376, the Office Open XML standard. A file that opens in one app and breaks in another is treated as a bug, not a quirk.',
    },
    {
      claim: 'One ESM build, in Node and in the browser.',
      how: 'No native modules and no Node-only built-ins on the hot path. The same import works in a server, a worker, and a web page.',
    },
    {
      claim: 'You ship only what you import.',
      how: 'Every capability is a standalone function in a side-effect-free package, so a bundler drops whatever you do not call.',
    },
    {
      claim: 'MIT, in one tier.',
      how: 'No paid edition holds back the features you need.',
    },
  ];
</script>

<svelte:head>
  <title>Office Kit: read, edit, and write Office files in TypeScript</title>
</svelte:head>

<section class="band hero">
  <div class="frame hero-inner">
    <h1>Read, edit, and write Office files in TypeScript</h1>
    <p class="lede">
      Three libraries, one for each file format. Each opens existing files as well as creating new
      ones, follows the ECMA-376 spec, and runs in Node and the browser from a single ESM build.
    </p>
  </div>
</section>

<section class="band" aria-label="The three libraries">
  <ul class="frame stages">
    {#each products as p (p.id)}
      <li data-product={p.id}>
        <a href={p.href}>
          <div class="field">
            <svg viewBox="0 0 320 200" role="img" aria-label="A miniature {p.app} file">
              {#if p.id === 'pptx'}
                <rect x="16" y="19" width="288" height="162" rx="3" fill="#fff" />
                <rect x="36" y="38" width="5" height="26" fill="#e5481f" />
                <rect x="50" y="40" width="150" height="10" rx="2" fill="#15171c" />
                <rect x="50" y="56" width="88" height="6" rx="2" fill="#c9cdd6" />
                <path d="M40 160.5h240" stroke="#c9cdd6" />
                {#each [44, 62, 80, 98] as h, i (i)}
                  <rect x={58 + i * 58} y={160 - h} width="22" height={h} fill="#e5481f" />
                  <rect x={82 + i * 58} y={160 - h * 0.55} width="22" height={h * 0.55} fill="#c9cdd6" />
                {/each}
              {:else if p.id === 'xlsx'}
                <rect x="16" y="19" width="288" height="162" rx="3" fill="#fff" />
                <rect x="16" y="19" width="288" height="18" fill="#eef0f3" />
                <rect x="16" y="19" width="32" height="162" fill="#eef0f3" />
                {#each [37, 55, 73, 91, 109, 127, 145, 163] as y (y)}
                  <path d="M16 {y + 0.5}h288" stroke="#dfe2e7" />
                {/each}
                {#each [48, 112, 176, 240] as x (x)}
                  <path d="M{x + 0.5} 19v162" stroke="#dfe2e7" />
                {/each}
                {#each [0, 1, 2, 3, 4] as r (r)}
                  <rect x="56" y={61 + r * 18} width={[40, 32, 46, 28, 38][r]} height="6" rx="2" fill="#15171c" />
                  <rect x={[150, 140, 146, 154, 142][r]} y={61 + r * 18} width={[18, 28, 22, 14, 26][r]} height="6" rx="2" fill="#9aa0ad" />
                {/each}
                <rect x="56" y="43" width="34" height="6" rx="2" fill="#168a4f" />
                <rect x="134" y="43" width="34" height="6" rx="2" fill="#168a4f" />
                <rect x="176.5" y="91.5" width="64" height="18" fill="none" stroke="#168a4f" stroke-width="2" />
                <rect x="237" y="106" width="6" height="6" fill="#168a4f" stroke="#fff" />
              {:else}
                <rect x="94" y="12" width="132" height="176" rx="3" fill="#fff" />
                <rect x="112" y="32" width="70" height="9" rx="2" fill="#15171c" />
                <rect x="112" y="47" width="28" height="3" rx="1.5" fill="#2b63d9" />
                {#each [62, 71, 80, 89] as y, i (y)}
                  <rect x="112" y={y} width={[96, 92, 96, 60][i]} height="4" rx="2" fill="#c9cdd6" />
                {/each}
                {#each [106, 116, 126] as y, i (y)}
                  <circle cx="115" cy={y + 2} r="2" fill="#2b63d9" />
                  <rect x="122" y={y} width={[70, 82, 56][i]} height="4" rx="2" fill="#c9cdd6" />
                {/each}
                <rect x="112.5" y="142.5" width="96" height="30" fill="none" stroke="#c9cdd6" />
                <path d="M112 157.5h96M160.5 142v30" stroke="#c9cdd6" />
              {/if}
            </svg>
          </div>
          <div class="stage-text">
            <span class="ext">.{p.id}</span>
            <span class="app">{p.app} files</span>
            <span class="go">Open the {p.id} docs</span>
          </div>
        </a>
      </li>
    {/each}
  </ul>
</section>

{#each products as p (p.id)}
  <section class="band product" data-product={p.id} aria-labelledby="{p.id}-title">
    <div class="frame product-inner">
      <div class="product-text">
        <h2 id="{p.id}-title">{p.pkg}</h2>
        <p>{about[p.id]}</p>
        <InstallCommand pkg={p.pkg} />
        <ul class="product-links">
          <li><a href={p.href}>Documentation</a></li>
          <li><a href="{p.href}playground">Playground</a></li>
          <li><a href="{p.href}repl">REPL</a></li>
          <li><a href={p.repo}>GitHub</a></li>
          <li><a href="https://www.npmjs.com/package/{p.pkg}">npm</a></li>
        </ul>
      </div>
      <figure class="product-code">
        {@html data.code[p.id]}
      </figure>
    </div>
  </section>
{/each}

<section class="band rules" aria-labelledby="rules-title">
  <div class="frame rules-inner">
    <h2 id="rules-title">Built on the same rules</h2>
    <dl>
      {#each principles as item (item.claim)}
        <div class="rule">
          <dt>{item.claim}</dt>
          <dd>{item.how}</dd>
        </div>
      {/each}
    </dl>
  </div>
</section>

<style>
  .hero-inner {
    padding: clamp(3rem, 6vw, 4.75rem) var(--gutter) clamp(2.75rem, 5vw, 3.75rem);
    text-align: center;
  }

  h1 {
    max-width: 18ch;
    margin: 0 auto;
    font-size: clamp(2.35rem, 6vw, 4.25rem);
    font-weight: 650;
    line-height: 1.02;
    letter-spacing: -0.04em;
  }

  .lede {
    max-width: 60ch;
    margin: 1.75rem auto 0;
    color: var(--ink-2);
    font-size: clamp(1.05rem, 1.6vw, 1.2rem);
    line-height: 1.55;
    text-wrap: pretty;
  }

  /* Stages: one per file format, each a field of its product's colour carrying
   * the mark of that app's canvas: PowerPoint's dot grid, Excel's cell grid,
   * Word's ruled page. */
  .stages {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;
    margin-block: 0;
    padding: 0;
  }

  .stages li {
    margin: 0;
    border-right: 1px solid var(--line);
  }

  .stages li:last-child {
    border-right: none;
  }

  .stages a {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: var(--ink);
  }

  .stages a:hover {
    text-decoration: none;
  }

  .field {
    padding: clamp(1.25rem, 3vw, 2.25rem);
    background-color: var(--accent);
  }

  [data-product='pptx'] .field {
    background-image: radial-gradient(circle, rgb(255 255 255 / 0.28) 1px, transparent 1.4px);
    background-size: 20px 20px;
  }

  [data-product='xlsx'] .field {
    background-image:
      linear-gradient(rgb(255 255 255 / 0.16) 1px, transparent 1px),
      linear-gradient(90deg, rgb(255 255 255 / 0.16) 1px, transparent 1px);
    background-size: 40px 20px;
  }

  [data-product='docx'] .field {
    background-image: linear-gradient(rgb(255 255 255 / 0.18) 1px, transparent 1px);
    background-size: 100% 16px;
  }

  .field svg {
    display: block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0 10px 18px rgb(16 18 23 / 0.28));
    transition: transform 220ms ease;
  }

  .stages a:hover .field svg {
    transform: translateY(-4px);
  }

  .stage-text {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1.5rem var(--gutter) 1.75rem;
  }

  .stages a:hover .stage-text {
    background: var(--wash);
  }

  .ext {
    font-family: var(--display);
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 650;
    letter-spacing: -0.035em;
    line-height: 1;
    color: var(--accent-ink);
  }

  .app {
    margin-top: 0.5rem;
    color: var(--ink-2);
  }

  .go {
    margin-top: 1rem;
    font-size: 0.92rem;
    font-weight: 550;
    color: var(--accent-ink);
  }

  /* Product rows. */
  .product-inner {
    display: grid;
    grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
    gap: clamp(2rem, 5vw, 4.5rem);
    align-items: center;
    padding: clamp(3rem, 6vw, 4.5rem) var(--gutter);
  }

  .product h2 {
    margin: 0 0 1rem;
    font-family: var(--mono);
    font-size: clamp(1.25rem, 2.4vw, 1.6rem);
    font-weight: 550;
    letter-spacing: -0.02em;
    color: var(--accent-ink);
  }

  .product-text p {
    max-width: 52ch;
    margin: 0 0 1.5rem;
    color: var(--ink-2);
  }

  .product-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem 1.5rem;
    list-style: none;
    margin: 1.25rem 0 0;
    padding: 0;
  }

  .product-links li {
    margin: 0;
  }

  .product-links a {
    font-weight: 550;
  }

  .product-code {
    min-width: 0;
    margin: 0;
  }

  .product-code :global(pre) {
    margin: 0;
    font-size: 0.8rem;
  }

  /* Rules: the one dark band on the page. */
  .rules {
    background: var(--night);
    color: var(--night-ink);
    border-bottom-color: var(--night-line);
  }

  .rules-inner {
    border-inline-color: var(--night-line);
    padding: clamp(3rem, 7vw, 5.5rem) var(--gutter);
  }

  .rules h2 {
    margin: 0 0 2.5rem;
    color: #fff;
    font-size: clamp(1.9rem, 4.2vw, 3.1rem);
    letter-spacing: -0.035em;
    line-height: 1.05;
  }

  .rules dl {
    margin: 0;
    border-top: 1px solid var(--night-line);
  }

  .rule {
    display: grid;
    grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
    gap: 0.5rem 3rem;
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--night-line);
  }

  .rules dt {
    font-family: var(--display);
    font-size: 1.25rem;
    font-weight: 550;
    line-height: 1.25;
    letter-spacing: -0.015em;
    color: #fff;
  }

  .rules dd {
    margin: 0;
    color: var(--night-ink-2);
  }

  @media (max-width: 860px) {
    .stages {
      grid-template-columns: 1fr;
    }

    .stages li {
      border-right: none;
      border-bottom: 1px solid var(--line);
    }

    .stages li:last-child {
      border-bottom: none;
    }

    /* Side by side on a phone: a full-width field per product would push the
     * second library below the fold. */
    .stages a {
      flex-direction: row;
      align-items: stretch;
    }

    .field {
      flex: 0 0 46%;
      display: flex;
      align-items: center;
      padding: 1rem;
    }

    .stage-text {
      justify-content: center;
      padding: 1.25rem 1.1rem;
    }

    /* minmax(0, …): a bare 1fr track grows to fit its widest child, which on a
     * 320px phone is the install command. */
    .product-inner,
    .rule {
      grid-template-columns: minmax(0, 1fr);
    }
  }
</style>
