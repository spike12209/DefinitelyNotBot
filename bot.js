const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'I love you Byakuya') {
    	message.channel.send('I love you to!');
  	}
});

client.on('message', message => {
    if (message.content === 'So Hows Life') {
    	message.reply('Great!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
