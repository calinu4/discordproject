const { Command } = require('discord.js-commando');

const Garage = require('../../structures/Garage');


module.exports = class CarDeleteCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'bill',
			aliases: ['billcar','bill-car'],
			group: 'garage',
			memberName: 'bill',
			description: 'Calculate bill for a car',
			details: 'Calculate bill for a car',
			throttling: {
				usages: 2,
				duration: 3
			},

			args: [
				
				{
					key: 'reg',
					prompt: 'What is the reg number?\n',
					type: 'string'
				
				}
			]
		});
	}

	

	async run(msg, {reg}) {
		const gar = new Garage();
       
		

		return msg.reply(`The bill for ${reg} is: `+gar.calculateBill(reg));
	}
};