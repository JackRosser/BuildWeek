let body = document.querySelector("body");
let button = document.querySelector("button");
let numQuest = document.querySelector("#number-question");
let h1 = document.querySelector(".h1_jack");
let form = document.getElementById("box-risposte");

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

//____________________________________________________

let zonaQuestion = 0;
let endFooter = document.getElementById("endfooter");

let totDomande = questions.length;
localStorage.setItem("totDomande", totDomande);
endFooter.innerText = totDomande;

// definisco la funzione per caricare la domanda

let caricoDomanda = function () {
  h1.innerText = questions[zonaQuestion].question;
  let textBox = [];
  let randomBox = [];

  // numero nel footer
  let numberFooter = document.getElementById("number-question");
  let calcFooter = parseInt(zonaQuestion) + parseInt(1);
  numberFooter.innerText = calcFooter;
  // Svuoto il form delle risposte precedenti
  form.innerHTML = "";

  //pusho nel contenitore vuoto il testo delle risposte non corrette
  for (let j = 0; j < questions[zonaQuestion].incorrect_answers.length; j++) {
    textBox.push(questions[zonaQuestion].incorrect_answers[j]);
  }
  // pusho la risposta corretta
  textBox.push(questions[zonaQuestion].correct_answer);

  // riempio a randombox con posizioni casuali delle domande

  for (let i = 0; i < textBox.length; i++) {
    let randomNum = Math.floor(Math.random() * textBox.length);
    let removed = textBox.splice(randomNum, 1);
    randomBox.push(removed);
    i--;
  }

  for (let i = 0; i < randomBox.length; i++) {
    let div = document.createElement("div");
    div.className = "risposte";
    let button = document.createElement("button");
    button.name = "answer";
    button.innerText = randomBox[i];
    button.className = "risposta_base";
    div.appendChild(button);
    form.appendChild(div);
  }
};

//scateno la funzione
// caricoDomanda();
// Funzione per resettare il timer e riavviarlo
function resetTimer() {
  if (intervalId) {
    clearInterval(intervalId);
  }
  timerElement.innerHTML = 60; // Imposta di nuovo il timer a 60 secondi
  intervalId = setInterval(countDown, 1000); // Riavvia il timer
  caricoDomanda();
}

// Funzione che gestisce il conto alla rovescia
function countDown() {
  timerElement.innerHTML -= 1;

  const valTimer = (timerElement.innerHTML / 60) * 100;

  const conic = document.getElementById("conic");
  conic.style.background = `conic-gradient(from 360deg at 50% 50%, #936799 ${100 - valTimer}%, #073aff00 ${
    100 - valTimer
  }%), radial-gradient(75% 75% at 50% 50%, #00ffffff 0%, #00ffffff 100%)`;

  if (timerElement.innerHTML == 0) {
    zonaQuestion += 1;
    if (zonaQuestion < questions.length) {
      caricoDomanda();
    } else {
      alert("Hai completato tutte le domande!");
      clearInterval(intervalId);
    }
  }
}

// Carica la prima domanda
caricoDomanda();
// qui inizia la parte relativa alla raccolta dati del form

let risposteCorrette = 0;
let risposteSbagliate = 0;

//______________________________
form.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.preventDefault();

    if (e.target.innerText === questions[zonaQuestion].correct_answer) {
      risposteCorrette += 1;
      console.log(risposteCorrette);
    } else {
      risposteSbagliate += 1;
    }

    // Verifica la risposta
    let div = document.getElementsByClassName("risposta_base");
    let divArray = Array.from(div);
    for (let j = 0; j < divArray.length; j++) {
      if (divArray[j].innerText === questions[zonaQuestion].correct_answer) {
        divArray[j].classList.add("risposta_corretta");
      } else {
        divArray[j].classList.add("risposta_incorretta");
      }
    }

    setTimeout(function () {
      zonaQuestion += 1;
      if (zonaQuestion < questions.length) {
        caricoDomanda(); // Ricarica la prossima domanda
      } else {
        localStorage.setItem("risposteCorrette", risposteCorrette);
        localStorage.setItem("risposteSbagliate", risposteSbagliate);
        window.location.href = "Results.html";
      }
    }, 1000); // 1 secondo di pausa
  }
});

// let timer = 1;
// if (timer === 1) {
//   zonaQuestion += 1;
//   caricoDomanda();
// }

// AREA DEL TIMER

// questa funzione richiama un'altra funzione a intervalli di tempo(1000 = 1sec)
let intervalId = setInterval(countDown, 1000);

//   questa funzione modifica il timer
function countDown() {
  const timer = document.getElementById("timer");
  timer.innerHTML -= 1;

  // grafico che cambia nel tempo
  const valTimer = (timer.innerHTML / 60) * 100;

  const conic = document.getElementById("conic");
  conic.style.background = `conic-gradient(from 360deg at 50% 50%, #936799 ${100 - valTimer}%, #073aff00 ${
    100 - valTimer
  }%), radial-gradient(75% 75% at 50% 50%, #00ffffff 0%, #00ffffff 100%)`;

  // questo if controlla a che punto è il timer, appuna arriva a 0 con la funzione clearInterval() stoppa la funzionee setIterval()
  if (timer.innerHTML == 0) {
    zonaQuestion += 1;
    clearInterval(intervalId);
    caricoDomanda();
    //   qui ci dovrebbe andare la parte che nel caso in cui il timer va a 0, ti porta al prossimo round
  }
}
