const chartData = {
  data: [0, 0],
};

// quante corrette e sbagliate
let corrette = 0;
let sbagliate = 0;
let valGrafico = 0;

// funzione che calcola la percentuale in base alle domande corrette
function calcDomande(numC, numS) {
  corrette = ((numC / 6) * 100).toFixed(1);
  sbagliate = ((numS / 6) * 100).toFixed(1);
}
calcDomande(4, 2);

valGrafico = Math.ceil((360 * sbagliate) / 100);
console.log(valGrafico);

//  inserisco i dati nelle risorse del grafico
chartData.data[0] = sbagliate;
chartData.data[1] = corrette;

const percentCorrect = document.querySelectorAll(".percent");
percentCorrect[0].innerHTML = corrette + "%";
percentCorrect[1].innerHTML = sbagliate + "%";
console.log(percentCorrect[0].innerHTML);

// creazione grafico a donut
const grafico = document.getElementById("grafico");
grafico.style.background = `conic-gradient(#d20094 ${valGrafico}deg, #00ffff ${valGrafico}deg 360deg)`;
console.log(grafico);

// il bottone ti porta alla pagina di feedback
const rateUs = document.getElementById("rateUs");

rateUs.addEventListener("click", () => {
  window.location.href = "feedback.html";
});
