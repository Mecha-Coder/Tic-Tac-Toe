// "Clicked" Event listener
buttonPlay.addEventListener("click", () => {
  ClickPlay();
});
buttonVsCom.addEventListener("click", () => {
  ClickCom();
});
buttonVsPly.addEventListener("click", () => {
  ClickPlayer();
});
iconLeft.addEventListener("click", () => {
  ClickHome();
});
iconRight.addEventListener("click", () => {
  ClickReset();
});
// Script
function ClickPlay() {
  //Hide
  buttonPlay.className = "hide";

  // Show
  boxChoose.className = boxChoose.getAttribute("id");

  // Add style
  imgTitle.classList.add("img-shrink");

  //Animation
  setTimeout(() => {
    boxChoose.style.opacity = 1;
  }, 20);
}

function ClickCom() {
  StartGame();
  leftPlayerName.innerHTML = "Player";
  rightPlayerName.innerHTML = "Computer";
  IsComsTurn();
}

function ClickPlayer() {
  StartGame();
  leftPlayerName.innerHTML = "Player-1";
  rightPlayerName.innerHTML = "Player-2";
}

function ClickHome() {
  //Hide
  // Nothing

  // Show
  coverPause.className = coverPause.getAttribute("id");

  msgAlert.innerHTML = `<div class=style-msg>
  Are you sure you want to exit the game?
  <div class=style-button>
    <button onclick="BackHome(true)">Yes</button> 
    <button onclick="BackHome(false)">No</button>
  </div></div>`;

  // Disable click event
  iconLeft.style.pointerEvents = "none";
  iconRight.style.pointerEvents = "none";
}

function ClickReset() {
  coverPause.className = coverPause.getAttribute("id");

  msgAlert.innerHTML = `<div class=style-msg>
  This action will reset score to zero(0). Proceed?
  <div class=style-button>
    <button onclick="RefreshGame(true)">Yes</button> 
    <button onclick="RefreshGame(false)">No</button>
  </div></div>`;

  // Disable click event
  iconLeft.style.pointerEvents = "none";
  iconRight.style.pointerEvents = "none";
}

// Sub-script

function StartGame() {
  //Hide
  boxChoose.className = "hide";

  //Show
  boxStatus.className = boxStatus.getAttribute("id");
  boxGame.className = boxGame.getAttribute("id");
  iconLeft.className = iconLeft.getAttribute("id");
  iconRight.className = iconRight.getAttribute("id");

  // Animation
  setTimeout(() => {
    boxStatus.style.opacity = 1;
    boxGame.style.opacity = 1;
    iconLeft.style.opacity = 1;
    iconRight.style.opacity = 1;
  }, 20);

  whosTurn = Math.random() < 0.5; // Anyone can start first (50%-50% possibility)
  UpdateScore();

  setTimeout(() => {
    TurnIndicator();
  }, 300);

  boxOverlay.className = "overlay";
  setTimeout(()=> {boxOverlay.className = "hide";},800)
}

function UpdateScore() {
  leftScore.innerText = displayScore[0];
  rightScore.innerText = displayScore[1];
}

function TurnIndicator() {
  if (whosTurn) {
    // Turn - X turn
    bgLeftCorner.style.backgroundColor = "maroon";
    bgLeftStatus.style.backgroundColor = "maroon";

    bgRightCorner.style.backgroundColor = "transparent";
    bgRightStatus.style.backgroundColor = "transparent";
  } else {
    // False - O turn
    bgLeftCorner.style.backgroundColor = "transparent";
    bgLeftStatus.style.backgroundColor = "transparent";

    bgRightCorner.style.backgroundColor = "maroon";
    bgRightStatus.style.backgroundColor = "maroon";
  }
}

function BackHome(value) {
  if (value) {
    Initialize();
  } else {
    coverPause.className = "hide";
    msgAlert.innerHTML = "";
    iconLeft.style.pointerEvents = "auto";
    iconRight.style.pointerEvents = "auto";
  }
}

function RefreshGame(value) {
  if (value) {
    // Hide alert messafe
    coverPause.className = "hide";
    msgAlert.innerHTML = "";

    // Enable click event
    iconLeft.style.pointerEvents = "auto";
    iconRight.style.pointerEvents = "auto";

    //Reset grid
    grid.forEach((sub_grid) => {
      sub_grid.forEach((data) => {
        data.target.style.pointerEvents = "auto";
        data.target.style.color = "white";
        data.value = 0;
        data.target.innerHTML = "";
      });
    });

    // Reset score
    displayScore = [0, 0];
    roundNum = 0;

    UpdateScore();
  } else {
    coverPause.className = "hide";
    msgAlert.innerHTML = "";
    iconLeft.style.pointerEvents = "auto";
    iconRight.style.pointerEvents = "auto";
  }
}

function IsComsTurn() {
  if ((rightPlayerName.innerHTML === "Computer") && (!whosTurn) && (roundNum<=8)) {

    setTimeout(() => {
      let cell = ComMove();
      ClickGrid(grid[cell[0]][cell[1]]);
      CheckMatch();
    }, 600);
  }
}
