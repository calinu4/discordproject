const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const Garage=require('../../structures/Garage');
var e = require("discord-emoji");
module.exports = class OpenGarageCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'open',
			aliases: ['open-g', 'open-garage'],
			group: 'garage',
			memberName: 'open',
			description: 'Open Garage with initial data.',
			details: oneLine`
				This is an incredibly useful command to open garage.
			`,
			examples: ['open-garage']
	        
		});
	}

	async run(msg) {
		 const gar=new Garage();
		gar.openGarage();
		const emo=e.travel.car;
	    
		return msg.reply(`Garage Open! ${emo}`+"\n"+"Current Cars:"+"\n\n"+gar.outputCars());
	}
};