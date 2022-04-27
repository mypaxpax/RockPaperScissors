let cpuWin = 0;
let playerWin = 0;

const playerRock = document.querySelector("#buttonRock");
const playerPaper = document.querySelector("#buttonPaper");
const playerScissors = document.querySelector("#buttonScissors");
const results = document.querySelector("#resultDiv");

function computerPlay() {
  const picks = ["rock", "paper", "scissors"];
  const randomPick = picks[Math.floor(Math.random() * picks.length)];
  return randomPick;
}

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

function playRound(pChoice) {
  const playerSelection = pChoice;
  const computerSelection = computerPlay();

  switch (playerSelection + computerSelection) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      ++playerWin;
      results.textContent = `Current score: Player: ${playerWin} - ${cpuWin} CPU`;
      console.log(`WIN! Player picked ${playerSelection} and CPU picked ${computerSelection}`);
      break;

    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      ++cpuWin;
      results.textContent = `Current score: Player: ${playerWin} - ${cpuWin} CPU`;
      console.log(`Lost! Player picked ${playerSelection} and CPU picked ${computerSelection}`);
      break;

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      console.log(`Draw! Player picked ${playerSelection} and CPU picked ${computerSelection}`);
      break;

    default:
  }
}
start();
