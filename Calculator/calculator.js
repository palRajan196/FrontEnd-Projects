function num(elem) {
  let result = document.getElementById("result");
  result.value += elem.value;
}
function cal() {
  let result = document.getElementById("result");
  result.value = eval(result.value);
}
function allclear() {
  let result = document.getElementById("result");
  result.value = "";
}
function delete_val() {
  let result = document.getElementById("result");
  result.value = result.value.toString().slice(0, -1);
}
