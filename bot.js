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

client.on('message', message => {
    if (message.content === 'Yes i am.') {
    	message.channel.send('why tho? i thought you loved me');
  	}
});

client.on('message', message => {
    if (message.content === ';-;') {
    	message.reply('WHAT YOU MAKEING THAT FACE FOR YOU TRYING TO HIT ON SPIKE?!');
  	}
});

client.on('message', message => {
    if (message.content === 'byakuya chill ;-;') {
    	message.channel.send('NO NO NEVER *shoots at you*');
  	}
});


client.on('message', message => {
    if (message.content === 'xD') {
    	message.channel.send('aye b whats so funny eh*');
  	}
});

client.on('message', message => {
    if (message.content === ',bal') {
    	message.channel.send('stop it you aint rich');
  	}
});

client.on('message', message => {
    if (message.content === 'yo momma') {
    	message.reply('yo momma jokes eh? Yo mama so fat, that the Twinkies revolve around her.');
  	}
});

client.on('message', message => {
    if (message.content === 'kaneki') {
    	message.reply('byakuya is better smh.');
  	}
});

client.on('message', message => {
    if (message.content === 'NO') {
    	message.reply('YES!');
  	}
});

client.on('message', message => {
    if (message.content === 'no') {
    	message.reply('YES');
  	}
});

client.on('message', message => {
    if (message.content === 'im not smart') {
    	message.reply('YES YOU ARE');
  	}
});

client.on('message', message => {
    if (message.content === 'i love you ali') {
    	message.reply('i love you spike');
  	}
});

client.on('message', message => {
    if (message.content === 'yes') {
    	message.reply('NO');
  	}
});

client.on('message', message => {
    if (message.content === 'YES') {
    	message.reply('NO');
  	}
});
client.on('message', message => {
    if (message.content === 'XD') {
    	message.reply('WHATS FUNNY?!');
  	}
});

client.on('message', message => {
    if (message.content === 'lol') {
    	message.reply('whats funny eh?');
  	}
});

client.on('message', message => {
    if (message.content === 'LOL') {
    	message.reply('whats funny eh?');
  	}
});


client.on('message', message => {
    if (message.content === 'xd') {
    	message.reply('whats funny eh?');
  	}
});


client.on('message', message => {
    if (message.content === 'xDDD') {
    	message.reply('whats funny eh?');
  	}
});

client.on('message', message => {
    if (message.content === 'xDD') {
    	message.reply('whats funny eh?');
  	}
});

client.on('message', message => {
    if (message.content === '.') {
    	message.reply('you gonna put me on hold like that?');
  	}
});



client.on('message', message => {
    if (message.content === 'e,e') {
    	message.reply('OI WHAT YOU MAKING THE FACE FOR 1V1 ME IN THE STREETS SENBONGETSU')
  	}
});


client.on('message', message => {
    if (message.content === '<33') {
    	message.reply('i love spike')
  	}
});

client.on('message', message => {
    if (message.content === 'will you marry me byakuya') {
    	message.reply('YES :D');
  	}
});



client.on('message', message => {
    if (message.content === 'okie') {
    	message.reply('ok* FIX YOUR MISTAKES')
  	}
});

client.on('message', message => {
    if (message.content === 'attack me byakuya') {
    	message.channel.send('hits hits hits hits hits hits hits HAHHAHAHAHA  HITS 1v1 me in the streets b');
  	}
});



client.on('message', message => {
    if (message.content === ':'c') {
    	message.channel.send('dont be sad');
  	}
});


client.on('message', message => {
    if (message.content === 'i hate you byakuya') {
    	message.channel.send('but spike loves me <3');
  	}
});


client.on('message', message => {
    if (message.content === 'Byakuya 1v1 me on the streets') {
    	message.reply('ight bet i get spike im gonna win');
  	}
});


client.on('message', message => {
    if (message.content === 'BRUV') {
    	message.reply('yes i did set you up');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
