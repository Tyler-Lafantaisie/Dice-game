// write the code now and make it work and after it all works refactor it.
class usr{
    usrName:string;
    usrScore:number;

    constructor(usrName:string, usrScore:number){
       this.usrName = usrName;
       this.usrScore = usrScore;
    }
}
let users:any[] = [];
function Main(){
    
    function info(){
        let playerQuantity:string = prompt("how many players will be playing max is 4 players? ")!;
        let playerNum:number;
        
        let quantityConverter = (playerQuantity as unknown as number)!;
        playerNum = quantityConverter;
        
               
        if( playerNum < 5){
             let listNames:string[] = [];
            for(playerNum; playerNum != 0 && playerNum > 0; playerNum--){ 
                let isUsername = prompt('what is your name? ')!;
                listNames.push(isUsername);



            }
            

            /*The goal is to create a new usr for each number of players max is 4.
            I will create an if statment that will check the number of items in the listNames array            and will create the amount based on that number*/
            
           if(listNames.length === 1){
                let  OneNameArg = listNames[0];
                let OnePlayer = new usr(OneNameArg,0);
                console.log(`Created player ${OnePlayer.usrName} with ${OnePlayer.usrScore} points`);
                users.push(OnePlayer);

           }else if(listNames.length === 2){
            
                let  OneNameArg = listNames[0];
                let  TwonameArg = listNames[1];

                let OnePlayer = new usr(OneNameArg,0);
                let TwoPlayer = new usr(TwonameArg,0);
                console.log(`Created player ${OnePlayer.usrName} with ${OnePlayer.usrScore} points`);
                console.log(`Created player ${TwoPlayer.usrName} with ${TwoPlayer.usrScore} points`);
                users.push(OnePlayer, TwoPlayer);
           } else if(listNames.length === 3){
                
                let  OneNameArg = listNames[0];
                let  TwoNameArg = listNames[1];
                let  ThreeNameArg = listNames[2];

                let OnePlayer = new usr(OneNameArg,0);
                let TwoPlayer = new usr(TwoNameArg,0);
                let ThreePlayer = new usr(ThreeNameArg,0);
                 console.log(`Created player ${OnePlayer.usrName} with ${OnePlayer.usrScore} points`);
                 console.log(`Created player ${TwoPlayer.usrName} with ${TwoPlayer.usrScore} points`);
                 console.log(`Created player ${ThreePlayer.usrName} with ${ThreePlayer.usrScore} points`);
                users.push(OnePlayer, TwoPlayer, ThreePlayer); 
           }else if(listNames.length === 4){
                
                let  OneNameArg = listNames[0];
                let  TwoNameArg = listNames[1];
                let  ThreeNameArg = listNames[2];
                let  FourNameArg = listNames[3];

                let OnePlayer = new usr(OneNameArg,0);
                let TwoPlayer = new usr(TwoNameArg,0);
                let ThreePlayer = new usr(ThreeNameArg,0);
                let FourPlayer = new usr(FourNameArg,0);

                 console.log(`Created player ${OnePlayer.usrName} with ${OnePlayer.usrScore} points`);
                 console.log(`Created player ${TwoPlayer.usrName} with ${TwoPlayer.usrScore} points`);
                 console.log(`Created player ${ThreePlayer.usrName} with ${ThreePlayer.usrScore} points`);
                 console.log(`Created player ${FourPlayer.usrName} with ${FourPlayer.usrScore} points`);
  
                users.push(OnePlayer,TwoPlayer,ThreePlayer,FourPlayer);
           }else{
               console.warn("An error has occurd")
           }
            
        
        }else if(playerNum > 4){
            console.log("To large of a number");
            return null;
        }
        

    }
     
     function Dicelogic(){
        let diceQuestion:string = prompt("would you like a 12 or 6 sided dice? ")!;
        let diceNum = (diceQuestion as unknown as number)!;
        Dice(diceNum);

    }

    function Iswinner(){
        users.forEach((usr) =>{
            console.log(`${usr.usrName} has ${usr.usrScore} points`);
        });
        // left off
        // check each users score and determine if one user has won or if there is a tie.
        // I could create a storting algorithm that sorts each user based on there points and form there can determine if there is a winner.
        let Onepoint:any[] = [];

        users.forEach((usr)=>{
                        if(usr.usrScore === 1){
                Onepoint.push(usr); 
            }

            
        });
        console.log(Onepoint.length)
        if(Onepoint.length === 1){
            console.log(`${Onepoint[0].usrName} is the winner`);
        }else if(Onepoint.length === 0 || Onepoint.length <= 2 ){
            console.log("its a tie");
        }else{
            console.warn("error");
        }

        
    }
   
    info(); 
    Dicelogic();
    Iswinner();
}
function Dice(diceNum:number){
    function Rannum(min:number,max:number){
        min = Math.ceil(min);
        max = Math.floor(max);
        let ranNum = Math.floor(Math.random()* (max - min +1) + min);
        return ranNum;
    }
    //find a way to distiguish each persons guess to compaire them. 

    //if userone < usertwo then log winner userone;

    // DiceNumber must stay as it when removed Guess can't find Rannum
    function DiceNumber(diceNum:number){
        if(diceNum == 6){
            return Rannum(1,6);
        
        }else if(diceNum == 12){
            return Rannum(1,12);
        } 

    } 
    // tying to loop through users and add a point if they get  it right and if they get it wrong then 
    // no point. after the loop is done check score and who ever has the highest score wins
    function Guess(diceNum:number){
        if(diceNum == 6){
            users.forEach((usr) =>{
                let userGuessPrompt = prompt('Guess between 1 & 6');
                let userGuess = +userGuessPrompt!;
                let Ranpickednum = Rannum(1,6); 
            
                if (userGuess == Ranpickednum){
                    console.log("You got it!");
                    return usr.usrScore = 1;
                }else if (userGuess != Ranpickednum){
                    console.log(`You guessed wrong. The answer was ${Ranpickednum}`);
                }else{
                    console.warn("error");
                }
            });
            
        }else if(diceNum == 12){
             users.forEach((usr) =>{
                let userGuessPrompt = prompt('Guess between 1 & 12');
                let userGuess = +userGuessPrompt!;
                let Ranpickednum = Rannum(1,12); 
            
                if (userGuess == Ranpickednum){
                    console.log("You got it!");
                    return usr.usrScore +1;
                }else if (userGuess != Ranpickednum){
                    console.log(`You guessed wrong. The answer was ${Ranpickednum}`);
                }else{
                    console.warn("error");
                }
            });
        }
    }
Guess(diceNum);   
}
Main();
