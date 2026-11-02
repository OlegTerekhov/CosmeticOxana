import { readFile, writeFile } from 'node:fs/promises';

const path = new URL('../capacitor.config.ts', import.meta.url);
let config = await readFile(path, 'utf8');
config = config.replace(/\n\s*captureInput:\s*true,?/, '');
await writeFile(path, config);

const variablesPath = new URL('../android/variables.gradle', import.meta.url);
let variables = await readFile(variablesPath, 'utf8');
if (!/minSdkVersion\s*=\s*26/.test(variables)) {
  if (!/minSdkVersion\s*=\s*\d+/.test(variables)) {
    throw new Error('Could not locate minSdkVersion in android/variables.gradle');
  }
  variables = variables.replace(/minSdkVersion\s*=\s*\d+/, 'minSdkVersion = 26');
}
await writeFile(variablesPath, variables);
console.log('Android minSdkVersion set to 26 (Android 8.0).');
