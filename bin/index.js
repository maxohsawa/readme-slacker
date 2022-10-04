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

if (process.argv.length === 3 && process.argv[2] === '-f') {
  console.log('.. writing file');
  writeData(data);
} else {
  console.log('.. copying to clipboard');

  if (process.platform === 'win32') {
    try {
      // https://stackoverflow.com/questions/7778539/copy-to-clipboard-in-node-js
      const proc_clip = proc.spawn('clip');
      proc_clip.stdin.write(data);
      proc_clip.stdin.end();
    } catch (err) {
      console.err('Error: clip failed. Writing to file SLACKER.txt');
      console.log('.. writing file');
      writeData(data);
    }
  } else {
    try {
      // https://stackoverflow.com/questions/7778539/copy-to-clipboard-in-node-js
      const proc_pbcopy = proc.spawn('pbcopy');
      proc_pbcopy.stdin.write(data);
      proc_pbcopy.stdin.end();
    } catch (err) {
      console.error('Error: pbcopy failed. Writing to file SLACKER.txt');
      console.log('.. writing file');
      writeData(data);
    }
  }
}
