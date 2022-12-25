const startGame = document.querySelector("#start-game");
const setup = document.querySelector("#setup");
const board = document.querySelector("#board");
const endGameBtns = document.querySelector("#endgame-btns");

// Character picking
startGame.addEventListener("click", playerPicking);
function playerPicking() {
  if (x.checked === true) {
    currentPlayer = playerO;
    showBoard();
  } else if (o.checked === true) {
    currentPlayer = playerX;
    showBoard();
  } else {
    alert("Please select a character");
  }
}

// Show board
function showBoard() {
  setup.style.visibility = "hidden";
  board.style.visibility = "visible";
  endGameBtns.style.visibility = "hidden";
}

// Restart Game
function restartGame() {
  setup.style.visibility = "visible";
  board.style.visibility = "hidden";
  endGameBtns.style.visibility = "hidden";
}

// Game over UI
function gameDone() {
  setup.style.visibility = "hidden";
  board.style.visibility = "visible";
  endGameBtns.style.visibility = "visible";
}

// Game variables
const playerX = "X";
const playerO = "O";
const boxes = document.querySelectorAll(".box");

let currentPlayer = "";
let boxClicked = 0;
let gameOver = false;
let gameMoves = [];
let gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

// Boxes
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    boxClicked++;
    gameBoardArray(index);
  })
});

// Putting X and O inside the gameBoard
function gameBoardArray(index) {
  currentPlayer = currentPlayer === playerX ? playerO : playerX
  let col = index % 3;
  let row = (index - col) / 3
  if(gameOver === false) {
    gameBoard[row][col] = currentPlayer;
    boardMarkers(row, col);
    winningPlayer();
  }
}

// Putting X and O inside the Board
function boardMarkers(row, col) {
  if(gameBoard[row][col] === "X") {
    boxes[(row * 3) + col].classList.add("x", "disabled");
  } else if (gameBoard[row][col] === "O"){
    boxes[(row * 3) + col].classList.add("o", "disabled");
  }
  recordGameBoard();
}

// Check for wins and tie
function winningPlayer() {
  winner = "";
  if(gameBoard[0][0] === "X" && gameBoard [0][1] === "X" && gameBoard[0][2] === "X" || 
     gameBoard[1][0] === "X" && gameBoard [1][1] === "X" && gameBoard[1][2] === "X" ||
     gameBoard[2][0] === "X" && gameBoard [2][1] === "X" && gameBoard[2][2] === "X" || 
     gameBoard[0][0] === "X" && gameBoard [1][0] === "X" && gameBoard[2][0] === "X" || 
     gameBoard[0][1] === "X" && gameBoard [1][1] === "X" && gameBoard[2][1] === "X" || 
     gameBoard[0][2] === "X" && gameBoard [1][2] === "X" && gameBoard[2][2] === "X" ||
     gameBoard[0][0] === "X" && gameBoard [1][1] === "X" && gameBoard[2][2] === "X" ||
     gameBoard[0][2] === "X" && gameBoard [1][1] === "X" && gameBoard[2][0] === "X" ) {
      winner = playerX;
      gameEnded(winner);
  } else if (
    gameBoard[0][0] === "O" && gameBoard [0][1] === "O" && gameBoard[0][2] === "O" || 
    gameBoard[1][0] === "O" && gameBoard [1][1] === "O" && gameBoard[1][2] === "O" ||
    gameBoard[2][0] === "O" && gameBoard [2][1] === "O" && gameBoard[2][2] === "O" || 
    gameBoard[0][0] === "O" && gameBoard [1][0] === "O" && gameBoard[2][0] === "O" || 
    gameBoard[0][1] === "O" && gameBoard [1][1] === "O" && gameBoard[2][1] === "O" || 
    gameBoard[0][2] === "O" && gameBoard [1][2] === "O" && gameBoard[2][2] === "O" ||
    gameBoard[0][0] === "O" && gameBoard [1][1] === "O" && gameBoard[2][2] === "O" ||
    gameBoard[0][2] === "O" && gameBoard [1][1] === "O" && gameBoard[2][0] === "O" ) {
      winner = playerO;
      gameEnded(winner);
  } else if (boxClicked === 9) {
      winner = 0;
      gameEnded(winner);
    }
}

// Game Over Mesasge
const resultMessage = document.querySelector("#result-message");
function gameEnded() {
  gameOver = true;
  if (winner === 0) {
    resultMessage.textContent = (`It's a tie!`);
  } else if (winner === playerO || playerX){
    resultMessage.textContent = (`Player ${currentPlayer} wins!`);
  }

  if(gameOver === true) {
    gameDone();
  }
}

// Game Buttons 
const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");
const restartBtn = document.querySelector("#restart-btn");
let arrayLength = -1;

// Btns eventlisteners
restartBtn.addEventListener("click", newGame);
previousBtn.addEventListener("click", previousMove);
nextBtn.addEventListener("click", nextMove);
nextBtn.disabled = true;

// Restart Btn
function newGame() {
  x.checked = false;
  o.checked = false;
  gameBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  currentPlayer = "";
  boxClicked = 0;
  gameOver = false;
  gameMoves = [];
  arrayLength = -1;
  nextBtn.disabled = true;
  previousBtn.disabled = false;
  
  boxes.forEach((box) => {
    box.classList.remove("x", "o", "disabled");
  });

  restartGame();
}

// Record moves
function recordGameBoard() {
  gameMoves.push(gameBoard.map(row => row.map(col => col)));
}

// Previous Move
function previousMove() {
  gameBoard = gameMoves.slice(--arrayLength, (arrayLength + 1));
  if (arrayLength === ((gameMoves.length)*-1)) {
    previousBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
  redrawBoard(gameBoard);
}

// Next Move
function nextMove() {
  gameBoard = gameMoves.slice(++arrayLength, ((arrayLength + 1)));
  if(arrayLength === -1) {
    gameBoard = gameMoves.slice(-1);
    nextBtn.disabled = true;
  } else {
    previousBtn.disabled = false;
  }
  redrawBoard(gameBoard);
}

function redrawBoard(gameBoard) {
  let index = -1;
  for(let i = 0; i < gameBoard.length; i++) {
    for(let j = 0; j < gameBoard[i].length; j++) {
      for(let k = 0; k < gameBoard[i][j].length; k++) {
        index++ 
        if(gameBoard[i][j][k] === "X") {
          boxes[index].classList.add("x");
        } else if(gameBoard[i][j][k] === "O") {
          boxes[index].classList.add("o");
        } else if (gameBoard[i][j][k] === 0) {
          boxes[index].classList.remove("x");
          boxes[index].classList.remove("o");
        }
      }
    }
  }
  return;
}