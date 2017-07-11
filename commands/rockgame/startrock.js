const { Command } = require('discord.js-commando');

const RockGame = require('../../structures/RockGame');
const r = new RockGame();
const gamewords=["rock","paper","scissors","lizard","spock"];
module.exports = class CarAddCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'startrock',
			aliases: ['start-rock','rock-start'],
			group: 'rockgame',
			memberName: 'startrock',
			description: 'Start a rock game',
			details: 'Start Rock Game',
			throttling: {
				usages: 2,
				duration: 3
			},

			args: [
				{
					key: 'choice',
					prompt: 'What is your choice?\n',
					type: 'string',
                    infinite:false,
					validate: async (choice, msg) => {
                        var isFound=false;
                       for(var i=0;i<gamewords.length;i++)
                           if(choice==gamewords[i]){
                           isFound=true;
                           break;
                           }
                       if(isFound)
                        var res=r.displayRes(choice);
                        else
                        return `Choose a valid word from: ${gamewords.toString()}`
                        console.log(res)
                        console.log(r.getCount())
                        if(r.getCount()>=10)
                        return true;
                        else
                        return `${res}`;
                       
				
					}
				}
                
			]
		});
	}

	

	async run(msg,choice) {
       const result=r.displayRes("");
       r.resetGame();
		return msg.reply(`${result}`);
	}
};