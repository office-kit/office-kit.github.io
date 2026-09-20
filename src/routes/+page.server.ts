import { products } from '@office-kit/site-kit';
import { highlight } from '$lib/server/highlight';
import { snippets } from '$lib/snippets';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const code = await Promise.all(
    products.map(async (p) => [p.id, await highlight(snippets[p.id])] as const),
  );
  return { code: Object.fromEntries(code) };
};
