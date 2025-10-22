let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");
let clear = document.getElementById("clear");

let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("div");

add.addEventListener("click", () => {
  result.value = parseInt(num1.value) + parseInt(num2.value);
});
sub.addEventListener("click", () => {
  result.value = parseInt(num1.value) - parseInt(num2.value);
});
mul.addEventListener("click", () => {
  result.value = parseInt(num1.value) * parseInt(num2.value);
});
div.addEventListener("click", () => {
  result.value = parseInt(num1.value) / parseInt(num2.value);
});
clear.addEventListener("click", () => {
  result.value = "";
});
