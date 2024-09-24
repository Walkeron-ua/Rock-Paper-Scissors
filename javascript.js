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