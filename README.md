# README-SLACKER

## Purpose

Created to automate a repetitive task at work. Most likely this will only be useful to me.

## What it does

It takes a standardized README.md provided by work and produces a new file called SLACKER.txt which takes the contents of the readme and formats it for pasting into the work Slack

## How to use it

1. Install it globally:
   `sudo npm install -g .`
2. Navigate to directory with README.md and run command:
   1. using `readme-slacker` command will default to copy formatted text to clipboard
   2. using `readme-slacker -f` command will create `SLACKER.txt` file
3. The clipboard or contents of the txt file can be pasted into a Slack post
4. Slack will detect Slack-specific formatting and will ask if you want to apply them
5. Select Apply styles

## Features

- Removes stock emojis
- Adds title line
- Adds Slack formatting for bolding the headers
- Adds class emojis to every
  - Acceptance Criteria
  - Expected Behavior
  - 'Work with a partner to add comments..'
  - Bonus

## Future

- Add emoji packs
- Leveraging Slack API to automatically post formatted message

## Resources I found useful

- [regexr](https://regexr.com/)
- [How to match emojis](https://www.freecodecamp.org/news/how-to-use-regex-to-match-emoji-including-discord-emotes/)
- [How to build a Node command line app](https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs)
- [copy to clipboard on macOS](https://stackoverflow.com/questions/7778539/copy-to-clipboard-in-node-js)
