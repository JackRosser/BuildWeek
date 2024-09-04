// in base alla lunghezza dell'array notiamo il tot domande e tot risposte corrette/sbagliata
// let risposteCorrette = [0, 0, 0, 0];
// let risposteSbagliate = [0, 0];

const risposteCorrette = localStorage.getItem("risposteCorrette");
const risposteSbagliate = localStorage.getItem("risposteSbagliate");
console.log(parseInt(risposteCorrette));
console.log(parseInt(risposteSbagliate));

// tot domande/round
const totDomande = localStorage.getItem("totDomande");

// quante corrette e sbagliate
let corrette = 0;
let sbagliate = 0;

// funzione che calcola la percentuale in base alle domande corrette
function calcDomande(numC, numS) {
  corrette = ((numC / totDomande) * 100).toFixed(1);
  sbagliate = ((numS / totDomande) * 100).toFixed(1);
}
calcDomande(risposteCorrette, risposteSbagliate);

calcDomande(4, 2);
//  inserisco i dati nelle risorse del grafico
chartData.data[0] = sbagliate;
chartData.data[1] = corrette;

const percentCorrect = document.querySelectorAll(".percent span");
percentCorrect[0].innerHTML = corrette + "%";
percentCorrect[1].innerHTML = sbagliate + "%";
console.log(percentCorrect[0].innerHTML);

// inserisco il resoconto domande azzeccate su tot nel testo sotto la percentuale
const resoConto = document.querySelectorAll("figcaption");
resoConto[0].innerText = `${risposteCorrette}/${totDomande} questions`;
resoConto[1].innerText = `${risposteSbagliate}/${totDomande} questions`;

new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        data: chartData.data,
        backgroundColor: ["#C2128D", "#00FFFF"],
        borderWidth: 0
      }
    ]
  },
  options: {
    responsive: false,
    maintainAspectRatio: false, // Rende il grafico più flessibile per l'adattamento alle dimensioni del contenitore
    cutout: "70%", // Dimensione del buco interno per fare il donut
    plugins: {
      tooltip: {
        enabled: false // Disabilita il tooltip
      }
    }
  }
});

// il bottone ti porta alla pagina di feedback
const rateUs = document.getElementById("rateUs");

rateUs.addEventListener("click", () => {
  window.location.href = "feedback.html";
});
