const { Command } = require('discord.js-commando');

const Pokemon = require('../../structures/Pokemon');
const p = new Pokemon();
const pokemonTypes=["normal","fire","water","electric","grass","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"];
module.exports = class CarAddCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'pokemon-fight',
			aliases: ['pokemon','poke'],
			group: 'pokemon',
			memberName: 'pokemonfight',
			description: 'Get the values between two pokemon types.',
			details: 'Get the values between two pokemon types.',
			throttling: {
				usages: 2,
				duration: 3
			},

			args: [
				{
					key: 'poke1',
					prompt: 'What is the type of first Pokemon?\n',
					type: 'string',
					validate: async (poke1, msg) => {
                        var isFound=false;
                        for(var i=0;i<pokemonTypes.length;i++)
						if (poke1==pokemonTypes[i]) {
							isFound=true;
						}
						
                        if(isFound)
						return true;
                        else
                        return `No such pokemon of type ${poke1} was found. Please try a different type!`;
					}
				},
				{
					key: 'poke2',
					prompt: 'What is the type of second Pokemon?\n',
					type: 'string',
                    validate: async (poke2, msg) => {
                        var isFound=false;
                        for(var i=0;i<pokemonTypes.length;i++)
						if (poke2==pokemonTypes[i]) {
							isFound=true;
						}
						
                        if(isFound)
						return true;
                        else
                        return `No such pokemon of type ${poke2} was found. Please try a different type!`;
					}
				
				}
                
			]
		});
	}

	

	async run(msg, {poke1,poke2}) {
		return msg.reply(`${poke1} VS ${poke2}=`+p.displayRes(poke1,poke2));
	}
};