var Game = document.getElementById("game");
var Bluecar = document.getElementById("bluecar");
var Bluecar2 = document.getElementById("bluecar2");
var racercar = document.getElementById("racercar");
var Tune = document.getElementById("tune");
var Success = document.getElementById("sucess");
var Over = document.getElementById("over2");
var Score = document.getElementById("score");
var Result = document.getElementById("result");
Bluecar.innerHTML = " ";
var count = 0;
var leftvalue;
Bluecar.addEventListener("animationiteration", function () {
  leftvalue = Math.floor(Math.random() * 4) * 105;
  Bluecar.style.left = leftvalue + "px";
  var color = Math.floor(Math.random() * 10) * 100;
  Bluecar2.style.filter = `hue-rotate(${color}deg)`;
  count++;
});

setTimeout(() => {
  Bluecar2.addEventListener("animationiteration", function () {
    let leftvalue2;
    if (leftvalue == 315) {
      leftvalue2 = 0;
    } else {
      leftvalue2 = leftvalue + 105;
    }

    var colr = Math.floor(Math.random() * 10) * 100;
    console.log(leftvalue2);
    Bluecar2.style.filter = `hue-rotate(${colr}deg)`;
    Bluecar2.style.left = leftvalue2 - 70 + "px";
  });
}, 100);

window.addEventListener("keydown", function (e) {
  if (e.keyCode == "39") {
    Tune.play();
    let leftright = parseInt(
      window.getComputedStyle(racercar).getPropertyValue("left")
    );
    console.log(leftright);
    if (leftright < 270) racercar.style.left = leftright + 105 + "px";
  }
  if (e.keyCode == "37") {
    Tune.play();
    let leftright = parseInt(
      window.getComputedStyle(racercar).getPropertyValue("left")
    );
    console.log(leftright);
    if (leftright > 0) racercar.style.left = leftright - 105 + "px";
  }
  if (e.keyCode == "38") {
    //    alert("working");
    Tune.play();
    let topdown = parseInt(
      window.getComputedStyle(racercar).getPropertyValue("top")
    );
    if (topdown > -90) racercar.style.top = topdown - 50 + "px";
  }
  if (e.keyCode == "40") {
    //    alert("working");
    Tune.play();
    let topdown = parseInt(
      window.getComputedStyle(racercar).getPropertyValue("top")
    );
    if (topdown < 250) racercar.style.top = topdown + 50 + "px";
  }
});

setInterval(() => {
  var bluecarLeft = parseInt(
    window.getComputedStyle(Bluecar).getPropertyValue("left")
  );
  var bluecarTop = parseInt(
    window.getComputedStyle(Bluecar).getPropertyValue("top")
  );
  var bluecar2Left = parseInt(
    window.getComputedStyle(Bluecar2).getPropertyValue("left")
  );
  var bluecar2Top = parseInt(
    window.getComputedStyle(Bluecar2).getPropertyValue("top")
  );
  var racercarLeft = parseInt(
    window.getComputedStyle(racercar).getPropertyValue("left")
  );
  var racercarTop = parseInt(
    window.getComputedStyle(racercar).getPropertyValue("top")
  );
  console.log(bluecar2Left);
  console.log(bluecar2Top);
  let top = racercarTop;
  let down = top + 130;

  if (
    (bluecarLeft == racercarLeft && bluecarTop > top && bluecarTop < down) ||
    (bluecar2Left + 70 == racercarLeft &&
      bluecar2Top > top &&
      bluecar2Top < down)
  ) {
    Success.play();
    Game.style.display = "none";
    Result.style.display = "block";
    Over.style.display = "block";
    Score.innerText = `Score : ${count}`;
    count = 0;
  }
}, 10);

function Next() {
  window.location.reload();
}
