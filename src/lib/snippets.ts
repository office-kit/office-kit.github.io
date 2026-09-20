// One snippet per library, taken from that library's own README so the code
// here is code its maintainers already keep working.

import type { ProductId } from '@office-kit/site-kit';

export const snippets: Record<ProductId, string> = {
  pptx: `import {
  loadPresentation,
  replaceTokensInPresentation,
  savePresentation,
} from '@office-kit/pptx';

// A designer makes template.pptx. Your code fills it in.
const pres = await loadPresentation(templateBytes);
replaceTokensInPresentation(pres, {
  name: 'Alice',
  event: 'Re:Invent',
});
const out = await savePresentation(pres);`,

  xlsx: `import {
  fromResponse,
  loadWorkbook,
  workbookToBytes,
} from '@office-kit/xlsx/io';
import { setCell } from '@office-kit/xlsx/worksheet';

const response = await fetch('/input.xlsx');
const wb = await loadWorkbook(fromResponse(response));
const sheet = wb.sheets[0];
if (sheet?.kind === 'worksheet') {
  setCell(sheet.sheet, 1, 1, 'Hello from @office-kit/xlsx');
}
const out = await workbookToBytes(wb);`,

  docx: `import {
  addBulletList,
  addTable,
  appendParagraph,
  createDocx,
  toUint8Array,
} from '@office-kit/docx';

const doc = createDocx({ paragraphs: ['Hello, world.'] });
appendParagraph(doc, 'Bullets:');
addBulletList(doc, ['one', 'two', 'three']);
addTable(doc, [
  ['Name', 'Score'],
  ['Alice', '90'],
]);
const out = toUint8Array(doc);`,
};
