var API = "6425aa607240dfd31eb3b85c80849f4f";
var tmp = document.getElementById("temp");
var input = document.querySelector("#input");
var btn = document.querySelector("button");
var weather_text = document.querySelector("#weather_text");
var main = document.querySelector("#main");


async function  weather(city){
    weather_text.innerHTML = `
    <h2>Loading ...</h2>`
 var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;
 var responce = await fetch(url);
 var data = await responce.json();
 console.log(data);
 return setweather(data);
}

function setweather(data){
  //  console.log(data);
    if(data.cod == "404"){
        weather_text.innerHTML = `<h2>City Not Found</h2>`;
        return;
    }

let Ampm = "am";
let time = new Date();
let hours = time.getHours();
let minute = time.getMinutes();
let days = time.getDay();
hours < 10 ? hours = `0${hours}`: hours = hours;
minute < 10 ? minute = `0${minute}`: minute = minute;
if(hours>12){
    hours = hours-12;
    Ampm = "pm";
    hours < 10 ? hours = `0${hours}`: hours = hours;
   
}
 var day = Day[days];
main.innerHTML = ` <div id="head">
<h1 id="city"> ${data.name} </h1>
<h3>Updated a few Minutes ago</h3>
</div>
<div id="mid">
<div id="icon"><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""></div>

<div>
<h1 id="temp">${data.main.temp} °C</h1>
<h3>Feels Like : ${data.main.feels_like} °C</h3>
</div>
<div id="wind_hum">
    <div id="wind">Wind : ${data.wind.speed} Km/H</div>
    <div id="hum">Humidity : ${data.main.humidity} %</div>
</div>
</div>
<div id="chlid">
<h3 id="icon-name">${data.weather[0].main}</h3>
<h3 id="time">${day}, ${hours}:${minute} ${Ampm}</h3>
</div>
<div id="next">
<button id="btn" onclick="Next()" >Find New</button>
</div>
`
}

function searchbtn(){
    var bdy = document.querySelector("body");
    bdy.style.backgroundColor = "#0080ff";
    bdy.style.color = "white";
    weather(input.value);
}
function Next(){
    window.location.reload();
}


// Time and Day Control

const tim = document.getElementById("time");
const sec = document.getElementById("second");
const min = document.getElementById("minute");
const hor = document.getElementById("hour");

const Day = [
    "Sunday",  "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
];

function Date_Time_Controle(){
    let time = new Date();
    let hours = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let days = time.getDay();
    var day = Day[days];
    document.getElementById("day").innerHTML = `Day : ${day}`;
    let doc = document.querySelector("#evenmor");
    let Time = document.querySelector("#time");
    
    hours < 10 ? hours = `0${hours}`: hours = hours;
    minute < 10 ? minute = `0${minute}`: minute = minute;
    second < 10 ? second = `0${second}`: second = second;
    
     if(hours>2 && hours<12){
        doc.innerHTML = "Good Morning";
        tim.innerHTML = `Time :`;
        hor.innerHTML = ` ${hours} :`;min.innerHTML = `${minute} : `;sec.innerHTML = `${second}`;
    }
    else if(hours == 12){
        doc.innerHTML = "Good Noon";
        tim.innerHTML = `Time :`;
        hor.innerHTML = ` ${hours} :`;min.innerHTML = `${minute} : `;sec.innerHTML = `${second}`;
    }
    else if(hours>12 && hours<=16){
        doc.innerHTML = "Good AfterNoon";
        tim.innerHTML = `Time :`;
        hor.innerHTML = ` ${hours} :`;min.innerHTML = `${minute} : `;sec.innerHTML = `${second}`;
    }
    else if(hours>16 && hours<21){
        doc.innerHTML = "Good Evening";
        tim.innerHTML = `Time :`;
        hor.innerHTML = ` ${hours} :`;min.innerHTML = `${minute} : `;sec.innerHTML = `${second}`;
    }
    else{
        doc.innerHTML = "Good Night"; tim.innerHTML = `Time :`;
        hor.innerHTML = ` ${hours} :`;min.innerHTML = `${minute} : `;sec.innerHTML = `${second}`;
    }
    
}

setInterval(Date_Time_Controle, 1000);

