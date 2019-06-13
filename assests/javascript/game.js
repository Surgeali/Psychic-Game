//Declare variables
//The choices
var cpuChoice = ['a', 'b', 'c']

//radomize the choices (why)
//make variable of wins, losses, guesses reamining and picked
var wins = 0;
var losses = 0;
var guessesReamining = cpuChoice.length;
var picked = [];
var userInput = 'g';

//display variables which select elements by id. Change inner text values
var displayWins = document.getElementById('TotalWins')
var displayLosses = document.getElementById('TotalLosses')

//check if users choice !== (not =) to the random choice then 
if (userInput !== cpuChoice[0]) {
    wins--;
    losses++;

} else {
    wins++
}
//decrease number in wins 
//increase in losses
//else if they do match then increase wins

//push userInput into picked Array
picked.push(userInput);
displayWins.innerText = 'Wins: ' + wins;
displayLosses.innerText = 'Losses: ' + losses;