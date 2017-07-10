exports.run = (client, message, args) => {

var num = message.content.replace("!square","");

                    function returnSquare(num){
                       return num*num;
                    }
                    var result1=returnSquare(num);
                message.reply(result1);
}