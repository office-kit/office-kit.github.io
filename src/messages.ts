// The shell's own words, per language. A site passes its page's locale; a
// site that is English only passes nothing.

import type { Product } from './products';

export type KitLocale = 'en' | 'ja';

export type KitMessages = {
  switchLibrary: string;
  /** "Word files": what a product reads and writes. */
  files: (app: string) => string;
  mainNav: string;
  openMenu: string;
  closeMenu: string;
  onGitHub: (name: string) => string;
  libraries: string;
  allLibraries: string;
  lightTheme: string;
  darkTheme: string;
  blurb: string;
  siteNav: (id: string) => string;
  changelog: string;
  githubOrg: string;
  forAgents: string;
  copyCommand: (command: string) => string;
  copy: string;
  copied: string;
  pressCopy: string;
  youAreHere: string;
  openSite: (id: string) => string;
  /** "Word files. Paragraphs, …": a product in the family listings. */
  listing: (product: Product) => string;
};

const JA_SUMMARIES = {
  pptx: 'スライド、グラフ、表、テーマ、ノート、アニメーション。',
  xlsx: 'ブック、数式、スタイル、グラフ、大きなシートのストリーミング。',
  docx: '段落、リスト、表、ページ設定、テンプレートの編集。',
} as const;

export const KIT_MESSAGES: Readonly<Record<KitLocale, KitMessages>> = {
  en: {
    switchLibrary: 'Switch library',
    files: (app) => `${app} files`,
    mainNav: 'Main',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    onGitHub: (name) => `${name} on GitHub`,
    libraries: 'Libraries',
    allLibraries: 'Office Kit libraries',
    lightTheme: 'Switch to light theme',
    darkTheme: 'Switch to dark theme',
    blurb:
      'TypeScript libraries for Office files. MIT licensed, no native modules, one ESM build for Node and the browser.',
    siteNav: (id) => `${id} site`,
    changelog: 'Changelog',
    githubOrg: 'GitHub organization',
    forAgents: 'For AI agents',
    copyCommand: (command) => `Copy the install command: ${command}`,
    copy: 'Copy',
    copied: 'Copied',
    pressCopy: 'Press ⌘C',
    youAreHere: 'You are here',
    openSite: (id) => `Open the ${id} site`,
    listing: (p) => `${p.app} files. ${p.summary}`,
  },
  ja: {
    switchLibrary: 'ライブラリを切り替え',
    files: (app) => `${app} ファイル`,
    mainNav: 'メイン',
    openMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
    onGitHub: (name) => `GitHub の ${name}`,
    libraries: 'ライブラリ',
    allLibraries: 'Office Kit のライブラリ',
    lightTheme: 'ライトテーマに切り替え',
    darkTheme: 'ダークテーマに切り替え',
    blurb:
      'Office ファイルのための TypeScript ライブラリ。MIT ライセンス、ネイティブモジュールなし、Node とブラウザで動く ESM ビルド 1 本。',
    siteNav: (id) => `${id} のサイト`,
    changelog: '変更履歴',
    githubOrg: 'GitHub Organization',
    forAgents: 'AI エージェント向け',
    copyCommand: (command) => `インストールコマンドをコピー: ${command}`,
    copy: 'コピー',
    copied: 'コピーしました',
    pressCopy: '⌘C でコピー',
    youAreHere: '現在のサイト',
    openSite: (id) => `${id} のサイトを開く`,
    listing: (p) => `${p.app} ファイル。${JA_SUMMARIES[p.id]}`,
  },
};
