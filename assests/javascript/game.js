//Declare variables
//The choices
var letters = 'abcdefghijklmnopqrstuvwxyz';

//radomize the choices (why)
//make variable of wins, losses, guesses reamining and picked
var wins = 0;
var losses = 0;
var guessesReamining = 9;
var picked = [];
var userInput = 'g';

//display variables which select elements by id. Change inner text values
var displayWins = document.getElementById('TotalWins')
var displayLosses = document.getElementById('TotalLosses')
var displayguessesRemaing = document.getElementById('GuessesRemaining')

//decrease number in wins 
//increase in losses
//else if they do match then increase wins

//push userInput into picked Array
// picked.push(userInput);
// displayWins.innerText = 'Wins: ' + wins;
// displayLosses.innerText = 'Losses: ' + losses;

var cpuChoice = letters[Math.floor(Math.random() * letters.length)];

console.log(cpuChoice);

document.onkeyup = function (event) {
    var userInput = event.key;

    //check if users choice !== (not =) to the random choice then 
    if (userInput !== cpuChoice) {
        losses++;
        guessesReamining = 9;
        picked = [];
    } else {
        wins++
    }
    console.log(wins,losses);

    if (guessesReamining == 0) {
        losses++;
        picked = []
        guessesReamining = 9;
    }
    if (picked.indexOf(userInput) >= 0) {
    } else {
        picked.push(userInput);
        document.getElementById('WhichLetter').innerHTML= picked;
        console.log(picked);
    }
    //document.getElementById('TotalWins').innerHTML = TotalWins;
    //document.getElementById('TotalLosses').innerHTML = TotalLosses;
    //document.getElementById('GuessesRemaining').innerHTML = guessesReamining;


}