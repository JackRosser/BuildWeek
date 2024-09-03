let body = document.querySelector("body");
let button = document.querySelector("button");
let numQuest = document.querySelector("#number-question");
let h1 = document.querySelector("h1");
let form = document.getElementById("box-risposte");

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"]
  }
];

//____________________________________________________

let i = 0;
h1.innerText = questions[i].question;
let textBox = [];
let randomBox = [];

//pusho nel contenitore vuoto il testo delle risposte non corrette
for (let j = 0; j < questions[i].incorrect_answers.length; j++) {
  textBox.push(questions[i].incorrect_answers[j]);
}
// pusho la risposta corretta
textBox.push(questions[i].correct_answer);

// riempio a randombox con posizioni casuali delle domande

for (let i = 0; i < textBox.length; i++) {
  let randomNum = Math.floor(Math.random() * textBox.length);
  let removed = textBox.splice(randomNum, 1);
  randomBox.push(removed);
  i--;
}

// genero le risposte in posizioni random pescando dal randomBox
for (let i = 0; i < randomBox.length; i++) {
  let div = document.createElement("div");
  div.className = "risposte";
  let button = document.createElement("button");
  button.type = "submit";
  button.innerText = randomBox[i];
  div.appendChild(button);
  form.appendChild(div);
}
