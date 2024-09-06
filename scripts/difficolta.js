let quantity = document.getElementById("quantity");

// button easy
const easyButton = document.getElementById("easyButton");

easyButton.addEventListener("click", () => {
  window.location.href = "easy.html";
  localStorage.setItem("quantity", quantity.value);
});

//   button normal
const normalButton = document.getElementById("normalButton");

normalButton.addEventListener("click", () => {
  window.location.href = "normal.html";
  localStorage.setItem("quantity", quantity.value);
});

//   button hard
const hardButton = document.getElementById("hardButton");

hardButton.addEventListener("click", () => {
  window.location.href = "hard.html";
  localStorage.setItem("quantity", quantity.value);
});
