require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

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


    if (interaction.commandName === 'embed') {
        const embed = new EmbedBuilder()
        .setTitle('Embed title')
        .setDescription('This is an embed description')
        .setColor('Random')
        .addFields( {
            name: 'Field title', 
            value: 'Some random value', 
            inline: true,
        },
        {
            name: '2dn Field title', 
            value: 'Some random value', 
            inline: true,
        }
        );

        interaction.channel.send({ embeds: [embed] });
    }   
});
client.on('messageCreate', (message) => {
    if (message.content === 'embed') {
        const embed = new EmbedBuilder()
        .setTitle('Embed title')
        .setDescription('This is an embed description')
        .setColor('Random')
        .addFields( {
            name: 'Field title', 
            value: 'Some random value', 
            inline: true,
        },
        {
            name: '2dn Field title', 
            value: 'Some random value', 
            inline: true,
        }
        );

            message.reply({ embeds: [embed] })
            
        }

    });

client.login(process.env.TOKEN);
