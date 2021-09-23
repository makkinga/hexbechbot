require('dotenv').config()
const {REST}                                 = require('@discordjs/rest')
const {ApplicationCommandOptionType, Routes} = require('discord-api-types/v9')

const commands = [{
    name       : 'convaddr',
    description: 'Convert Harmony Address!',
    options    : [{
        name       : 'address',
        type       : ApplicationCommandOptionType.String,
        required   : true,
        description: 'should be clear enough, no?'
    }]
}]

const rest = new REST({version: '9'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.')

        await Promise.all(
            process.env.GUILD_IDS
                .split(/[ ,]+/)
                .filter(Boolean)
                .map((guild_id) => {
                    rest.put(
                        Routes.applicationCommands(process.env.CLIENT_ID, guild_id),
                        {body: commands},
                    )
                })
        )

        console.log('Successfully reloaded application (/) commands.')
    } catch (error) {
        console.error(error)
    }
})()

