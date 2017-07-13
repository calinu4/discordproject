const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const King=require('../../structures/King');
var k=new King();
var e = require("discord-emoji");
module.exports = class FindKingCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'king',
            aliases: ['king', 'kings'],
            group: 'kings',
            memberName: 'king',
            description: 'Find a king by name!',
            details: oneLine`
				This is an incredibly useful command to find kings.
			`,
            examples: ['king Cnut'],

            args: [
                {
                    key: 'word',
                    label: 'word',
                    prompt: 'Which king would like to get information for?',
                    type: 'string',
                    infinite: false
                }
            ]
        });
    }

    async run(msg,{word}) {
        var s=k.displayResult(word);
        const emo=e.people.crown;
        if(s=="")
        return msg.reply("No king found!");
        else
        return msg.reply(`${emo} King details: ${s}`);
    }
};