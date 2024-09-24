let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

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
    let choice = prompt("Type one of three value: Rock, Paper or Scissors");
    return choice[0].toUpperCase() + choice.slice(1).toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Paper" & computerChoice =="Rock") {
        ++humanScore;
        return console.log(`You Win! Paper beats Rock.\n\nYour Score: ${humanScore} | Computer Score: ${computerScore}`);
    }else if (humanChoice == "Paper" & computerChoice =="Scissors") {
        ++computerScore;
        return console.log(`You Lose! Scissors beats Paper.\n\nYour Score: ${humanScore} | Computer Score: ${computerScore}`);
    }else if (humanChoice == "Rock" & computerChoice =="Paper") {
        ++computerScore;
        return console.log(`You Lose! Paper beats Rock.\n\nYour Score: ${humanScore} | Computer Score: ${computerScore}`);
    }else if (humanChoice == "Rock" & computerChoice =="Scissors") {
        ++humanScore;
        return console.log(`You Win! Rock beats Scissors.\n\nYour Score: ${humanScore} | Computer Score: ${computerScore}`);
    }else if (humanChoice == "Scissors" & computerChoice =="Paper") {
        ++humanScore;
        return console.log(`You Win! Scissors beats Paper.\n\nYour Score: ${humanScore} | Computer Score: ${computerScore}`);
    }else if (humanChoice == "Scissors" & computerChoice =="Rock") {
        ++computerScore;
        return console.log(`You Lose! Rock beats Scissors.\n\nYour Score: ${humanScore} | Computer Score: ${computerScore}`);
    }else {
        ++humanScore;
        ++computerScore;
        return console.log(`WoW! You both picked the same.\n\nYour Score: ${humanScore} | Computer Score: ${computerScore}`);
    }
}

playRound(humanChoice, computerChoice);