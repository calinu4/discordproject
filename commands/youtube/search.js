
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const YouTube = require("discord-youtube-api");
const privateStuff=require("../../youtubekey")
const TOKEN=privateStuff.key
const youtube = new YouTube(TOKEN);
module.exports = class YoutubeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'search',
            aliases: ['search', 'searches'],
            group: 'youtube',
            memberName: 'search',
            description: 'Enter keywords to search for videos!',
            details: oneLine`
				This is an incredibly useful command to find kings.
			`,
            examples: ['search Cnut'],

            args: [
                {
                    key: 'word',
                    label: 'word',
                    prompt: 'Enter video keywords!',
                    type: 'string',
                    infinite: false
                }
            ]
        });
    }

    async run(msg,{word}) {
       
        console.log(word);
        try{
            const video = await youtube.searchVideos(word);
             return msg.reply(video.url);
        }catch(Error){
            console.log("no video");
            return msg.reply("No video found!");
        }
       
       
    }
};