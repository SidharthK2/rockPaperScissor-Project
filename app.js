const newGameBtn = document.querySelector(".header button");
const rockBtn = document.querySelector(".rock").lastElementChild;
const paperBtn = document.querySelector(".paper").lastElementChild;
const scissorsBtn = document.querySelector(".scissors").lastElementChild;
const gameContent = document.querySelector(".mid");

const getThrows = () =>{
    
}

const play = () => {
  for (const i of [...Array(5).keys()]) {
    const { playerThrow, computerThrow } = getThrows();
    getResult(playerThrow, computerThrow);
  }
};

const toggleVisiblity = () => {
    gameContent.classList.toggle("visible")
}

newGameBtn.onclick = toggleVisiblity;