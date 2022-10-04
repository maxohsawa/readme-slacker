#!/usr/bin/env node

// node CLI:
// https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs

import proc from 'child_process';

import {
  readData,
  writeData,
  addTitle,
  removeEmojis,
  modifyByLine,
} from '../helpers.js';

console.log('=== README SLACKER ===');
console.log('.. lazily generating a slackable post out of an activity README');

let data = await readData();

data = addTitle(data);
data = removeEmojis(data);
data = modifyByLine(data);

if (
  process.platform === 'win32' ||
  (process.argv.length === 3 && process.argv[2] === '-f')
) {
  console.log('.. writing file');
  writeData(data);
} else if (process.platform === 'darwin') {
  console.log('.. default macOS behavior');
  console.log('.. copying to clipboard');
  // https://stackoverflow.com/questions/7778539/copy-to-clipboard-in-node-js
  const proc_pbcopy = proc.spawn('pbcopy');
  proc_pbcopy.stdin.write(data);
  proc_pbcopy.stdin.end();
}
