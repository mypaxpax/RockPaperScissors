let cpuScore = 0;
let playerScore = 0;

// Pick the elements from the html and assign them to variable.
const buttons = document.querySelector("#buttons").children;
const replay = document.querySelector("#buttonReplay");
const playerRock = document.querySelector("#buttonRock");
const playerPaper = document.querySelector("#buttonPaper");
const playerScissors = document.querySelector("#buttonScissors");
const results = document.querySelector("#resultDiv");
results.textContent = `Current score: Player: ${playerScore} - ${cpuScore} CPU`;

// refresh the page to start new game.
replay.addEventListener("click", () => {
  window.location.reload();
});

// Random pick 1 choice from an array consisting of 3 possible picks.
function computerPlay() {
  const picks = ["rock", "paper", "scissors"];
  const cpuPick = picks[Math.floor(Math.random() * picks.length)];
  return cpuPick;
}

// Hides rock, paper, scissors buttons and leave "replay"
// as the only button left.
function hideButtons() {
  buttons[1].style.display = "none";
  buttons[2].style.display = "none";
  buttons[3].style.display = "none";
}

function winner() {
  if (playerScore < 5 && cpuScore < 5) {
    ++playerScore;
    results.textContent = `Current score: Player: ${playerScore} - ${cpuScore} CPU`;
    console.log(`Player picked ${playerSelection} and CPU picked ${computerSelection}`);
  } if (playerScore === 5 && cpuScore < 5) {
    console.log("Player wins!");
    hideButtons();
  }
}

function loser() {
  if (playerScore < 5 && cpuScore < 5) {
    ++cpuScore;
    results.textContent = `Current score: Player: ${playerScore} - ${cpuScore} CPU`;
    console.log(`Lost! Player picked ${playerSelection} and CPU picked ${computerSelection}`);
  } if (playerScore < 5 && cpuScore === 5) {
    console.log("CPU wins!");
    hideButtons();
  }
}

function draw() {
  console.log(`Draw! Player picked ${playerSelection} and CPU picked ${computerSelection}`);
}

// Takes the input from start() function buttons and add it as playerChoices.
function playRound(pChoice) {
  playerSelection = pChoice;
  computerSelection = computerPlay();

  // The possible winning outcomes
  switch (playerSelection + computerSelection) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      winner();
      break;

    // The possible losing outcomes.
    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
      loser();
      break;

    // The possible draw outcomes.
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw();
      break;

    default:
  }
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

start();
