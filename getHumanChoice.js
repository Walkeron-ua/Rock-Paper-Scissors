function getHumanChoice() {
    let choice = prompt("Type one of three value: Rock, Paper or Scissors");
    return choice[0].toUpperCase() + choice.slice(1).toLowerCase();
}