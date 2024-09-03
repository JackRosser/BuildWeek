const chartData = {
  data: [0, 0],
};

// array resoconto domande
const risposteCorrette = [0, 0, 0, 0];
const risposteSbagliate = [0, 0];
const totDomande = risposteCorrette.concat(risposteSbagliate);

console.log(totDomande.length);

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

valGrafico = Math.ceil((360 * sbagliate) / 100);
console.log(valGrafico);

//  inserisco i dati nelle risorse del grafico
chartData.data[0] = sbagliate;
chartData.data[1] = corrette;

// inserisco le percentuali
const percentCorrect = document.querySelectorAll(".percent");
percentCorrect[0].innerHTML = corrette + "%";
percentCorrect[1].innerHTML = sbagliate + "%";
console.log(percentCorrect[0].innerHTML);

// inserisco il resoconto domande azzeccate su tot
const resoConto = document.querySelectorAll("figcaption");
resoConto[0].innerHTML = `${risposteCorrette.length} / ${totDomande.length} questions`;
resoConto[1].innerHTML = `${risposteSbagliate.length} / ${totDomande.length} questions`;

// creazione grafico a donut
const grafico = document.getElementById("grafico");
grafico.style.background = `conic-gradient(#d20094 ${valGrafico}deg, #00ffff ${valGrafico}deg 360deg)`;

// il bottone ti porta alla pagina di feedback
const rateUs = document.getElementById("rateUs");

rateUs.addEventListener("click", () => {
  window.location.href = "feedback.html";
});
