let button = document.getElementById("button");

let item = document.querySelector(":root");

async function getData() {
  let input = document.getElementById("inputData");
  let userName = document.getElementById("userName");
  let gender = document.getElementById("gender");
  let chance = document.getElementById("chance");

  let Name = input.value;
  button.innerText = "Finding ...";
  button.disable = true;
  try {
    let responce = await fetch(`https://api.genderize.io/?name=${Name}`);
    let data = await responce.json();
    console.log(data);

    userName.innerText = `Name : ${data.name}`;
    gender.innerText = `Gender : ${data.gender}`;
    chance.innerText = `Probability : ${Math.round(data.probability * 100)}`;
  } catch (err) {
    console.log(err);
  } finally {
    //console.log(userName);
    button.innerText = "Find";
    button.disable = false;
  }
}
