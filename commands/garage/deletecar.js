const { Command } = require('discord.js-commando');

const Garage = require('../../structures/Garage');


module.exports = class CarDeleteCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'delete-car',
			aliases: ['deletecar','delcar'],
			group: 'garage',
			memberName: 'deletecar',
			description: 'Delete car from the garage.',
			details: 'Delete car from the garage.',
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
        gar.checkOut(reg);
		

		return msg.reply(`The car ${reg} has been successfully deleted!`);
	}
};