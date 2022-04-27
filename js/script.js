let cpuWin = 0;
let playerWin = 0;

function computerPlay() {
  const picks = ["rock", "paper", "scissors"];
  const randomPick = picks[Math.floor(Math.random() * picks.length)];
  return randomPick;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    ++playerWin;
    console.log(`WIN! Player picked ${playerSelection} and CPU picked ${computerSelection}`);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    ++playerWin;
    console.log(`WIN! Player picked ${playerSelection} and CPU picked ${computerSelection}`);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    ++playerWin;
    console.log(`WIN! Player picked ${playerSelection} and CPU picked ${computerSelection}`);
  } else if (playerSelection === computerSelection) {
    console.log(`Draw! Player picked ${playerSelection} and CPU picked ${computerSelection}`);
  } else {
    ++cpuWin;
    console.log(`Lost! Player picked ${playerSelection} and CPU picked ${computerSelection}`);
  }
}

function game() {
  for (let rounds = 0; rounds < 5; rounds++) {
    const playerSelection = prompt("Make your pick: ").toLowerCase();
    const computerSelection = computerPlay();
    if (rounds < 5) {
      playRound(playerSelection, computerSelection);
      console.log(`Current Player score: ${playerWin}`);
      console.log(`Current Computer score: ${cpuWin}`);
    }
  }
}

game();

if (playerWin > cpuWin) {
  console.log("You won! POG");
} else {
  console.log("Looks like you lost lmao");
}
