// Pseudocode
// 1. Write function getComputerChoice (x)
// 2. Function should return a random choice between rock, paper, scissors as string values. (x)
// 3. USe Math.Random to select value 0, 1, 2 which will represent the choice of the computer. (x)
// 4. Create a function getHumanChoice that asks the user to input their choice of rock, paper, or scissors. (x)
// 5. Create a function playRound that takes in the human choice and computer choice and returns the result of the round. (x) 
// 6. Create a function game that plays 5 rounds of rock, paper, scissors and keeps track of the score.
// 7. The game should declare the winner or if there is a tie.
// Added: Human input should not be case sensitive. 

const max = 3
let humanScore = 0;
let computerScore = 0;


// Get the computer choice of rock, paper, or scissors. 
function getComputerChoice(max) {
    const randomNumber = Math.floor(Math.random() * max);

    if (randomNumber === 0) {
        console.log("Computer chose Rock"); // update to return 
        return "ROCK";
    } else if (randomNumber === 1) {
        console.log("Computer chose Paper"); // update to return 
        return "PAPER";
    } else {
        console.log("Computer chose Scissors"); // update to return 
        return "SCISSORS";
    }
}

// Get the human choice of rock, paper, or scissors. If the choice is invalid, the function is called recursively. Human input is case insensitive. 
function getHumanChoice() {
    let choice = prompt("Select Rock, Paper, or Scissors");
    if (choice.toUpperCase() !== "ROCK" && choice.toUpperCase()  !== "PAPER" && choice.toUpperCase() !== "SCISSORS") {
        console.log("Invalid Choice - Try Again");
        return getHumanChoice(); // recursively ask again
    }
    console.log("You chose " + choice.toUpperCase());
    return choice.toUpperCase();
}

// Play a round of rock, paper, scissors. A tie results in a repeat of the round. 
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie " + humanScore + " - " + computerScore);
        return playRound(getHumanChoice(), getComputerChoice(max));
    }
    else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        ++humanScore;
        console.log("You Win! Rock beats Scissors " + humanScore + " - " + computerScore);
        return "You Win! Rock beats Scissors";

    }
    else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        ++humanScore;
        console.log("You Win! Paper beats Rock " + humanScore + " - " + computerScore);
        return "You Win! Paper beats Rock";
    }
    else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        ++humanScore;
        console.log("You Win! Scissors beats Paper " + humanScore + " - " + computerScore);
        return "You Win! Scissors beats Paper";
    }
    else {
        ++computerScore;
        console.log("You Lose! Computer wins " + humanScore + " - " + computerScore);
        return "You Lose! Computer wins";
    }
}

// Play 5 rounds of rock, paper, scissors. If there is a tie, the round is repeated until there is a winner in the round. playRound is called recursively. 
function playGame() {
    for (let i = 0; i <5; ++i) {
        playRound(getHumanChoice(), getComputerChoice(max));
    }
    if (humanScore > computerScore) {
        console.log("You win the game! " + humanScore + " - " + computerScore);
    } else if (humanScore < computerScore) {
        console.log("You lose the game! " + humanScore + " - " + computerScore);
    } 
}

// Add event listener to a button
document.getElementById('playButton').addEventListener('click', () => {
    console.log('Button clicked!');
    humanScore = 0;
    computerScore = 0;
    playGame();
});
