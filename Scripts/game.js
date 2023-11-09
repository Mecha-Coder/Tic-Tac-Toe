//Add grid click event
grid.forEach((sub_grid) => {
  sub_grid.forEach((data) => {
    data.target.addEventListener("click", () => {
      ClickGrid(data);
      CheckMatch();
    });
  });
});

// Script ----------------------------

function ClickGrid(data) {
  if (whosTurn) {
    // True - X turn
    data.target.innerHTML = "X";
    data.value = 1;
    whosTurn = false;

    if (rightPlayerName.innerText === "Computer") {
      boxOverlay.className = "overlay"
    }

  } else {
    // True - O turn
    data.target.innerHTML = "O";
    data.value = -1;
    whosTurn = true;

    if (rightPlayerName.innerText === "Computer") {
      boxOverlay.className = "hide"
    }
  }
  //Disable click event for that cell once clicked
  data.target.style.pointerEvents = "none";
}

function CheckMatch() {
  roundNum++;
  for (let i = 0; i < pattern.length; i++) {
    let [a, b, c] = pattern[i];
    let sum_X_O;

    sum_X_O =
      grid[a[0]][a[1]].value + grid[b[0]][b[1]].value + grid[c[0]][c[1]].value;

    if (Math.abs(sum_X_O) === 3) {
      if (sum_X_O === -3) {
        WinHandling("O", a, b, c);
        return;
      } else if (sum_X_O === 3) {
        WinHandling("X", a, b, c);
        return;
      }
    }
  }
  if (roundNum === 9) {
    TieHandling();
    return;
  }
  TurnIndicator();
  IsComsTurn();
}

function WinHandling(who_Win, a, b, c) {
  // Mark match pattern as red
  grid[a[0]][a[1]].target.style.color = "red";
  grid[b[0]][b[1]].target.style.color = "red";
  grid[c[0]][c[1]].target.style.color = "red";

  // Update score
  // Show message who win
  boxMsg.className = boxMsg.getAttribute("id");

  if (who_Win === "X") {
    displayScore[0]++;
    boxMsg.innerHTML = `${leftPlayerName.innerText} (X) win this round`;
  } else if (who_Win === "O") {
    displayScore[1]++;
    boxMsg.innerHTML = `${rightPlayerName.innerText} (O) win this round`;
  }

  UpdateScore();
  ResetGame();
}

function TieHandling() {
  boxMsg.className = boxMsg.getAttribute("id");
  boxMsg.innerHTML = "It's a tie. Nobody win";
  ResetGame();
}

function ResetGame() {
  // Disable every click event
  grid.forEach((sub_grid) => {
    sub_grid.forEach((data) => {
      data.target.style.pointerEvents = "none";
    })
  })

  iconLeft.style.pointerEvents = "none";
  iconRight.style.pointerEvents = "none";
  roundNum = 0;

  // Wait for 2s before reset
  setTimeout(() => {
    // Enable click event
    iconLeft.style.pointerEvents = "auto";
    iconRight.style.pointerEvents = "auto";

    grid.forEach((sub_grid) => {
      sub_grid.forEach((data) => {
        data.target.style.pointerEvents = "auto";
        data.target.style.color = "white";
        data.value = 0;
        data.target.innerHTML = "";
      });
    });

    //Hide message
    boxMsg.className = "hide";
    boxMsg.innerHTML = "";

    //update turn indicator
    TurnIndicator();
    IsComsTurn();
  }, 3000);
  
}
