function winQuote (selection1, selection2) {
    /* str, str -> str
    Returns a win quote.
    Note: to be used in gameStart. */
    return "You Win! " + selection1 + " beats " + selection2 + "."; 
}

function loseQuote (selection1, selection2) {
    /* str, str -> str
    Returns a win quote.
    Note: to be used in gameStart. */
    return "You Lose! " + selection2 + " beats " + selection1 + "."; 
}

function getComputerChoice () {
    /* null -> str
    returns one of Rock, Paper or Scissors randomly.
    Note: to be used in game().
    */

    // Gets a random integer between 0 (inclusive) and 3 (exclusive)
    let randomInt = Math.floor(Math.random() * 3);

    if (randomInt == 0) {
        return "Rock";
    }
    else if (randomInt == 1) {
        return "Paper";
    }
    else if (randomInt == 2) {
        return "Scissors";
    }
}

function gameRound(playerSelection, computerSelection) {
    /* str, str -> str
    Only works with inputs "Rock", "Paper", "Scissors" (is case sensitive).
    Plays a single round of Rock, Paper Scissors.
    Uses two inputs to evaluate whether the player (playerSelection)
    wins against the computer (computerSelection).
    Note: Used in game().
    Warning: The inputs are case sensitive.
    */

    // If selections are same, call draw.
    if (playerSelection == computerSelection) {
        return "It's a Draw! You both chose " + playerSelection + ".";
    }
    // If player chooses Rock
    else if (playerSelection == "Rock") {
        // Beats Scissors
        if (computerSelection == "Scissors") {
            return winQuote("Rock", "Scissors");
        }
        // Loses against Paper
        else if (computerSelection == "Paper") {}
            return loseQuote("Rock", "Paper");
    }

    // If player chooses Paper
    else if (playerSelection == "Paper") {
        // Beats Rock
        if (computerSelection == "Rock") {
            return winQuote("Paper", "Rock");
        }
        // Loses against Scissors
        else if (computerSelection == "Scissors") {
            return loseQuote("Paper", "Scissors");
        }
    }

    // If player chooses Scissors
    else if (playerSelection == "Scissors") {
        // Beats Paper
        if (computerSelection == "Paper") {
            return winQuote("Scissors", "Paper");
        }
        // Loses against Rock
        else if (computerSelection == "Rock") {
            return loseQuote("Scissors", "Rock");
        }
    }
}

    
function game() {
    /* game loop.
    Uses gameRound to play 5 rounds of rock, paper, scissors.
        */

        // Creates  variable to store computer inputs from getComputerChoice()
        let computerInput;
        // A list of valid inputs for the game to be used in for loop
        let validInputs = ["Rock", "Paper", "Scissors"];
        // Loops through a round until 4 rounds have been completed
        for (let i=0; i <= 4; i++){
        userInput = prompt("Please choose Rock, Paper or Scissors.");
        // Change userInput string to first letter capital only.
        let userInputFormatted =  userInput.charAt(0).toUpperCase() + userInput.substring(1).toLowerCase();
        // If userInput is not a valid choice (after formatting).
        while (!validInputs.includes(userInputFormatted)) {
            userInput = prompt("That was not a valid choice, please try again.", "none");
            // Change userInput string to first letter capital only.
            userInputFormatted =  userInput.charAt(0).toUpperCase() + userInput.substring(1).toLowerCase();
        }
        // Get computer input
        computerInput = getComputerChoice()
        // Evaluate the result and print to console.
        console.log(gameRound(userInputFormatted, computerInput));
    }

}