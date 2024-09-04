const promise = document.getElementById("promise");
const button = document.getElementById("buttonLuigi");
const contenitore = document.querySelector(".container");

promise.addEventListener("change", function () {
  button.disabled = !this.checked;
  if (this.checked) {
    button.classList.add("illuminated");
    button.style.cursor = "pointer";
  } else {
    button.classList.remove("illuminated");
    button.style.cursor = "not-allowed";
  }
});

button.addEventListener("click", function () {
  if (promise.checked) {
    contenitore.classList.add("hidden");
  } else {
    btn.classList.remove("illuminated");
  }
});
