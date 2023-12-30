// An array of objects that contain questions and options as properties.
var questionsAndAnswers = [
  {
    question: "Which index do arrays start at in JavaScript?",
    options: ["1", "0", "2", "10"],
    answer: "0",
  },
  {
    question: "Which method merges two or more arrays?",
    options: [".merge", ".add", ".concat", ".push"],
    answer: ".concat",
  },
  {
    question:
      "How can you create an HTML element through the DOM in JavaScript?",
    options: [
      ".newElement",
      ".createElement",
      "#createElement",
      "create(element)",
    ],
    answer: ".createElement",
  },
  {
    question:
      "Which method will add an item to the end of an array and return a new length?",
    options: [".pop", ".add", ".push", ".more"],
    answer: ".push",
  },
  {
    question:
      "Which method will add an item to the end of an array and return a new length?",
    options: [".pop", ".add", ".push", ".more"],
    answer: ".push",
  },
  {
    question:
      "Which method will loop over an array, passing each item into a callback function provided?",
    options: [".pop", ".forEach", ".push", ".more"],
    answer: ".forEach",
  },
  {
    question:
      "Which method will return a copy of an orignal array without modifying the original array?",
    options: [".copy", ".return", ".duplicate", ".slice"],
    answer: ".slice",
  },
  {
    question: "Which method will change an array into strings joined together?",
    options: [".string", ".return", ".join", ".slice"],
    answer: ".join",
  },
];

// Locates the HTML IDs and stores them in a variable.
var startButton = document.getElementById("start");
var questionTitle = document.getElementById("question-title");
var options = document.getElementById("choices");

var currentQuestionIndex = 0;

//Ensures the user can see the question and override the CSS styling that was set to hide.

function startQuiz() {
  document.getElementById("questions").setAttribute("style", "display:block;");
  showQuestion();
}
function showQuestion() {
  var currentQuestion = questionsAndAnswers[currentQuestionIndex];

  questionTitle.textContent = currentQuestion.question;

  options.innerHTML = "";

  function optionClick(option) {
    return function () {
      scoring.checkAnswer(option);

      showNextQuestion();
    };
  }

  currentQuestion.options.forEach(function (option, index) {
    var button = document.createElement("button");
    button.textContent = option;

    button.addEventListener("click", optionClick(option));

    options.appendChild(button);
  });
}

function showNextQuestion() {
  currentQuestionIndex + 1;

  if (currentQuestionIndex < questionsAndAnswers.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

//Event Listener to start the quiz when clicking the start button
startButton.addEventListener("click", startQuiz);
