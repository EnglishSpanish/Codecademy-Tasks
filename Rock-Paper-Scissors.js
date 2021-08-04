const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
  } else {
    return 'Error. Choose a valid option.';
  };
};

const getComputerChoice = () => {
  var choice = Math.floor(Math.random() * 3);
  switch(choice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default: return 'Error';
  }
}

const determineWinner = (userChoice, computerChoice) => {

  if (userChoice === 'bomb') {
  return 'You destroyed the opposition! You win!';
  }

  if (userChoice === computerChoice) {
    return 'The game was a tie!';
  }

  if (userChoice === 'rock' && computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }

  if (userChoice === 'paper' && computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }

  if (userChoice === 'scissors' && computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}

const playGame = () => {
  var userChoice = getUserChoice('bomb');
  var computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice}, the computer chose ${computerChoice}.`)

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();





