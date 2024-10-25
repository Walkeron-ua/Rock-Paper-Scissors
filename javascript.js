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

function getHumanChoice() {
    let choice;
    do {
        choice = prompt("Type one of three value: Rock, Paper or Scissors");
        choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();
    } while (!["Rock", "Paper", "Scissors"].includes(choice));
    return choice;
    
}

function playRound(humanChoice, computerChoice, scores) {
    let { humanScore, computerScore } = scores;
    let result;

    if (humanChoice === computerChoice) {
        result = "WoW! You both picked the same.";
    }else if (
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Rock" && computerChoice === "Scissors")
    ) {
        humanScore++;
        result = `${humanChoice} beats ${computerChoice}. You Win!`;
    }else {
        computerScore++;
        result = `${computerChoice} beats ${humanChoice}. You Lose!`;
    }

    return { humanScore, computerScore, result };
}

function playGame() {
    let scores = { humanScore: 0, computerScore: 0 };
    for (let i = 1; i <= 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const { humanScore, computerScore, result } = playRound(humanChoice, computerChoice, scores);

        scores.humanScore = humanScore;
        scores.computerScore = computerScore;

        console.log(`${result}\nYour Score: ${scores.humanScore} | Computer Score: ${scores.computerScore}\nRound: ${i}/5`);
    }

    if (scores.humanScore > scores.computerScore) {
        console.log(`Congratulation! You Win this game.`);
    }else if (scores.humanScore < scores.computerScore) {
        console.log(`Oh No! You Lose this game.`);
    }else {
        console.log(`WoW! You both have same score. It's Draw.`);
    }
}

playGame();