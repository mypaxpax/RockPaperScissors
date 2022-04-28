let cpuScore = 0;
let playerScore = 0;

// Pick the elements from the html and assign them to variable.
const buttons = document.querySelector("#rps").children;
const replay = document.querySelector("#buttonReplay");
const playerRock = document.querySelector("#rock");
const playerPaper = document.querySelector("#paper");
const playerScissors = document.querySelector("#scissors");
const score = document.querySelector("#scoreDiv");
const gamePicks = document.querySelector("p.gamePicks");
const endGame = document.querySelector(".endGameMessage");

// function to show the winner - takes playername + win/loss.
// changes the display from none to block, making it visible.
function finish(playerName, status) {
  endGame.textContent = `${playerName} ${status}`;
  endGame.style.display = "block";
}

// score text
const currentScore = () => {
  score.textContent = `Player: ${playerScore} - ${cpuScore} CPU`;
};

currentScore();

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
  buttons[0].style.display = "none";
  buttons[1].style.display = "none";
  buttons[2].style.display = "none";
}

// checks score of player +1 if player wins
// if player got 5 points, call hideButtons() function.
function winner() {
  if (playerScore < 5 && cpuScore < 5) {
    ++playerScore;
    currentScore();
    gamePicks.textContent = `Player picked ${playerSelection} and CPU picked ${computerSelection}`;
  } if (playerScore === 5 && cpuScore < 5) {
    finish("Player", "Won");
    hideButtons();
  }
}

// checks score of CPU and adds +1 if it wins
// if CPU got 5 points, call hideButtons() function.
function loser() {
  if (playerScore < 5 && cpuScore < 5) {
    ++cpuScore;
    currentScore();
    gamePicks.textContent = `Player picked ${playerSelection} and CPU picked ${computerSelection}`;
  } if (playerScore < 5 && cpuScore === 5) {
    finish("CPU", "Won");
    hideButtons();
  }
}

// if player and CPU picks the same.
function draw() {
  gamePicks.textContent = `DRAW Player picked ${playerSelection} and CPU picked ${computerSelection}`;
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

currentScore();

start();
