// Server-only Shiki helper: snippets are highlighted at prerender time, so the
// client never downloads Shiki.
import { createHighlighter, type Highlighter } from 'shiki';

const THEME = 'github-dark';

let highlighterPromise: Promise<Highlighter> | null = null;

export async function highlight(code: string): Promise<string> {
  highlighterPromise ??= createHighlighter({ themes: [THEME], langs: ['ts'] });
  return (await highlighterPromise).codeToHtml(code, { lang: 'ts', theme: THEME });
}
