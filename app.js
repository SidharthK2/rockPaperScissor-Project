const newGameBtn = document.querySelector(".header button");
const rockBtn = document.querySelector(".rock").lastElementChild;
const paperBtn = document.querySelector(".paper").lastElementChild;
const scissorsBtn = document.querySelector(".scissors").lastElementChild;
const gameContent = document.querySelector(".mid");
const gameTextSection = document.querySelector(".bottom");
const gameText = gameTextSection.firstElementChild;

let playerScore = 0;
let computerScore = 0;

const toggleVisiblity = () => {
  gameContent.classList.toggle("visible");
  gameTextSection.classList.toggle("visible");
};

const computerMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const move = moves[Math.floor(Math.random() * moves.length)];
  return move;
};

const updateUI = (condition) => {
  if (condition === "win") {
    playerScore += 1;
    gameText.innerHTML = "You win!";
  } else if (condition === "lose...") {
    computerScore = +1;
    gameText.innerHTML = "You Lose";
  } else {
    gameText.innerHTML = "It's a Tie!";
  }
};

const getWinner = (playerThrow, computerThrow) => {
  if (playerThrow === "rock") {
    if (computerThrow === "rock") {
      updateUI("tie");
    } else if (computerThrow === "paper") {
      updateUI("lose");
    } else {
      updateUI("win");
    }
  } else if (playerThrow === "paper") {
    if (computerThrow === "rock") {
      updateUI("win");
    } else if (computerThrow === "paper") {
      updateUI("tie");
    } else {
      updateUI("lose");
    }
  } else {
    if (computerThrow === "rock") {
      updateUI("lose");
    } else if (computerThrow === "paper") {
      updateUI("win");
    } else {
      updateUI("tie");
    }
  }
};

const getScores = () => {
  const scores = document.querySelector("h4");
  scores.innerHTML = `Your Score: ${playerScore} | Computer Score: ${computerScore}`;
};

const onThrow = (move) => {
  const playerThrow = move;
  const computerThrow = computerMove();
  getWinner(playerThrow, computerThrow);
  getScores();
  if (playerScore === 5) {
    alert("YOU WON!!");
  }
  if (computerScore === 5) {
    alert("YOU LOSE...");
  }
};

newGameBtn.onclick = toggleVisiblity;
rockBtn.onclick = onThrow.bind("rock");
paperBtn.onclick = onThrow.bind("paper");
scissorsBtn.onclick = onThrow.bind("scissors");
