// in base alla lunghezza dell'array notiamo il tot domande e tot risposte corrette/sbagliata
// let risposteCorrette = sessionStorage.getItem("risposteCorrette");
// let risposteSbagliate = sessionStorage.getItem("risposteSbagliate");

console.log(risposteCorrette);
console.log(risposteSbagliate);

// tot domande/round
const totDomande = risposteCorrette.concat(risposteSbagliate);

// quante corrette e sbagliate
let corrette = 0;
let sbagliate = 0;
let valGrafico = 0;

// funzione che calcola la percentuale in base alle domande corrette
function calcDomande(numC, numS) {
  corrette = ((numC / totDomande.length) * 100).toFixed(1);
  sbagliate = ((numS / totDomande.length) * 100).toFixed(1);
}
calcDomande(risposteCorrette.length, risposteSbagliate.length);

// ci calcoliamo il valore da inserire per modificare il grafico
valGrafico = Math.ceil((360 * sbagliate) / 100);
console.log(valGrafico);

// inserisco i valori percentuali nel testo
const percentCorrect = document.querySelectorAll(".percent");
percentCorrect[0].innerText = corrette + "%";
percentCorrect[1].innerText = sbagliate + "%";
console.log(percentCorrect[0].innerText);

// inserisco il resoconto domande azzeccate su tot nel testo sotto la percentuale
const resoConto = document.querySelectorAll("figcaption");
resoConto[0].innerText = `${risposteCorrette.length}/${totDomande.length} questions`;
resoConto[1].innerText = `${risposteSbagliate.length}/${totDomande.length} questions`;

// creazione grafico a donut in base alle percentuale domande
const grafico = document.getElementById("grafico");
grafico.style.background = `conic-gradient(#d20094 ${valGrafico}deg, #00ffff ${valGrafico}deg 360deg)`;

// se non ottieni almeno il 60% di risposte corrette non passi l'esame
if (corrette < 60) {
  console.log("non hai passato l'esame");
  const titleArticle = document.querySelector("#textIntoG h5 span");
  titleArticle.innerText = `Mission Failed Successfully!`;

  const textArticle = document.querySelectorAll("#textIntoG p");
  textArticle[0].innerText = `You didn't pass the exam, try again to get the certificate!`;
  textArticle[1].innerText = ``;
}

// il bottone ti porta alla pagina di feedback
const rateUs = document.getElementById("rateUs");

rateUs.addEventListener("click", () => {
  window.location.href = "feedback.html";
});
