Initialize();

function Initialize() {
  //Show
  buttonPlay.className = buttonPlay.getAttribute("id");

  // Hide -----------------------------------------------
  iconLeft.className = "hide";
  iconRight.className = "hide";

  boxChoose.className = "hide";

  boxStatus.className = "hide";
  boxGame.className = "hide";

  boxMsg.className = "hide";
  coverPause.className = "hide";

  boxOverlay.className = "hide"

  //Reset state ----------------------------------------
  leftPlayerName.innerHTML = "";
  leftScore.innerHTML = "";

  rightPlayerName.innerHTML = "";
  rightScore.innerHTML = "";

  msgAlert.innerHTML = "";
  boxMsg.innerHTML = "";

  grid.forEach((sub_grid) => {
    sub_grid.forEach((data) => {
      data.target.innerHTML = "";
      data.target.style.pointerEvents = "auto";
      data.value = 0;
    });
  });

  displayScore = [0, 0];
  roundNum = 0;

  //Remmove style ------------------------------------
  imgTitle.classList.remove("img-shrink");

  // Reset opacity ----------------------------------
  iconLeft.style.opacity = 0;
  iconRight.style.opacity = 0;
  boxChoose.style.opacity = 0;
  boxStatus.style.opacity = 0;
  boxGame.style.opacity = 0;

  //Make background tranparent-----------------------
  bgLeftCorner.style.backgroundColor = "transparent";
  bgLeftStatus.style.backgroundColor = "transparent";

  bgRightCorner.style.backgroundColor = "transparent";
  bgRightStatus.style.backgroundColor = "transparent";

  //Enable click event
  iconLeft.style.pointerEvents = "auto";
  iconRight.style.pointerEvents = "auto";

}
