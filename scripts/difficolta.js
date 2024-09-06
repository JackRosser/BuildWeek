let quantity = document.getElementById("quantity");

const add = document.getElementById("add");
const remove = document.getElementById("remove");

add.addEventListener("click", () => {
  if (quantity.value < 10) {
    quantity.value++;
  }
});

remove.addEventListener("click", () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
});

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
