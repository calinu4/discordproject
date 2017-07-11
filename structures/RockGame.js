 
 
   var arraycount=[0,0,0,0,0];
   var count=0;//total games played
   var computerwins=0;//total games won by computer
   var playerwins=0;//total games won by player
   var ties=0;
   var winlist={
    rock:{scissors:"crushes",lizard:"crushes"},
    paper:{rock:"covers",spock:"disproves"},
    scissors:{paper:"cuts",lizard:"decapitates"},
    lizard:{paper:"eats",spock:"poisons"},
    spock:{scissors:"smashes",rock:"vaporizes"}

   };
   typeKeys={rock:0,paper:1,scissors:2,lizard:3,spock:4};

   const calculator={rock:[1, 2,0,0,2],//rock
    paper:[0,1, 2,2,0],// paper
     scissors:[2,0,1,0,2],//rock
     lizard:[2,0,2,1,0],//lizard
     spock:[0,2,0,2,1]//spock
      };    
 
 class RockGame{

     constructor(){}

    
  getCount(){
      return count;
  }
  displayRes(choice){
     var s=""
    if(count>=10){

        s=s+"Total games: "+count+"\n";
        s=s+"Computer Wins: "+computerwins+"\n";
        s=s+"Player Wins: "+playerwins+"\n";
        s=s+"Ties: "+ties;
    }
        
    else{
      count++;
    
    
    //list for random choice
    var list=["rock","paper","scissors","lizard","spock"];
    var n1=choice;

    //get a random number between 0 and 2 forthe random array
    var index2 = Math.floor(Math.random() * 5);
    //store computer move
    var n2=list[index2];
    var index1=parseInt(typeKeys[n1]);
    //get the array of the second input
    var resArray=calculator[n2];

    //get the result of game play
    var value=resArray[index1];
    var out="";
     out=out+"Player picks: "+n1+"\n";
     out=out+"Computer picks: "+n2+"\n";
     //

     switch(value){
        case 0:
           computerwins++;
           out=out+this.getWord(n2,n1);
           out+=".Computer wins!"+"\n";
           //document.getElementById("par3").innerHTML=output;
          break;
        case 1:
        ties;
            //document.getElementById("par3").innerHTML=n1+" ties "+n2;
            out+=n1+" ties "+n2+"\n";
            ties++;
            break;
        case 2:
             playerwins++;
              out+=this.getWord(n1,n2);
           out+=".Player wins!"+"\n";
           // document.getElementById("par3").innerHTML=output;
            break;
     }
     out=out+"Total games: "+count;
     return out;
    }  

    //store indexes
     arraycount[index1]++;
     arraycount[index2]++;

    if(count>=10){s="";
       s+="Total games: "+count+"\n";
        s+="Computer Wins: "+computerwins+" : "+computerwins/10*100+"%"+"\n";
        s+="Player Wins: "+playerwins+" : "+playerwins/10*100+"%"+"\n";
        s+="Ties: "+ties+" : "+ties/10*100+"%";
        return s;
    }

 }  

 
getWord(winner,looser){
    var linearray=winlist[winner];
    var word=linearray[looser];
    return winner+" "+word+" "+looser;

  }

 //reset function
      resetGame(){
        count=0;
        computerwins=0;//total games won by computer
         playerwins=0;//total games won by player
        ties=0;
        for(var i=0;i<arraycount.length;i++)
            arraycount[i]=0;
    }
 }
 module.exports = RockGame;