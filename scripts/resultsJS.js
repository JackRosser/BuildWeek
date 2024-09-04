const chartData = {
  data: [0, 0]
};

// quante corrette e sbagliate
let corrette = 0;
let sbagliate = 0;

// funzione che calcola la percentuale in base alle domande corrette
function calcDomande(numC, numS) {
  corrette = Math.round((numC / 6) * 100);
  sbagliate = Math.round((numS / 6) * 100);
}

calcDomande(4, 2);
//  inserisco i dati nelle risorse del grafico
chartData.data[0] = sbagliate;
chartData.data[1] = corrette;

const percentCorrect = document.querySelectorAll(".percent span");
percentCorrect[0].innerHTML = corrette + "%";
percentCorrect[1].innerHTML = sbagliate + "%";
console.log(percentCorrect[0].innerHTML);

// creazione grafico a donut
const myChart = document.getElementById("myChart");

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
