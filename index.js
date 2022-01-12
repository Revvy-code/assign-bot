const fs = require('fs');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const TOKEN = process.env.TOKEN;    // Discord bot token


// DISCORD
const Discord = require('discord.js');
const client = new Discord.Client();

// CUSTOM MODULES
const toggleRoles = require('./modules/toggle_roles.js');


client.once('ready', () => {
    console.log('Ready!\n');
    client.user.setActivity('Status message goes here');
});


client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.id === channel_id.assign_roles) toggleRoles.run(message);
});


client.login(TOKEN);
