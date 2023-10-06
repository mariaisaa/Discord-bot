require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType, } =  require('discord.js');

const commands = [
    {
    name: 'add',
    description: 'Adds two numbers',
    options: [
        {
            name: 'first-numbers',
            description: 'the first number.',
            type: ApplicationCommandOptionType.Number,
            choices: [
                {
                    name: 'one',
                    value: '1',
                },
                {
                    name: 'two',
                    value: '2',
                },
                {
                    name: 'three',
                    value: '3',
                },
            ],
            required: true,
        },
        {
            name: 'second-number',
            description: 'the second number.',
            type: ApplicationCommandOptionType.Number,
            required: true,
        }

    ]

},

// {
//     name: 'hey',
//     description: 'Replies with hey!'
// },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('registrering slash commands...')


        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID, 
                process.env.GUILD_ID),
            { body: commands }
        )
        console.log('slash commands were registrer succesufully')
    } catch (error) {
        console.log (`there was an error : ${error}`)
    }
})();
