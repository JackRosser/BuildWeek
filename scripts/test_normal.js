let body = document.querySelector("body");
let button = document.querySelector("button");
let numQuest = document.querySelector("#number-question");
let h1 = document.querySelector(".h1_jack");
let form = document.getElementById("box-risposte");

const questions = [
  {
    response_code: 0,
    results: [
      {
        type: "multiple",
        difficulty: "normal",
        category: "Science: Computers",
        question: "What was the name of the security vulnerability found in Bash in 2014?",
        correct_answer: "Shellshock",
        incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"]
      },
      {
        type: "multiple",
        difficulty: "normal",
        category: "Science: Computers",
        question: "What internet protocol was documented in RFC 1459?",
        correct_answer: "IRC",
        incorrect_answers: ["HTTP", "HTTPS", "FTP"]
      },
      {
        type: "multiple",
        difficulty: "normal",
        category: "Science: Computers",
        question: "Which kind of algorithm is Ron Rivest not famous for creating?",
        correct_answer: "Secret sharing scheme",
        incorrect_answers: ["Hashing algorithm", "Asymmetric encryption", "Stream cipher"]
      },
      {
        type: "multiple",
        difficulty: "normal",
        category: "Science: Computers",
        question: "What is the name of the process that sends one qubit of information using two bits of classical information?",
        correct_answer: "Quantum Teleportation",
        incorrect_answers: ["Super Dense Coding", "Quantum Entanglement", "Quantum Programming"]
      },
      {
        type: "multiple",
        difficulty: "normal",
        category: "Science: Computers",
        question: "According to DeMorgan&#039;s Theorem, the Boolean expression (AB)&#039; is equivalent to:",
        correct_answer: "A&#039; + B&#039;",
        incorrect_answers: ["A&#039;B + B&#039;A", "A&#039;B&#039;", "AB&#039; + AB"]
      },
      {
        type: "multiple",
        difficulty: "normal",
        category: "Science: Computers",
        question: "Which of these is not a layer in the OSI model for data communications?",
        correct_answer: "Connection Layer",
        incorrect_answers: ["Application Layer", "Transport Layer", "Physical Layer"]
      },
      {
        type: "multiple",
        difficulty: "normal",
        category: "Science: Computers",
        question: "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
        correct_answer: "Cheetah",
        incorrect_answers: ["Puma", "Tiger", "Leopard"]
      },
      {
        type: "multiple",
        difficulty: "normal",
        category: "Science: Computers",
        question: "Which of these Cherry MX mechanical keyboard switches is both tactile and clicky?",
        correct_answer: "Cherry MX Blue",
        incorrect_answers: ["Cherry MX Black", "Cherry MX Red", "Cherry MX Brown"]
      },
      {
        type: "boolean",
        difficulty: "normal",
        category: "Science: Computers",
        question: "DHCP stands for Dynamic Host Configuration Port.",
        correct_answer: "False",
        incorrect_answers: ["True"]
      },
      {
        type: "multiple",
        difficulty: "normal",
        category: "Science: Computers",
        question: "Who is the founder of Palantir?",
        correct_answer: "Peter Thiel",
        incorrect_answers: ["Mark Zuckerberg", "Marc Benioff", "Jack Dorsey"]
      }
    ]
  }
];

//____________________________________________________

let zonaQuestion = 0;
let risposteCorrette = 0;
let risposteSbagliate = 0;
let intervalId;

const timerElement = document.getElementById("timer");

let resetTimer = function () {
  if (intervalId) {
    clearInterval(intervalId); // Ferma il timer
  }
  timerElement.innerHTML = 60; // Resetta il timer a 60 secondi
  intervalId = setInterval(countDown, 1000); // Riavvia il conto alla rovescia
};

function caricoDomanda() {
  h1.innerText = questions[zonaQuestion].question;
  let textBox = [];
  let randomBox = [];

  let numberFooter = document.getElementById("number-question");
  let calcFooter = parseInt(zonaQuestion) + 1;
  numberFooter.innerText = calcFooter;

  form.innerHTML = ""; // Svuota le risposte precedenti

  for (let j = 0; j < questions[zonaQuestion].incorrect_answers.length; j++) {
    textBox.push(questions[zonaQuestion].incorrect_answers[j]);
  }
  textBox.push(questions[zonaQuestion].correct_answer);

  // Randomizza le risposte
  while (textBox.length) {
    let randomNum = Math.floor(Math.random() * textBox.length);
    randomBox.push(textBox.splice(randomNum, 1));
  }

  for (let i = 0; i < randomBox.length; i++) {
    let div = document.createElement("div");
    div.className = "risposte";
    let button = document.createElement("button");
    button.name = "answer";
    button.innerText = randomBox[i];
    div.appendChild(button);
    form.appendChild(div);

    // Rendi l'intero div cliccabile
    div.addEventListener("click", function (e) {
      e.preventDefault();
      handleAnswerClick(div, button.innerText);
    });
  }
}

function handleAnswerClick(divClicked, answerText) {
  clearInterval(intervalId); // Ferma il timer quando viene data una risposta

  // Controlla la risposta
  let correctAnswer = questions[zonaQuestion].correct_answer;
  let allButtons = document.querySelectorAll(".risposte");

  allButtons.forEach((div) => {
    let button = div.querySelector("button");
    if (button.innerText === correctAnswer) {
      div.style.backgroundColor = "green"; // Risposta corretta
    } else {
      div.style.backgroundColor = "red"; // Risposte sbagliate
    }
  });

  setTimeout(function () {
    zonaQuestion += 1;
    if (zonaQuestion < questions.length) {
      resetTimer(); // Reset del timer e carica la prossima domanda
      caricoDomanda();
    } else {
      clearInterval(intervalId);
      window.location.href = "Results.html";
    }
  }, 1000); // Pausa di 1 secondo prima di passare alla domanda successiva
}

// Funzione conto alla rovescia
function countDown() {
  let timeLeft = (timerElement.innerHTML -= 1);

  // Percentuale del tempo rimasto
  let percentage = (timeLeft / 60) * 100;

  // Calcola l'angolo per il conic-gradient
  let angle = (360 * percentage) / 100;

  // Aggiorna il background del cerchio, mantenendo il bordo fisso
  const conic = document.getElementById("conic");
  conic.style.background = `conic-gradient(
    #2f1f59 ${angle}deg,
    #00aaff ${angle}deg
  )`; // Lo sfondo "mangia" l'interno, lasciando il bordo azzurro

  if (timeLeft == 0) {
    zonaQuestion += 1;
    if (zonaQuestion < questions.length) {
      resetTimer();
      caricoDomanda();
    } else {
      clearInterval(intervalId);
    }
  }
}

// Avvia il primo timer e carica la prima domanda
resetTimer();
caricoDomanda();
