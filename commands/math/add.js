const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

module.exports = class AddNumbersCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'add-numbers',
			aliases: ['add', 'add-nums'],
			group: 'math',
			memberName: 'add',
			description: 'Adds numbers together.',
			details: oneLine`
				This is an incredibly useful command that finds the sum of numbers.
			`,
			examples: ['add-numbers 42 1337'],

			args: [
				{
					key: 'number1',
					prompt: 'What is the first number?\n',
					type: 'integer'
					
				},
				{
					key: 'number2',
					prompt: 'What is the second number?\n',
					type: 'integer'
					
				}
			]
		});
	}

	async run(msg,{number1,number2}) {
		const total = number1+number2;
	    
		return msg.reply(`${number1}+${number2} = **${total}**`);
	}
};