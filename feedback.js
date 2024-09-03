let selectedStars = -1;

function insertStar() {
  let src = document.getElementById("star-container");

  for (let i = 0; i < 10; i++) {
    let img = document.createElement("img");

    img.src = "assets/img/star.svg";
    img.width = 90;
    img.height = 80;
    img.id = "star" + i;
    img.style.filter = "opacity(0.1)";

    img.addEventListener("mouseover", colorStar);
    img.addEventListener("mouseout", resetStars);
    img.addEventListener("click", selectStars);
    src.appendChild(img);
  }
}

function colorStar(event) {
  let starId = event.target.id;
  let starIndex = parseInt(starId.replace("star", ""));
  for (let i = 0; i <= starIndex; i++) {
    let star = document.getElementById("star" + i);
    star.style.filter = "opacity(1)";
  }
}
function resetStars() {
  for (let i = 0; i < 10; i++) {
    let star = document.getElementById("star" + i);
    if (i > selectedStars) {
      star.style.filter = "opacity(0.1)";
    }
  }
}

function selectStars(event) {
  let starId = event.target.id;
  let starIndex = parseInt(starId.replace("star", ""));
  selectedStars = starIndex;
  for (let i = 0; i <= starIndex; i++) {
    let star = document.getElementById("star" + i);
    star.style.filter = "opacity(1)";
  }
}

window.onload = insertStar;
