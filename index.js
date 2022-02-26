const { App } = require("@slack/bolt");
const axios = require("axios");
require("dotenv").config();
// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // enable the following to use socket mode
  appToken: process.env.APP_TOKEN,
});

app.command("/users", async ({ command, ack, say }) => {
  try {
    await ack();
    // let data = command.text.split("|");
    // console.log(data);
    // let key = data[0];
    // let value = data[1];

    let message = { blocks: [] };
    const response = await axios.get("https://fictus.10hourlabs.com/talents");
    let profiles = response.data.items;

    // profiles = key
    //   ? profiles.filter((profile) => profile[key] === value)
    //   : profiles;

    profiles.map((profile) => {
      message.blocks.push({
        type: "section",
        text: {
          type: "mrkdwn",
          text: `${profile.first_name} ${profile.last_name}`,
        },

        accessory: {
          type: "image",
          image_url:
            "https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg",
          alt_text: "cute cat",
        },
      });
    });

    say(message);
  } catch (error) {
    console.log("err");
    console.error(error);
  }
});

(async () => {
  const port = 3000;
  // Start your app
  await app.start(process.env.PORT || port);
  console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();
