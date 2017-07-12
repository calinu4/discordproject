 var obj;
 var s = "";      

class King{
    constructor(){
      const request = require('request'), url = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json'

        request(url, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                obj = JSON.parse(body)
                console.log("Got a response: ", obj[0].nm);

            } else {
                console.log("Got an error: ", error, ", status code: ", response.statusCode)
            }
        })
    }

    
        
         displayResult(choice) {
             s="";
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].nm === choice) {
                    s = s + obj[i].nm + ", " + obj[i].cty + ", " + obj[i].hse + ", " + obj[i].yrs;
                    return s;
                }
            }
            return s;
        }
}

module.exports = King;