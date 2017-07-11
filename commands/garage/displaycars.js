const { Command } = require('discord.js-commando');

const Garage = require('../../structures/Garage');


module.exports = class CarDisplayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'display-cars',
			aliases: ['displaycars','display-c'],
			group: 'garage',
			memberName: 'displaycars',
			description: 'Display cars from garage',
			details: 'Display all cars',
			throttling: {
				usages: 2,
				duration: 3
			}

			
		});
	}

	

	async run(msg) {
		const gar = new Garage();
       
		

		return msg.reply(gar.outputCars());
	}
};