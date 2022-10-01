#!/usr/bin/env node

// node CLI: https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs

import { readData, writeData, addTitle } from '../helpers.js';

console.log('=== README SLACKER ===');
console.log('.. lazily generating a slackable post out of an activity README');

let data = await readData();

data = addTitle(data);

writeData(data);