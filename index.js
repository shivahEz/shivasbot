//ODMzNTEwNjQyMDc3OTI1NDU3.YHzZRg.KNDGOtkU1MYDIuV1Y004Rk18SRM

const Discord = require('discord.js')
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot online')
})

var ball = ['Signs point to yes. Except that you were born an idiot, you will die an idiot, and nothing will change in-between.',
    'Without a doubt. Nah, I’m just messing with you, go shoot yourself.',
    'My sources say no. They also tell me they hate you and hope you burn in hell.',
    'Yes, definitely. Unless it doesn’t happen. Listen it’s not my fault your father didn’t love you. Get off my back!',
    'Outlook not so good. Especially since you’re so goddamn ugly.',
    'All signs point to yes. But on second thought, go fuck yourself.',
    'As If', 
    'Ask Me If I Care', 
    'Dumb Question Ask Another', 
    'Forget About It', 
    'Get A Clue', 
    'In Your Dreams',  
    'Not A Chance', 
    'Obviously', 
    'Oh Please', 
    'Sure',
    'That\'s Ridiculous', 
    'Well Maybe', 
    'What Do You Think?', 
    'Yes... You Prick',
    'Who Cares?', 
    'Yeah And I\'m The Fucking Pope',
    'Yeah Right', 
    'You Wish', 
    'You\'ve Got To Be Kidding...',
    'It is certain',
    'Yes',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don\'t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];
function ballOutput(){
	 var min=0;
	 var max=ball.length-1;
	 var randInt= Math.floor(Math.random()* (max - min)) + min;
	 return ball[randInt];
}

bot.on('message', (message) =>{
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '!'
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;
    
    if(cmd == 'eatrice')
        message.channel.send('rice');
} )

bot.on('message', (message) =>{
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '!'
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;
    
    if(cmd == 'fuckme')
        message.channel.send('when');
} )

bot.on('message', (message) =>{
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '!'
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;
    
    if(cmd == 'fuckyou')
        message.channel.send('when');
} )

bot.on('message', (message) =>{
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '!'
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;
    
    if(cmd == 'die')
        message.channel.send('shivas was killed.');
} )

bot.on("message", message => {
		if (message.author.bot) return;
		let str = message.content;

		let modified = str
			.toLowerCase()
			.replace(/i am/g, 'im')
			.replace(/[^a-z\.\?\! ]/g, '')
			.split(/\.|\?|\!/)
			.map(i => {
				i = ' ' + i
				let start = i.indexOf(' im ')
				if (start === -1) {
					return
				}
				return i.substr(start)
			})
			.filter(i => i)
			.join(' and ')

		let start
		if (modified) {
			message.channel.send(`Hi ${modified.substr(start).split(' im ').map(i => i.trim()).filter(i => i).join(' ')}, I'm Dad!`);
		}
}
)

bot.on("message", message => {
    if (message.author.bot) return;
    let str = message.content;

    let modified = str
        .toLowerCase()
        .replace(/i am/g, 'im')
        .replace(/[^a-z\.\?\! ]/g, '')
        .split(/\.|\?|\!/)
        .map(i => {
            i = ' ' + i
            let start = i.indexOf(' Im ')
            if (start === -1) {
                return
            }
            return i.substr(start)
        })
        .filter(i => i)
        .join(' and ')

    let start
    if (modified) {
        message.channel.send(`Hi ${modified.substr(start).split(' im ').map(i => i.trim()).filter(i => i).join(' ')}, I'm Dad!`);
    }
}
)

bot.on("message", message => {
    if (message.author.bot) return;
    let str = message.content;

    let modified = str
        .toLowerCase()
        .replace(/i am/g, 'im')
        .replace(/[^a-z\.\?\! ]/g, '')
        .split(/\.|\?|\!/)
        .map(i => {
            i = ' ' + i
            let start = i.indexOf(" i'm ")
            if (start === -1) {
                return
            }
            return i.substr(start)
        })
        .filter(i => i)
        .join(' and ')

    let start
    if (modified) {
        message.channel.send(`Hi ${modified.substr(start).split(' im ').map(i => i.trim()).filter(i => i).join(' ')}, I'm Dad!`);
    }
}
)

bot.on("message", message => {
    if (message.author.bot) return;
    let str = message.content;

    let modified = str
        .toLowerCase()
        .replace(/i am/g, 'im')
        .replace(/[^a-z\.\?\! ]/g, '')
        .split(/\.|\?|\!/)
        .map(i => {
            i = ' ' + i
            let start = i.indexOf(" I'm ")
            if (start === -1) {
                return
            }
            return i.substr(start)
        })
        .filter(i => i)
        .join(' and ')

    let start
    if (modified) {
        message.channel.send(`Hi ${modified.substr(start).split(' im ').map(i => i.trim()).filter(i => i).join(' ')}, I'm Dad!`);
    }
}
)

bot.on('message', msg => {
    if (msg.content === '!joke') {
      var ballAnswer = ball[Math.floor(Math.random() * ball.length)];
      msg.channel.send(ballAnswer);
  };

bot.login("ODMzNTEwNjQyMDc3OTI1NDU3.YHzZRg.KNDGOtkU1MYDIuV1Y004Rk18SRM")})