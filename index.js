require('dotenv').config();
const { Client, Intents } = require('discord.js');
const { HarmonyAddress } = require('@harmony-js/crypto');
const client = new Client({
  intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.DIRECT_MESSAGES
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'convaddr') {
    try {
      const address = interaction.options.getString('address', true);
      const hmyAddress = new HarmonyAddress(address);

      await interaction.reply(
        '```\n' + 
        `  0x: ${hmyAddress.basicHex}\n` +
        ` one: ${hmyAddress.bech32}\n` +
        '```'
      );
    } catch(err) {
      await interaction.reply(String(err));
    }
  }
});

client.login(process.env.TOKEN);
