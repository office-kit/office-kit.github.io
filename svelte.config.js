import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter({ fallback: '404.html' }),
    prerender: { entries: ['*'] },
    // This repo is the organization's Pages site, so it is served from the
    // origin root; the product sites live beside it at /pptx/, /xlsx/, /docx/.
    paths: { relative: true },
  },
};

export default config;
