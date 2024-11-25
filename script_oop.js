// Game configuration
const CHOICES = {
    ROCK: 'ROCK',
    PAPER: 'PAPER',
    SCISSORS: 'SCISSORS'
};

const GAME_CONFIG = {
    MAX_ROUNDS: 5,
    WINNING_COMBINATIONS: {
        ROCK: 'SCISSORS',
        PAPER: 'ROCK',
        SCISSORS: 'PAPER'
    }
};

class RockPaperScissors {
    constructor() {
        this.humanScore = 0;
        this.computerScore = 0;
        this.gameRound = 0;
        this.initializeUI();
    }

    initializeUI() {
        // DOM elements
        this.buttons = {
            rock: document.querySelector("#rockButton"),
            paper: document.querySelector("#paperButton"),
            scissors: document.querySelector("#scissorsButton")
        };

        this.gameContainer = document.querySelector("#gameContainer");
        this.scoreDisplay = this.createScoreDisplay();
        this.gameLog = this.createGameLog();

        // Event listeners
        Object.entries(this.buttons).forEach(([choice, button]) => {
            button.addEventListener('click', () => this.handlePlayerChoice(CHOICES[choice.toUpperCase()]));
        });
    }

    createScoreDisplay() {
        const scoreDiv = document.createElement("div");
        scoreDiv.classList.add("score-div");
        this.gameContainer.appendChild(scoreDiv);
        return scoreDiv;
    }

    createGameLog() {
        const gameLogDiv = document.createElement("div");
        gameLogDiv.classList.add("gameLogDiv");
        this.gameContainer.appendChild(gameLogDiv);
        return gameLogDiv;
    }

    getComputerChoice() {
        const choices = Object.values(CHOICES);
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log(`Computer chose ${randomChoice}`);
        return randomChoice;
    }

    handlePlayerChoice(playerChoice) {
        if (this.gameRound >= GAME_CONFIG.MAX_ROUNDS) return;
        const computerChoice = this.getComputerChoice();
        this.playRound(playerChoice, computerChoice);
    }

    playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            this.updateGameLog(`Game Round:${this.gameRound} Tie!`);
            return;
        }

        if (GAME_CONFIG.WINNING_COMBINATIONS[humanChoice] === computerChoice) {
            this.humanScore++;
            this.gameRound++;
            this.updateGameLog(`Game Round:${this.gameRound} You Win! ${humanChoice} beats ${computerChoice}`);
        } else {
            this.computerScore++;
            this.gameRound++;
            this.updateGameLog(`Game Round:${this.gameRound} You Lose! Computer wins`);
        }

        this.updateScore();
    }

    updateGameLog(message) {
        this.gameLog.textContent = message;
    }

    updateScore() {
        this.scoreDisplay.textContent = `Score: You ${this.humanScore} - Computer ${this.computerScore}`;

        if (this.gameRound === GAME_CONFIG.MAX_ROUNDS) {
            this.endGame();
        }
    }

    endGame() {
        const winner = this.humanScore > this.computerScore ? "You Win!" :
                      this.humanScore < this.computerScore ? "Computer Wins!" :
                      "It's a Tie!";

        this.updateGameLog(`Score: You ${this.humanScore} - Computer ${this.computerScore}. GAME OVER! ${winner}`);

        // Disable all buttons
        Object.values(this.buttons).forEach(button => button.disabled = true);
    }
}

// Initialize game
const game = new RockPaperScissors();