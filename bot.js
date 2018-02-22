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


client.on('message', message => {
    if (message.content === 'i love you jason') {
    	message.channel.send('NO YOU LOVE ME!');
  	}
});


client.on('message', message => {
    if (message.content === 'NO HE LOVES ME >:C') {
    	message.channel.send('NO NO NO NO HE LOVES ME');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
