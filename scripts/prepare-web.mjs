import { cp, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const root = process.cwd();
const out = new URL('../www/', import.meta.url);
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

const excluded = new Set(['.git', '.github', 'node_modules', 'android', 'ios', 'www']);
for (const name of ['index.html', 'manager.html', 'manifest.webmanifest', 'sw.js', 'icon.svg', 'CSS', 'JS', 'images']) {
  const source = new URL('../' + name, import.meta.url);
  if (existsSync(source)) {
    await cp(source, new URL('../www/' + name, import.meta.url), { recursive: true });
  }
}
console.log('Prepared local web assets in www/');
