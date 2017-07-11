const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
 var obj;
        const request = require('request'), url = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json'

        request(url, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                obj = JSON.parse(body)
                console.log("Got a response: ", obj[0].nm);

            } else {
                console.log("Got an error: ", error, ", status code: ", response.statusCode)
            }
        })
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

    async run(msg, args) {
        const word = args.word;
        var s = "";
        displayResult(word);
        function displayResult(choice) {
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].nm === choice) {
                    s = s + obj[i].nm + ", " + obj[i].cty + ", " + obj[i].hse + ", " + obj[i].yrs;
                    break;
                }
            }
        }
        if(s=="")
        return msg.reply("No king found!");
        else
        return msg.reply(`King details: ${s}`);
    }
};