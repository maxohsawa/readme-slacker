import fs from 'fs';
import path, { basename } from 'path';

export async function readData() {
  try {
    let data = await fs.promises.readFile('README.md');
    return data.toString();
  } catch (err) {
    console.error('error reading README.md', err);
  }
}

export async function writeData(data) {
  try {
    fs.promises.writeFile('SLACKER.txt', data);
  } catch (err) {
    console.error('error writing SLACKER.txt', err);
  }
}

export function addTitle(data) {
  return `*= ${path.basename(process.cwd())} =*\n\n${data}`;
}
