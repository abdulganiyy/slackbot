## A slackbolt for getting all users info

This is a demo Slack bot built using Slack's [Bolt APIs](https://slack.dev/bolt-js/tutorial/getting-started)

## Getting started

- Clone the repo to your machine.
- Run `yarn install` to install all the libraries.
- Create a new Slack application to get your `SLACK_SIGNING_SECRET` `APP_TOKEN` and `SLACK_BOT_TOKEN`.
- Create a Slash command with the command `/users`
- Install the app to your workspace
- Create a `.env` file and add the following.

```
SLACK_SIGNING_SECRET="YOUR SIGNING SECRET"
SLACK_BOT_TOKEN="YOUR BOT TOKEN"
APP_TOKEN="YOUR APP TOKEN"
```
