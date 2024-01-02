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
var currentQuestion = [""];

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

  //Function to create buttons from the array options
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

// Event Listener to start the quiz when clicking the start button
startButton.addEventListener("click", function () {
  selectedOption = ""; // Reset the selected option
  startQuiz();
  setTime(selectedOption);
});

//Timer variable
var secondsLeft = 100;
var time = document.getElementById("time");

//Timer Function (The 10 second penalty is not working)
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = secondsLeft;
    if (!currentQuestion.options.includes(selectedOption)) {
      secondsLeft -= 10;
      time.textContent = secondsLeft;
    }
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

//Event Listener to start the timer when the quiz starts
startButton.addEventListener("click", setTime);

var scoring = { score: 0 };
var currentQuestionIndex = 0;

// Function to add a new score to local storage
function addScore(initials, score) {
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  highscores.push({ initials: initials, score: score });
  localStorage.setItem("highscores", JSON.stringify(highscores));
}

//Scoring function to add to the total score if questions are answered correctly
scoring.checkAnswer = function (selectedOption) {
  var currentQuestion = questionsAndAnswers[currentQuestionIndex];

  if (currentQuestion && currentQuestion.answer === selectedOption) {
    scoring.score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questionsAndAnswers.length) {
    showQuestion();
  } else {
    endQuiz();
  }
};

//Function to end the quiz when the quesitions are finished. Manipulates the CSS so the inital form can be seen.
function endQuiz() {
  document.getElementById("questions").setAttribute("style", "display: none;");
  document
    .getElementById("end-screen")
    .setAttribute("style", "display: block;");
  var finalScore = document.getElementById("final-score");
  if (currentQuestionIndex === questionsAndAnswers.length) {
    finalScore.textContent = scoring.score;
  }

  // Retrieves the entered initials
  var initials = document.getElementById("initials").value;

  // Adds the score to local storage
  addScore(initials, scoring.score);
}

document.getElementById("submit").addEventListener("click", function () {
  // Gets the entered initials
  var initials = document.getElementById("initials").value;

  // Stores the initials in localStorage
  localStorage.setItem("userinitials", initials);

  // Redirects to the highscores webpage
  window.location.href = "highscores.html";
});
