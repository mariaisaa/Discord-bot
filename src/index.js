require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,  
        IntentsBitField.Flags.GuildMembers, //to save who members are in the server
        IntentsBitField.Flags.GuildMessages, //to lissent messages 
        IntentsBitField.Flags.MessageContent, 
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`);
});

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;


    if (interaction.commandName === 'hey') {
        interaction.reply('hey!');
    }

    if (interaction.commandName === 'ping') {
        interaction.reply('pong!');
    }
        
        
})

// client.on('messageCreate', (message) => {
//     if (message.author.bot) {
//         return;
//     }

//     if (message.content === 'hello') {
//         message.reply('Hey!');
//     }
// });

client.login(process.env.TOKEN);
