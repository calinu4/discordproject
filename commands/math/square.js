const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

module.exports = class SquareCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'square',
			aliases: ['sq'],
			group: 'math',
			memberName: 'square',
			description: 'Square of a number',
			details: oneLine`
				This is an incredibly useful command that finds the square of a number.`,
			examples: ['square 15'],

			args: [
				{
					key: 'number',
					label: 'number',
					prompt: 'What number would like to square?',
					type: 'float'
				}
			]
		});
	}

	async run(msg, { number }) {
		

		return msg.reply(`Square of ${number} = **${number*number}**`);
	}
};