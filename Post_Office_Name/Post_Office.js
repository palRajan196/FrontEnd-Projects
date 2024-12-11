const postData = document.getElementById("PostData");
const inputData = document.getElementById("inputData");

async function PostOffice() {
  if (postData.innerHTML != "") {
    Refresh();
  }
  const Zip = inputData.value;
  const url = `https://api.postalpincode.in/pincode/${Zip}`;
  const data = await fetch(url);
  const reponce = await data.json();
  //    console.log(reponce[0].PostOffice);
  const result = reponce[0].PostOffice;
  let div = document.createElement("div");
  result.forEach((item, index) => {
    console.log(item.Name);
    let li = document.createElement("li");
    li.innerText = `${index + 1}. ${item.Name}`;
    div.appendChild(li);
  });
  postData.appendChild(div);
}

function Refresh() {
  postData.innerText = "";
}
