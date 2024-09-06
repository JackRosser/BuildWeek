let selectedStars = -1;

function insertStar() {
  let src = document.getElementById("star-container");

  for (let i = 0; i < 10; i++) {
    let img = document.createElement("img");

    img.src = "assets/img/star.svg";
    img.width = 75;
    img.height = 65;
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

function submitFeedback(event) {
  event.preventDefault();

  const feedbackText = document.getElementById("text").value;
  const feedbackDiv = document.createElement("div");
  const mainContent = document.getElementById("center");

  if (selectedStars <= 4) {
    feedbackDiv.style.backgroundColor = "red";
    feedbackDiv.style.color = "white";
    feedbackDiv.style.padding = "1rem";
    feedbackDiv.style.marginTop = "2rem";
    feedbackDiv.innerText = "Ci dispiace per la tua bassa valutazione, faremo del nostro meglio per migliorare";
  } else {
    feedbackDiv.style.backgroundColor = "green";
    feedbackDiv.style.color = "white";
    feedbackDiv.style.padding = "1rem";
    feedbackDiv.style.marginTop = "2rem";
    feedbackDiv.innerText = "Grazie per il tuo feedback";
  }

  mainContent.appendChild(feedbackDiv);

  setTimeout(() => {
    window.location.href = "welcome.html";
  }, 2000);
}
