// The Office Kit family. This registry is the only place that knows where each
// product's site lives, so the header switcher, the footer, and the family
// grid all stay in step.
//
// Each product deploys its own site from its own repo to
// `office-kit.github.io/<id>/`; this repo serves the origin root. GitHub Pages
// composes the four into one site.

export type ProductId = 'pptx' | 'xlsx' | 'docx';

export type Product = {
  id: ProductId;
  /** npm package name. */
  pkg: string;
  /** The Office application whose files this product reads and writes. */
  app: string;
  /** One line on what the product covers, shown in the family listings. */
  summary: string;
  href: string;
  repo: string;
};

/**
 * A header or footer link. `path` is inside the current site and gets the
 * SvelteKit base prepended; `href` is used as written.
 */
export type NavLink =
  | {
      label: string;
      path: string;
      /** Path prefix that marks this link current; defaults to `path`. */
      section?: string;
    }
  | { label: string; href: string };

export const HOME_URL = 'https://office-kit.github.io/';
export const ORG_URL = 'https://github.com/office-kit';

export const products: readonly Product[] = [
  {
    id: 'pptx',
    pkg: '@office-kit/pptx',
    app: 'PowerPoint',
    summary: 'Slides, charts, tables, themes, notes, and animations.',
    href: `${HOME_URL}pptx/`,
    repo: `${ORG_URL}/pptx`,
  },
  {
    id: 'xlsx',
    pkg: '@office-kit/xlsx',
    app: 'Excel',
    summary: 'Workbooks, formulas, styles, charts, and streaming for large sheets.',
    href: `${HOME_URL}xlsx/`,
    repo: `${ORG_URL}/xlsx`,
  },
  {
    id: 'docx',
    pkg: '@office-kit/docx',
    app: 'Word',
    summary: 'Paragraphs, lists, tables, page setup, and template editing.',
    href: `${HOME_URL}docx/`,
    repo: `${ORG_URL}/docx`,
  },
];

export const getProduct = (id: ProductId): Product => products.find((p) => p.id === id)!;
