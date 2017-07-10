const Discord=require("discord.js");
const privateStuff=require("./token")
const TOKEN=privateStuff.key
const PREFIX="!";

var bot=new Discord.Client();

bot.on("ready",()=>{
    console.log("I'm ready!");
});

bot.on("message",function(message){
    if(message.author.equals(bot.user))return;
    if(!message.content.startsWith(PREFIX))return;

   const args = message.content.split(/\s+/g);
     const command = args.shift().slice(PREFIX.length).toLowerCase();
    //run each command based on the file names
   try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(bot,message, args);
  } catch (err) {
    console.error(err);
   }
  
});

bot.login(TOKEN);
console.log("Online");