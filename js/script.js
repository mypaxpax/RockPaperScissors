let cpuWin = 0;
let playerWin = 0;

// Pick the elements from the html and assign them to variable.
const playerRock = document.querySelector("#buttonRock");
const playerPaper = document.querySelector("#buttonPaper");
const playerScissors = document.querySelector("#buttonScissors");
const results = document.querySelector("#resultDiv");
results.textContent = `Current score: Player: ${playerWin} - ${cpuWin} CPU`;

// Random pick 1 choice from an array consisting of 3 possible picks.
function computerPlay() {
  const picks = ["rock", "paper", "scissors"];
  const randomPick = picks[Math.floor(Math.random() * picks.length)];
  return randomPick;
}

// Run playRound() with the chosen pick of rock, paper or scissors.
function start() {
  playerRock.addEventListener("click", () => {
    playRound("rock");
  });
  playerPaper.addEventListener("click", () => {
    playRound("paper");
  });
  playerScissors.addEventListener("click", () => {
    playRound("scissors");
  });
}

// Takes the input from start() function buttons and add it as playerChoices.
function playRound(pChoice) {
  const playerSelection = pChoice;
  const computerSelection = computerPlay();

  // The possible winning outcomes
  switch (playerSelection + computerSelection) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      ++playerWin;
      results.textContent = `Current score: Player: ${playerWin} - ${cpuWin} CPU`;
      console.log(`WIN! Player picked ${playerSelection} and CPU picked ${computerSelection}`);
      break;

    // The possible losing outcomes.
    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
      ++cpuWin;
      results.textContent = `Current score: Player: ${playerWin} - ${cpuWin} CPU`;
      console.log(`Lost! Player picked ${playerSelection} and CPU picked ${computerSelection}`);
      break;

    // The possible draw outcomes.
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      console.log(`Draw! Player picked ${playerSelection} and CPU picked ${computerSelection}`);
      break;

    default:
  }

  if (playerWin === 5) {
    results.textContent = "Player wins!";
  } else if (cpuWin === 5) {
    results.textContent = "CPU wins!";
  }
}
start();
