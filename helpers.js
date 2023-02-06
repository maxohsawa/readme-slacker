import fs from 'fs';
import path, { basename } from 'path';

const CLASS_EMOJIS = [
  ':mushroom:',
  ':sunflower:',
  ':princess:',
  ':turtle:',
  ':star:',
  ':t-rex:',
  ':orangutan:',
  ':potted_plant:',
  ':feather:',
  ':banana:',
  ':volcano:',
];

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

// emoji regex:
// https://www.freecodecamp.org/news/how-to-use-regex-to-match-emoji-including-discord-emotes/
export function removeEmojis(data) {
  const emojiRegex = /\s<a?:.+?:\d{18}>|\s\p{Extended_Pictographic}/gu;
  return data.replace(emojiRegex, '');
}

export function modifyByLine(data) {
  // iterate through lines
  const lines = data.split('\n');
  for (let i = 0; i < lines.length; i++) {
    lines[i] = lines[i].trim();

    // if the line is '## Acceptance Criteria' then replace following '* ' with class emojis
    if (
      lines[i] === '## Acceptance Criteria' ||
      lines[i] === '### Specifications'
    ) {
      let emojiNo = 0;

      for (let j = i + 1; j < lines.length; j++) {
        lines[j] = lines[j].trim();
        if (lines[j][0] === '*') {
          lines[j] = CLASS_EMOJIS[emojiNo++] + lines[j].substring(1);
        }

        // break when next section is reached
        if (lines[j][0] === '#') {
          break;
        }
      }
    }

    // if the line is '## Expected Behavior' then prepend class emojis to following lines
    if (lines[i] === '## Expected Behavior') {
      let emojiNo = 0;

      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j][0] > 'A' && lines[j][0] < 'Z') {
          lines[j] = CLASS_EMOJIS[emojiNo++] + ' ' + lines[j].substring(0);
        }

        // break when next section is reached
        if (lines[j][0] === '#') {
          break;
        }
      }
    }

    // if the line starts with 'Work with a partner to add comments' then prepend line with class emoji
    if (lines[i].match(/Work with a partner to add comments/)) {
      lines[i] = CLASS_EMOJIS[0] + ' ' + lines[i].substring(0);
    }

    // if the line is '## Bonus' then replace the following '* ' with ':zap:'
    if (lines[i] === '## Bonus') {
      for (let j = i + 1; j < lines.length; j++) {
        lines[j] = lines[j].trim();
        if (lines[j][0] === '*') {
          lines[j] = ':zap:' + lines[j].substring(1);

          break;
        }
      }
    }

    // if header remove hashtag(s) and enclose line in asterisks
    if (lines[i].match(/#️?/)) {
      const words = lines[i].split(' ');
      lines[i] = '*' + words.slice(1).join(' ') + '*';
    }
  }

  return lines.filter((item) => item.length > 1).join('\n');
}
