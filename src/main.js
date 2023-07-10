// write the code now and make it work and after it all works refactor it.
var usr = /** @class */ (function () {
    function usr(usrName, usrScore) {
        this.usrName = usrName;
        this.usrScore = usrScore;
    }
    return usr;
}());
var users = [];
function Main() {
    function info() {
        var playerQuantity = prompt("how many players will be playing max is 4 players? ");
        var playerNum;
        var quantityConverter = playerQuantity;
        playerNum = quantityConverter;
        if (playerNum < 5) {
            var listNames = [];
            for (playerNum; playerNum != 0 && playerNum > 0; playerNum--) {
                var isUsername = prompt('what is your name? ');
                listNames.push(isUsername);
            }
            /*The goal is to create a new usr for each number of players max is 4.
            I will create an if statment that will check the number of items in the listNames array            and will create the amount based on that number*/
            if (listNames.length === 1) {
                var OneNameArg = listNames[0];
                var OnePlayer = new usr(OneNameArg, 0);
                console.log("Created player ".concat(OnePlayer.usrName, " with ").concat(OnePlayer.usrScore, " points"));
                users.push(OnePlayer);
            }
            else if (listNames.length === 2) {
                var OneNameArg = listNames[0];
                var TwonameArg = listNames[1];
                var OnePlayer = new usr(OneNameArg, 0);
                var TwoPlayer = new usr(TwonameArg, 0);
                console.log("Created player ".concat(OnePlayer.usrName, " with ").concat(OnePlayer.usrScore, " points"));
                console.log("Created player ".concat(TwoPlayer.usrName, " with ").concat(TwoPlayer.usrScore, " points"));
                users.push(OnePlayer, TwoPlayer);
            }
            else if (listNames.length === 3) {
                var OneNameArg = listNames[0];
                var TwoNameArg = listNames[1];
                var ThreeNameArg = listNames[2];
                var OnePlayer = new usr(OneNameArg, 0);
                var TwoPlayer = new usr(TwoNameArg, 0);
                var ThreePlayer = new usr(ThreeNameArg, 0);
                console.log("Created player ".concat(OnePlayer.usrName, " with ").concat(OnePlayer.usrScore, " points"));
                console.log("Created player ".concat(TwoPlayer.usrName, " with ").concat(TwoPlayer.usrScore, " points"));
                console.log("Created player ".concat(ThreePlayer.usrName, " with ").concat(ThreePlayer.usrScore, " points"));
                users.push(OnePlayer, TwoPlayer, ThreePlayer);
            }
            else if (listNames.length === 4) {
                var OneNameArg = listNames[0];
                var TwoNameArg = listNames[1];
                var ThreeNameArg = listNames[2];
                var FourNameArg = listNames[3];
                var OnePlayer = new usr(OneNameArg, 0);
                var TwoPlayer = new usr(TwoNameArg, 0);
                var ThreePlayer = new usr(ThreeNameArg, 0);
                var FourPlayer = new usr(FourNameArg, 0);
                console.log("Created player ".concat(OnePlayer.usrName, " with ").concat(OnePlayer.usrScore, " points"));
                console.log("Created player ".concat(TwoPlayer.usrName, " with ").concat(TwoPlayer.usrScore, " points"));
                console.log("Created player ".concat(ThreePlayer.usrName, " with ").concat(ThreePlayer.usrScore, " points"));
                console.log("Created player ".concat(FourPlayer.usrName, " with ").concat(FourPlayer.usrScore, " points"));
                users.push(OnePlayer, TwoPlayer, ThreePlayer, FourPlayer);
            }
            else {
                console.warn("An error has occurd");
            }
        }
        else if (playerNum > 4) {
            console.log("To large of a number");
            return null;
        }
    }
    function Dicelogic() {
        var diceQuestion = prompt("would you like a 12 or 6 sided dice? ");
        var diceNum = diceQuestion;
        Dice(diceNum);
    }
    function Iswinner() {
        users.forEach(function (usr) {
            console.log("".concat(usr.usrName, " has ").concat(usr.usrScore, " points"));
        });
        // left off
        // check each users score and determine if one user has won or if there is a tie.
        // I could create a storting algorithm that sorts each user based on there points and form there can determine if there is a winner.
        var Onepoint = [];
        users.forEach(function (usr) {
            if (usr.usrScore === 1) {
                Onepoint.push(usr);
            }
        });
        console.log(Onepoint.length);
        if (Onepoint.length === 1) {
            console.log("".concat(Onepoint[0].usrName, " is the winner"));
        }
        else if (Onepoint.length === 0 || Onepoint.length <= 2) {
            console.log("its a tie");
        }
        else {
            console.warn("error");
        }
    }
    info();
    Dicelogic();
    Iswinner();
}
function Dice(diceNum) {
    function Rannum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        var ranNum = Math.floor(Math.random() * (max - min + 1) + min);
        return ranNum;
    }
    //find a way to distiguish each persons guess to compaire them. 
    //if userone < usertwo then log winner userone;
    // DiceNumber must stay as it when removed Guess can't find Rannum
    function DiceNumber(diceNum) {
        if (diceNum == 6) {
            return Rannum(1, 6);
        }
        else if (diceNum == 12) {
            return Rannum(1, 12);
        }
    }
    // tying to loop through users and add a point if they get  it right and if they get it wrong then 
    // no point. after the loop is done check score and who ever has the highest score wins
    function Guess(diceNum) {
        if (diceNum == 6) {
            users.forEach(function (usr) {
                var userGuessPrompt = prompt('Guess between 1 & 6');
                var userGuess = +userGuessPrompt;
                var Ranpickednum = Rannum(1, 6);
                if (userGuess == Ranpickednum) {
                    console.log("You got it!");
                    return usr.usrScore = 1;
                }
                else if (userGuess != Ranpickednum) {
                    console.log("You guessed wrong. The answer was ".concat(Ranpickednum));
                }
                else {
                    console.warn("error");
                }
            });
        }
        else if (diceNum == 12) {
            users.forEach(function (usr) {
                var userGuessPrompt = prompt('Guess between 1 & 12');
                var userGuess = +userGuessPrompt;
                var Ranpickednum = Rannum(1, 12);
                if (userGuess == Ranpickednum) {
                    console.log("You got it!");
                    return usr.usrScore + 1;
                }
                else if (userGuess != Ranpickednum) {
                    console.log("You guessed wrong. The answer was ".concat(Ranpickednum));
                }
                else {
                    console.warn("error");
                }
            });
        }
    }
    Guess(diceNum);
}
Main();
