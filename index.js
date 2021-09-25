require('dotenv').config()
const {Client, Intents, MessageEmbed} = require('discord.js')
const {HarmonyAddress}                = require('@harmony-js/crypto')
const client                          = new Client({
    intents : [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.DIRECT_MESSAGES,
    ],
    partials: ['CHANNEL']
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageCreate', async message => {
    if (message.guildId === null && !message.author.bot) {
        const embed = new MessageEmbed()
            .setTitle('Hello, Hero!')
            .setDescription('Write `/convaddr` and include either your ETH style address or ONE address to be converted to the other')
      
        await message.channel.send({embeds: [embed]})
    }
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return

    if (interaction.commandName === 'convaddr') {
        try {
            const address    = interaction.options.getString('address', true)
            const hmyAddress = new HarmonyAddress(address)

            const embed      = new MessageEmbed()
                .addField(`ETH`, '```' + hmyAddress.basicHex + '```')
                .addField(`Harmony`, '```' + hmyAddress.bech32 + '```')

            await interaction.reply({embeds: [embed]})
        } catch (error) {
            await interaction.reply(String(error))
        }
    }
})

client.login(process.env.TOKEN)