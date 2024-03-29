const possiblePicks = document.querySelector("#fighterBox").children;
const playerNinja = document.querySelector("#ninja");
const playerBear = document.querySelector("#bear");
const playerCowboy = document.querySelector("#cowboy");
const combatText = document.querySelector("#combatText");
const Pscore = document.querySelector(".Pscore");
const Cscore = document.querySelector(".Cscore");
const endBattle = document.querySelector(".endBattle");
const replay = document.querySelector(".replay");
const playersPick = document.querySelector(".leftBox").children;
const cpuPick = document.querySelector(".rightBox").children;

let playerScore = 0;
let computerScore = 0;

// Current score of the game.

currentScore = () => {
  Pscore.textContent = `${playerScore}`;
  Cscore.textContent = `${computerScore}`;
};

// array with possible selections for the computer and randomize a pick.

computerSelections = () => {
  const cpuCanPick = ["bear", "cowboy", "ninja"];
  const computerPick = cpuCanPick[Math.floor(Math.random() * cpuCanPick.length)];
  if (computerPick === "bear") {
    cpuPick[1].src = "./images/bear.png";
  } else if (computerPick === "cowboy") {
    cpuPick[1].src = "./images/cowboy.png";
  } else if (computerPick === "ninja") {
    cpuPick[1].src = "./images/ninja.png";
  }
  return computerPick;
};

// Check the combinations and calls relevant outcome (winner, loser, draw) functions.

function playGame(pChoice) {
  playerSelection = pChoice;
  computerChoice = computerSelections();
  switch (playerSelection + computerChoice) {
    case "bearninja":
    case "cowboybear":
    case "ninjacowboy":
      winner();
      break;

    // The possible losing outcomes.
    case "ninjabear":
    case "bearcowboy":
    case "cowboyninja":
      loser();
      break;

    // The possible draw outcomes.
    case "bearbear":
    case "cowboycowboy":
    case "ninjaninja":
      draw();
      break;

    default:
  }
}

// adds a point the player if wins and checks if player got more than 5 points.

winner = () => {
  if (playerScore < 5 && computerScore < 5) {
    ++playerScore;
    currentScore();
    combatText.textContent = `Victory! Your ${playerSelection} beat ${computerChoice} with ease!`;
  } if (playerScore === 5 && computerScore < 5) {
    finish("Player", "Won");
    hideButtons();
  }
};

loser = () => {
  if (playerScore < 5 && computerScore < 5) {
    ++computerScore;
    currentScore();
    combatText.textContent = `Ouch! Your ${playerSelection} got taken out by ${computerChoice}!`;
  } if (computerScore === 5 && playerScore < 5) {
    finish("Computer", "Won");
    hideButtons();
  }
};

// Hides the possible picks after either player of computer go 5 points -
// - and change the style of "replay" to be shown.

hideButtons = () => {
  possiblePicks[0].style.display = "none";
  possiblePicks[1].style.display = "none";
  possiblePicks[2].style.display = "none";
  replay.style.display = "block";
};

// if the outcome of both picks are the same, we show the draw text.

draw = () => {
  combatText.textContent = `It's a draw! Looks like you both picked ${playerSelection}'s`;
};

// After a winner is found, we change the content of end Battle div.

finish = (playerName, status) => {
  endBattle.textContent = `We got a winner! ${playerName} ${status}`;
};

// replay button that reloads site for a new game.

replay.addEventListener("click", () => {
  location.reload();
});

// Detects what picks player chose and returns playgame with the selected.

gameStart = () => {
  playerBear.addEventListener("click", () => {
    playersPick[1].src = "./images/bear.png";
    playGame("bear");
  });

  playerNinja.addEventListener("click", () => {
    playersPick[1].src = "./images/ninja.png";
    playGame("ninja");
  });

  playerCowboy.addEventListener("click", () => {
    playersPick[1].src = "./images/cowboy.png";
    playGame("cowboy");
  });
};

gameStart();
