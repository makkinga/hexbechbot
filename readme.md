# How to install

1. Get node.js & npm https://nodejs.org/en/download/. you should get version 16.6.0 upwards.
   If you're on linux machine you may want to consult your package manager.
2. Run `npm install` in this folder to install dependencies.
3. Go to https://discord.com/developers/applications and create new application.
4. Go to Bot on the side bar and create a bot, take note of the token.
5. Go to OAuth2 on the sidebar and take note of the client id.
6. Get your server (guild) ids by go to your discord settings > advanced > developer mode then right click on the server and click `copy ID`.
7. Copy `.env.example` in this folder as `.env` and fill out informations.
8. Pay a visit to https://discord.com/oauth2/authorize?client_id=CLIENT_ID&permissions=0&scope=applications.commands%20bot, don't forget to change `CLIENT_ID`
9. Run `node register_commands` in this folder to register slash commands.

# How to run

Run `node .` in this folder to start the bot.

# Submitting a PR

Make sure you ran the code through the linter. `npm prepare` should set up [husky](https://typicode.github.io/husky/#/) to run the linter to run before every commit.
