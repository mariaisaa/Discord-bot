require('dotenv').config();
const { REST, Routes, } =  require('discord.js');

const commands = [
    {
    name: 'hey!',
    description: 'replies with hey!'
},
];

const rest = new REST ({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('registrering slash commands...')


        await rest.put(
            Routes.applicationGuildCommands(
                process.env.GUILD_ID, 
                process.env.CLIENT_ID),
            { body: commands }
        )
        console.log('slash commands were registrer succesufully')
    } catch (error) {
        console.log (`there was an error : ${error}`)
    }
})();
