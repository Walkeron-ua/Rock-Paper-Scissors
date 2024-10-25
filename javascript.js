const gameInfo = document.querySelector("div");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3); 
    if  (randomNumber == 0) {
        return 'Rock';
    }else if (randomNumber == 1) {
        return 'Paper';
    }else {
        return 'Scissors';
    }
}

function playRound(humanChoice, scores) {
    const computerChoice = getComputerChoice();
    let { humanScore, computerScore } = scores;
    let result;
    
    if (humanChoice === computerChoice) {
        result = "WoW! You both picked the same.";
    }else if (
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Rock" && computerChoice === "Scissors")
    ){
        humanScore++;
        result = `${humanChoice} beats ${computerChoice}. You win!`;
    }else {
        computerScore++;
        result = `${computerChoice} beats ${humanChoice}. You lose!`;
    }
    gameInfo.innerHTML = `${result}<br>Your Score: ${humanScore} | Computer Score: ${computerScore}`;
    if (humanScore == 5 || computerScore == 5) {
        if (humanScore > computerScore) {
            gameInfo.innerHTML =`Congratulation! You Win this game.<br>If u wanna try again just push any button.`;
        }else {
            gameInfo.innerHTML =`Oh No! You Lose this game.<br>If u wanna try again just push any button.`;
        }
        return { gameOver: true, humanScore, computerScore};
    }
    return { gameOver: false, humanScore, computerScore };
}

function playGame() {
    let scores = { humanScore: 0, computerScore: 0 };
    
    const paperBtn = document.querySelector("#paperBtn");
    const scissorsBtn = document.querySelector("#scissorsBtn");
    const rockBtn = document.querySelector("#rockBtn");
    
    paperBtn.addEventListener("click", () => { 
        const { gameOver, humanScore, computerScore } = playRound("Paper", scores);
        scores.computerScore = computerScore;
        scores.humanScore = humanScore;
        if (gameOver) { 
            return scores.computerScore = 0, scores.humanScore = 0;
        }
    });
    scissorsBtn.addEventListener("click", () => { 
        const { gameOver, humanScore, computerScore } = playRound("Scissors", scores);
        scores.computerScore = computerScore;
        scores.humanScore = humanScore;
        if (gameOver) { 
            return scores.computerScore = 0, scores.humanScore = 0;
        }
    });
    rockBtn.addEventListener("click", () => { 
        const { gameOver, humanScore, computerScore } = playRound("Rock", scores);
        scores.computerScore = computerScore;
        scores.humanScore = humanScore;
        if (gameOver) { 
            return scores.computerScore = 0, scores.humanScore = 0;
        }
    });
    
}

playGame();

