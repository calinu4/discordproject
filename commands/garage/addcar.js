const { Command } = require('discord.js-commando');

const Garage = require('../../structures/Garage');


module.exports = class CarAddCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'add-car',
			aliases: ['addcar','addcar'],
			group: 'garage',
			memberName: 'addcar',
			description: 'Adds a car to the garage.',
			details: 'Adds a car to the garage.',
			throttling: {
				usages: 2,
				duration: 3
			},

			args: [
				{
					key: 'make',
					prompt: 'What is the make of the car?\n',
					type: 'string'
					
				},
				{
					key: 'reg',
					prompt: 'What is the reg number?\n',
					type: 'string'
				
				},
                {
					key: 'model',
					prompt: 'what is the model of the car?\n',
					type: 'string'
				
				},
                {
					key: 'sf',
					prompt: 'How many small faults?\n',
					type: 'integer',
					min: 0
				},
                {
					key: 'mf',
					prompt: 'How many medium faults?\n',
					type: 'integer',
					min: 0
				},
                {
					key: 'lf',
					prompt: 'How many large faults?\n',
					type: 'integer',
					min: 0
				}
			]
		});
	}

	

	async run(msg, {make,reg,model,sf,mf,lf }) {
		const gar = new Garage();
        gar.checkIn(make,reg,model,sf,mf,lf);
		

		return msg.reply(`The car ${make}, ${model} has been successfully added!`);
	}
};