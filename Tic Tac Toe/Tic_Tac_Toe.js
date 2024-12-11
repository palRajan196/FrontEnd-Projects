var input = document.querySelectorAll(".box");
var gameover = document.querySelector("#game");
var Turn = document.querySelector("#turn");
var Tune = document.getElementById("tune");
var Success = document.getElementById("success");
var turn = true;
var chance = "X";

var win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
Turn.innerText = `Turn ${chance}`;
chance = "0";

input.forEach((element) => {
  element.addEventListener("click", () => {
    Turn.innerText = `Turn ${chance}`;
    Tune.play();
    if (turn) {
      element.innerText = "X";
      turn = false;
      chance = "X";
      element.disabled = true;
    } else {
      element.innerText = "0";
      turn = true;
      chance = "0";
      element.disabled = true;
    }
    checkwin(element);
  });
});

function checkwin(val) {
  win.forEach((ele) => {
    let elem1 = input[ele[0]].innerText;
    let elem2 = input[ele[1]].innerText;
    let elem3 = input[ele[2]].innerText;
    if (elem1 != "" && elem1 != "" && elem1 != "") {
      if (elem1 == elem2 && elem1 == elem3) {
        document.getElementById("win").innerText = "WINNER " + val.innerText;
        input.forEach((element) => {
          element.disabled = true;
        });
        Success.play();
        gameover.style.opacity = 0.8;
        Turn.innerText = `Game Over !!`;
      }
    }
  });
}

function newgame() {
  input.forEach((element) => {
    element.innerText = "";
    document.getElementById("win").innerText = "";
    element.disabled = false;
  });
  gameover.style.opacity = 1;
  turn = true;
  chance = "X";
  Turn.innerText = `Turn ${chance}`;
  chance = "0";
}
