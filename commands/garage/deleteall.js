const { Command } = require('discord.js-commando');

const Garage = require('../../structures/Garage');


module.exports = class CarDeleteAllCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'deleteall',
			aliases: ['delete-all','delall'],
			group: 'garage',
			memberName: 'deleteall',
			description: 'Delete all cars from the garage.',
			details: 'Delete all cars from the garage.',
			throttling: {
				usages: 2,
				duration: 3
			},

			
		});
	}

	

	async run(msg) {
		const gar = new Garage();
        gar.emptyList();
		

		return msg.reply(`The cars have been successfully deleted!`);
	}
};