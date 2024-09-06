// button easy
const easyButton = document.getElementById("easyButton");

easyButton.addEventListener("click", () => {
  window.location.href = "easy.html";
});

//   button normal
const normalButton = document.getElementById("normalButton");

normalButton.addEventListener("click", () => {
  window.location.href = "normal.html";
});

//   button hard
const hardButton = document.getElementById("hardButton");

hardButton.addEventListener("click", () => {
  window.location.href = "hard.html";
});

const Quanti = document.getElementById("quantity");
console.log(Quanti.value);
