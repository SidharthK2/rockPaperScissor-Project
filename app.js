const newGameBtn = document.querySelector(".header button");
const rockBtn = document.querySelector(".rock").lastElementChild;
const paperBtn = document.querySelector(".paper").lastElementChild;
const scissorsBtn = document.querySelector(".scissors").lastElementChild;
const gameContent = document.querySelector(".mid");

const toggleVisiblity = () => {
    gameContent.classList.toggle("visible");
};

const onThrow = (move) => {
    const playerScore = 0;
    const computerScore = 0;

    for (const i of [...Array(5).keys()]) {
        const playerThrow = move;
        const computerThrow = computerMove();
    }
};

newGameBtn.onclick = toggleVisiblity;
rockBtn.onclick = onThrowMove.bind("rock");
paperBtn.onclick = onThrowMove.bind("paper");
scissorBtn.onclick = onThrowMove.bind("scissor");
