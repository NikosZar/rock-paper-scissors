const max = 3;
let humanScore = 0;
let computerScore = 0;
let gameRound = 0;


// Get the computer choice of rock, paper, or scissors.
function getComputerChoice(max) {
    const randomNumber = Math.floor(Math.random() * max);

    if (randomNumber === 0) {
        console.log("Computer chose Rock");
        return "ROCK";
    } else if (randomNumber === 1) {
        console.log("Computer chose Paper");
        return "PAPER";
    } else {
        console.log("Computer chose Scissors");
        return "SCISSORS";
    }
}

// Play a round of rock, paper, scissors. A tie results in a repeat of the round.
function playRound(humanChoice, computerChoice) {
    // Don't play if game is over
    if (gameRound >= 5) return;

    if (humanChoice === computerChoice) {
        gameRound = gameRound;
        gameLogDiv.textContent = `Game Round:${gameRound} Tie!`
    }
    else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        ++humanScore;
        ++gameRound;
        updateScore();
        gameLogDiv.textContent = `Game Round:${gameRound} You Win! Rock beats Scissors`;
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        ++humanScore;
        ++gameRound;
        updateScore();
        gameLogDiv.textContent = `Game Round:${gameRound} You Win! Paper beats Rock`;
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        ++humanScore;
        ++gameRound;
        updateScore();
        gameLogDiv.textContent = `Game Round:${gameRound} You Win! Scissors beats Paper`;
    } else {
        ++computerScore;
        ++gameRound;
        updateScore();
        gameLogDiv.textContent = `Game Round:${gameRound}  You Lose! Computer wins`;
    }
}

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const gameContainer = document.querySelector("#gameContainer");

// add div to display score
const scoreDiv = document.createElement("div");
scoreDiv.classList.add("score-div");
scoreDiv.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;
gameContainer.appendChild(scoreDiv);

// for game log and game over text
const gameLogDiv = document.createElement("div");
gameLogDiv.classList.add("gameLogDiv");
gameLogDiv.textContent = "";
gameContainer.appendChild(gameLogDiv);

rockButton.addEventListener("click", () => {
    playRound("ROCK", getComputerChoice(max));
});

paperButton.addEventListener("click", () => {
    playRound("PAPER", getComputerChoice(max));
});

scissorsButton.addEventListener("click", () => {
    playRound("SCISSORS", getComputerChoice(max));
});

// Display the running score, and announce a winner of the game once one player reaches 5 points.
function updateScore() {
    scoreDiv.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;
    if (gameRound === 5) {
        const winner = humanScore > computerScore ? "You Win!" :
                      humanScore < computerScore ? "Computer Wins!" :
                      "It's a Tie!";
        gameLogDiv.textContent = `Score: You ${humanScore} - Computer ${computerScore}. GAME OVER! ${winner}`;

        // Disable all buttons
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}




