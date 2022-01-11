// Rock, Paper, Scissors!

const buttons = document.querySelectorAll('.player-button');
const gameLog = document.querySelector('.game-log');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');

let roundResult;
let playerScore = 0;
let computerScore = 0;

// main event lisener and game functions
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    fadeEntries();
    playRound(e.target.value, getComputerSelection());
    updateScore();
    if (checkForWinner()) {
      disableButtons();
      resetGame();
    }
  });
});


// returns random int between 1 and 3 and associates it with rock, paper, or scissors respectively. Returns string.
function getComputerSelection() {
  let play = Math.floor(Math.random() * 3);
  if (play === 0) return 'rock';
  if (play === 1) return 'paper';
  if (play === 2) return 'scissors';
}

// capitalize first letter of a string
function capitalizeFirstLetter(str) {
   return str.charAt(0).toUpperCase() + str.slice(1);
}

function fadeEntries(){
  const allLogEntries = document.querySelectorAll('.log-entry');
  allLogEntries.forEach((entry) => {
    entry.classList.add('fade');
  });
}

function playRound(playerSelection, computerSelection) {
  const logEntry = document.createElement('p');
  logEntry.classList.add('log-entry');
  if (playerSelection === computerSelection) {
    logEntry.textContent = `You both picked ${capitalizeFirstLetter(playerSelection)}.`;
    roundResult = ['tie', ''];
  } else if (playerSelection === 'rock') {
    logEntry.textContent = `You picked Rock. Computer picked ${capitalizeFirstLetter(computerSelection)}.`;
    if (computerSelection === 'paper') roundResult = ['lose', 'Paper beats Rock.'];
    if (computerSelection === 'scissors') roundResult = ['win', 'Rock beats Scissors.'];
  } else if (playerSelection === 'paper') {
    logEntry.textContent = `You picked Paper. Computer picked ${capitalizeFirstLetter(computerSelection)}.`;
    if (computerSelection === 'rock') roundResult = ['win', 'Paper beats Rock.'];
    if (computerSelection === 'scissors') roundResult = ['lose', 'Scissors beats Paper.'];
  } else if (playerSelection === 'scissors') {
    logEntry.textContent = `You picked Scissors. Computer picked ${capitalizeFirstLetter(computerSelection)}.`;
    if (computerSelection === 'rock') roundResult = ['lose', 'Rock beats Scissors.'];
    if (computerSelection === 'paper') roundResult = ['win', 'Scissors beats Paper.'];
  }
  if (roundResult[0] === 'tie') {
      logEntry.textContent += ` You tied!`;
  } else if (roundResult[0] === 'win') {
      logEntry.textContent += ` You win! ${roundResult[1]}`;
      logEntry.classList.add('win');
      playerScore++;
  } else if (roundResult[0] ==='lose') {
      logEntry.textContent += ` You lose! ${roundResult[1]}`;
      logEntry.classList.add('lose');
      computerScore++;
  }
  gameLog.insertBefore(logEntry, gameLog.firstChild);
};

function updateScore() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore; 
}

function checkForWinner() {
  if (playerScore === 5) {
    const winMessage = document.createElement('p');
    winMessage.textContent = `YOU WIN! The final score is - Player: ${playerScore} | Computer: ${computerScore}.`;
    winMessage.classList.add('game-end');
    console.log(winMessage);
    gameLog.insertBefore(winMessage, gameLog.firstChild);
    return true;
  } else if (computerScore === 5) {
    const loseMessage = document.createElement('p');
    loseMessage.textContent = `YOU LOSE! The final score is - Player: ${playerScore} | Computer: ${computerScore}.`;
    loseMessage.classList.add('game-end');
    gameLog.insertBefore(loseMessage, gameLog.firstChild);
    return true;
  } else {
    return false;
  }
}

function disableButtons() {
  buttons.forEach(button => {
    // button.removeEventListener('click', runGame);
    button.disabled = true;
  });
}

function resetGame() {
  const resetButton = document.querySelector('.reset-button');
  resetButton.classList.add('reset-visible');
  resetButton.addEventListener('click', () => {
    window.location.reload();
  });
}