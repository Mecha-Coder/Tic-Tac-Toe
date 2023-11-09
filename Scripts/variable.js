// Hide/Show Elements----------------------------------------
const iconLeft = document.getElementById("left-icon");
const iconRight = document.getElementById("right-icon");

const buttonPlay = document.getElementById("play-button");
const boxChoose = document.getElementById("choose-container");

const boxStatus = document.getElementById("status-container");
const boxGame = document.getElementById("game-container");

const coverPause = document.getElementById("blur-back");
const boxMsg = document.getElementById("msg-container");

const boxOverlay = document.getElementById("overlay");

// Button element--------------------------------------------
const buttonVsPly = document.getElementById("button-1");
const buttonVsCom = document.getElementById("button-2");

// Change text element----------------------------------------
const leftPlayerName = document.getElementById("left-player");
const leftScore = document.getElementById("left-score");

const rightPlayerName = document.getElementById("right-player");
const rightScore = document.getElementById("right-score");

const msgAlert = document.getElementById("alert-msg");

// Change background color element------------------------------
const bgLeftCorner = document.getElementById("left-corner");
const bgLeftStatus = document.getElementById("left-status");

const bgRightCorner = document.getElementById("right-corner");
const bgRightStatus = document.getElementById("right-status");

//Game title img
const imgTitle = document.getElementById("title-img");

// Grid 3x3 div-------------------------------------------------
let grid = [
  [{}, {}, {}],
  [{}, {}, {}],
  [{}, {}, {}],
];

grid[0][0].target = document.getElementById("p00");
grid[0][1].target = document.getElementById("p01");
grid[0][2].target = document.getElementById("p02");

grid[1][0].target = document.getElementById("p10");
grid[1][1].target = document.getElementById("p11");
grid[1][2].target = document.getElementById("p12");

grid[2][0].target = document.getElementById("p20");
grid[2][1].target = document.getElementById("p21");
grid[2][2].target = document.getElementById("p22");

// Other variable
let whosTurn;
let displayScore = [0, 0];
let pattern = [
  ["00", "01", "02"],
  ["10", "11", "12"],
  ["20", "21", "22"],
  ["00", "10", "20"],
  ["01", "11", "21"],
  ["02", "12", "22"],
  ["00", "11", "22"],
  ["20", "11", "02"],
];
let roundNum = 0; // If round = 9, game end in tie
let strategyType;
