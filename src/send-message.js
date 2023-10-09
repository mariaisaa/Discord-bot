require('dotenv').config();
const { Client, IntentsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,  
        IntentsBitField.Flags.GuildMembers, //to save who members are in the server
        IntentsBitField.Flags.GuildMessages, //to lissent messages 
        IntentsBitField.Flags.MessageContent, 
    ],
});

const roles = [
    {
        id: '1161009161560146080',
        label: 'Pink'
    },
    {
        id: '1161009276085616732',
        label: 'Green'
    },
    {
        id: '1161009418431897640',
        label: 'Blue'
    }




]

client.on('ready', async (c) => {
    try {
        const channel = await client.channels.cache.get('1149793545230757931')
    if (!channel) return;

    const row = new ActionRowBuilder();

    roles.forEach((role) => {
        row.components.push(
            new ButtonBuilder()
            .setCustomId(role.id)
            .setLabel(role.label)
            .setStyle(ButtonStyle.Primary)
        );
    });
    
    await channel.send({
        content: 'Claim or remove a role below',
        components: [row],
    });

    procces.exist();

    } catch (error) {
        console.log(error);
        
    }
});

client.login(process.env.TOKEN);