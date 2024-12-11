const second = document.getElementById("second");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour");

var put = document.querySelector("#lbl");
var bdy = document.querySelector("body");
var mode = "dark";
function Mode(){
  setTimeout(() => {
    if(mode=="dark"){
      mode = "light";
      put.style.backgroundColor = "white";
      bdy.style.backgroundColor = "black";
      bdy.style.color = "white";
    }
    else{
      mode = "dark";
      put.style.backgroundColor = "black";
      bdy.style.backgroundColor = "white";
      bdy.style.color = "black";
    }
  },200);
}

function Timer(){
  let date = new Date();
  let hours = date.getHours();
  let minuts = date.getMinutes();
  let seconds = date.getSeconds();
  let hrotation = 30 * hours + minuts / 2;

  second.style.transform = `rotate(${seconds*6}deg)`;
  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${minuts*6}deg)`;
}

setInterval(Timer, 1000);

function audio() {
  let music = new Audio("Clock.mp3");
  music.play();
}
