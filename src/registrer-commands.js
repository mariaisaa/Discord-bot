require('dotenv').config();
const { REST, Routes, } =  require('discord.js');

const commands = [
    {
    name: 'hey',
    description: 'Replies with hey!'
},
{
    name: 'ping',
    description: 'pong'
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
