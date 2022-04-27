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

  if (playerSelection === "rock" && computerSelection === "scissors") {
    ++playerWin;
    results.textContent = `Current score: \nPlayer: ${playerWin} - ${cpuWin} CPU`;
    console.log(`WIN! Player picked ${playerSelection} and CPU picked ${computerSelection}`);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    ++playerWin;
    results.textContent = `Current score: \nPlayer: ${playerWin} - ${cpuWin} CPU`;
    console.log(`WIN! Player picked ${playerSelection} and CPU picked ${computerSelection}`);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    ++playerWin;
    results.textContent = `Current score: \nPlayer: ${playerWin} - ${cpuWin} CPU`;
    console.log(`WIN! Player picked ${playerSelection} and CPU picked ${computerSelection}`);
  } else if (playerSelection === computerSelection) {
    console.log(`Draw! Player picked ${playerSelection} and CPU picked ${computerSelection}`);
  } else {
    ++cpuWin;
    results.textContent = `Current score: \nPlayer: ${playerWin} - ${cpuWin} CPU`;
    console.log(`Lost! Player picked ${playerSelection} and CPU picked ${computerSelection}`);
  }
}

start();
/* if (playerWin > cpuWin) {
  console.log("You won! POG");
} else {
  console.log("Looks like you lost lmao");
}
 */
