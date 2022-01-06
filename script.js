// Rock, Paper, Scissors!

// returns random int between 1 and 3 and associates it with rock, paper, or scissors respectively. Returns string.
function getComputerSelection() {
  let play = Math.floor(Math.random() * 3) + 1;
  if (play === 1) return 'rock';
  if (play === 2) return 'paper';
  if (play === 3) return 'scissors';
}

// takes player input and prompts them to retry if it is invalid. Returns player's input as a string in lowercase.
function getPlayerSelection() {
  // create a loop - use WHILE loop because number of iterations is unknown (wait for player to enter valid selection)
  while (true) {
    // prompt for player selection.
    let playerSelection = prompt('Select one: rock, paper, or scissors.');
    // check if selection is null; if so, restart the loop.
    if (playerSelection === null) continue;
    // otherwise, trim the input and convert to lowercase
    playerSelection = playerSelection.trim().toLowerCase();
    // if selection is valid return it as a string, breaking the loop.
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') return playerSelection;
    // otherwise prompt for reentry and restart loop.
    alert('Please enter a valid selection.');
  }
}

// capitalize first letter of a string
function capitalizeFirstLetter(str) {
   return str.charAt(0).toUpperCase() + str.slice(1);
}

// function to play one round of the game. Takes two string inputs and compares them.
// Outputs an array with the result [0] and the comparison values [1].
function playRound() {
  let playerSelection = getPlayerSelection();
  let computerSelection = getComputerSelection();
  //console.log(computerSelection);
  // check for tie
  if (playerSelection === computerSelection) {
    console.log(`You both picked ${playerSelection}`);
    return ['tie', ''] // 'You tied! Pick again.';
    // if player picks rock
  } else if (playerSelection === 'rock') {
    console.log(`You picked Rock. Computer picked ${capitalizeFirstLetter(computerSelection)}.`);
    if (computerSelection === 'paper') return ['lose', 'Paper beats Rock.'] // 'You lose! Paper beats Rock.';
    if (computerSelection === 'scissors') return ['win', 'Rock beats Scissors.'] // 'You win! Rock beats Scissors.';
    // if player picks paper
  } else if (playerSelection === 'paper') {
    console.log(`You picked Paper. Computer picked ${capitalizeFirstLetter(computerSelection)}.`);
    if (computerSelection === 'rock') return ['win', 'Paper beats Rock.'] // 'You win! Paper beats Rock.';
    if (computerSelection === 'scissors') return ['lose', 'Scissors beats Paper'] // 'You lose! Scissors beat Paper.';
    // if player picks scissors
  } else if (playerSelection === 'scissors') {
    console.log(`You picked Scissors. Computer picked ${capitalizeFirstLetter(computerSelection)}.`);
    if (computerSelection === 'rock') return ['lose', 'Rock beats Scissors.'] // 'You lose! Rock beats Scissors.';
    if (computerSelection === 'paper') return ['win', 'Scissors beats Paper.'] // 'You win! Scissors beats Paper.';
  }
};

// play the game! five rounds.
function game() {
  // initialize player and computer scores at 0.
  let playerScore = 0;
  let computerScore = 0;
  // create a loop - use FOR loop since number of iterations is finite and known (five rounds)
  for (let i = 1; i < 6; i++) {
    console.log(`ROUND #${i}`);
    // create a string variable which gets the result of one round (tie/win/lose)
    let round = playRound();
    // seperate the round results and details.
    let result = round[0];
    let details = round[1];
    // switch case to log the result, display details, and increment scores accordingly
    switch(result) {
      case 'tie':
        console.log(`You tied! ${details}`);
        break;
      case 'win':
        console.log(`You win! ${details}`);
        playerScore++;
        break;
      case 'lose':
        console.log(`You lose! ${details}`);
        computerScore++;
    }
    // log the current scores
    console.log(`The current score is - Player: ${playerScore} | Computer: ${computerScore}`)
  }
}

game();

