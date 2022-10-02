# README-SLACKER

## Purpose

Created to automate a repetitive task at work

## What it does

It takes a standardized README.md provided by work and produces a new file called SLACKER.txt which takes the contents of the readme and formats it for pasting into the work Slack

## How to use it

1. Install it globally:
   `sudo npm install -g .`
2. Navigate to directory with README.md and run command:
   `readme-slacker`
3. A text file called `SLACKER.txt` will be created
4. The contents of the txt file can be pasted into a Slack post
5. Slack will detect Slack-specific formatting and will ask if you want to apply them
6. Select Apply styles

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
