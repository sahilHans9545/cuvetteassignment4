const gameRules = document.querySelector(".game-rules");
const closeRules = document.querySelector(".close-rules");
const game = document.querySelector(".game");
const gameArea = document.querySelector(".game-area");
const picked = document.querySelector(".youPicked img");
const compPicked = document.querySelector(".compPicked img");
const yourScore = document.querySelector(".yourScore");
const compScore = document.querySelector(".compScore");
const win_lose = document.querySelector(".win_lose");
const youSelected = document.querySelector(".youPicked");
const compSelected = document.querySelector(".compPicked");

playAgain.addEventListener("click", () => {
  game.style.display = "block";
  gameArea.style.display = "none";
});

rules.addEventListener("click", () => {
  gameRules.style.display = "block";
});

closeRules.addEventListener("click", () => {
  gameRules.style.display = "none";
});

const choiceIcon = document.querySelectorAll(".game .choice-icon");

choiceIcon.forEach((element) => {
  element.addEventListener("click", () => {
    let choice = element.getAttribute("data-s");
    game.style.display = "none";
    gameArea.style.display = "flex";
    let cScore = parseInt(compScore.innerHTML);
    let yScore = parseInt(yourScore.innerHTML);
    if (choice == "s") {
      picked.src = "./scissorIcon.png";
      youSelected.classList.add("scissor");
      youSelected.classList.remove("rock");
      youSelected.classList.remove("paper");
    } else if (choice == "r") {
      picked.src = "./fistIcon.png";
      youSelected.classList.add("rock");
      youSelected.classList.remove("scissor");
      youSelected.classList.remove("paper");
    } else {
      picked.src = "./handIcon.png";
      youSelected.classList.add("paper");
      youSelected.classList.remove("scissor");
      youSelected.classList.remove("rock");
    }
    let comp_picked = Math.floor(Math.random() * 3);
    // console.log(comp_picked);
    // 0- rock
    // 1- paper
    // 2 - scissor

    const obj = {
      0: "r",
      1: "p",
      2: "s",
    };

    if (obj[comp_picked] == "s") {
      compPicked.src = "./scissorIcon.png";
      compSelected.classList.add("scissor");
      compSelected.classList.remove("rock");
      compSelected.classList.remove("paper");
    } else if (obj[comp_picked] == "r") {
      compPicked.src = "./fistIcon.png";
      compSelected.classList.add("rock");
      compSelected.classList.remove("scissor");
      compSelected.classList.remove("paper");
    } else {
      compPicked.src = "./handIcon.png";
      compSelected.classList.add("paper");
      compSelected.classList.remove("scissor");
      compSelected.classList.remove("rock");
    }

    console.log(choice + " " + obj[comp_picked]);
    if (
      (choice == "r" && obj[comp_picked] == "p") ||
      (choice == "p" && obj[comp_picked] == "s") ||
      (choice == "s" && obj[comp_picked] == "r")
    ) {
      win_lose.innerHTML = `<h1 class="mb-0">YOU LOST</h1>
                        <h4>AGAINST PC</h4>`;
      compScore.innerHTML = cScore + 1;
      compSelected.classList.add("win");
      youSelected.classList.remove("win");
      next.style.display = "none";
    } else if (choice == obj[comp_picked]) {
      win_lose.innerHTML = `<h1 class="mb-0">TIE UP</h1> <br>`;
      compSelected.classList.remove("win");
      youSelected.classList.remove("win");
      next.style.display = "none";
    } else {
      win_lose.innerHTML = `<h1 class="mb-0">YOU WIN</h1>
                        <h4>AGAINST PC</h4>`;
      yourScore.innerHTML = yScore + 1;
      compSelected.classList.remove("win");
      youSelected.classList.add("win");
      next.style.display = "inline";
    }
  });
});

next.addEventListener("click", () => {
  rpsGame.style.display = "none";
  win_screen.style.display = "flex";
  next.style.display = "none";
});

const reset = () => {
  game.style.display = "block";
  gameArea.style.display = "none";
  compScore.innerHTML = "0";
  yourScore.innerHTML = "0";
  rpsGame.style.display = "block";
  win_screen.style.display = "none";
};
