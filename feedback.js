function insertStar() {
  //Individuo il div dove posizionare le stelle
  let src = document.getElementById("star-container");
  // Ciclo per 10 stelle
  for (let i = 0; i < 10; i++) {
    // Creo un tag immagine
    let img = document.createElement("img");
    // Gli applico il path della mia stella e le proprietà volute
    img.src = "assets/img/star.svg";
    img.width = 90;
    img.height = 80;
    img.id = "star" + i;
    img.style.filter = "opacity(0.1)";
    // Aggiungo l'evento mouseover per cambiare l'opacità
    img.addEventListener("mouseover", colorStar);

    //     // Aggiungo l'evento mouseout per resettare l'opacità
    img.addEventListener("mouseout", resetStars);

    //     // La appendo all'HTML
    src.appendChild(img);
  }
}

function colorStar(event) {
  //   // Pesco l'id dell'immagine su cui sono posizionato
  let starId = event.target.id;
  //   // Estraggo l'indice della stella (es: "star3" -> 3)
  let starIndex = parseInt(starId.replace("star", ""));

  //  // Ciclo tutte le stelle fino a quella selezionata
  for (let i = 0; i <= starIndex; i++) {
    let star = document.getElementById("star" + i);
    star.style.filter = "opacity(1)";
  }
}

function resetStars() {
  //   // Ripristina tutte le stelle all'opacità iniziale
  for (let i = 0; i < 10; i++) {
    let star = document.getElementById("star" + i);
    star.style.filter = "opacity(0.1)";
  }
}

// // Assegno la funzione insertStar all'evento onload senza eseguirla immediatamente
window.onload = insertStar;
