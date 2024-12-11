const url = `https://hindi-jokes-api.onrender.com/jokes?api_key=6691b0d5a17f97ebc09015a8f4b0`;
async function Jokes() {
  var responce = await fetch(url);
  var data = await responce.json();
  // console.log(data);
  let joke = document.getElementById("body");
  joke.innerHTML = data.jokeContent;
}
Jokes();

function Refresh() {
  window.location.reload();
}
