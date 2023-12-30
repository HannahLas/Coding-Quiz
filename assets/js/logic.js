//Timer variable
var secondsLeft = 100;

var time = document.getElementById("time");

//Timer Function

// function setTime() {
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     time.textContent = secondsLeft;
//     if (currentQuestion.answer !== selectedOption) {
//       secondsLeft -= 10;
//       time.textContent = secondsLeft;
//     }

//     if (secondsLeft === 0) {
//       clearInterval(timerInterval);
//       endQuiz();
//     }
//   }, 1000);
// }

// startButton.addEventListener("click", setTime);
// Initialize the score
var scoring = { score: 0 };
var currentQuestionIndex = 0;

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

var submitButton = document.getElementById("submit");
function endQuiz() {
  document.getElementById("questions").setAttribute("style", "display:hide;");
  document.getElementById("end-screen").setAttribute("style", "display:block;");
  var finalScore = document.getElementById("final-score");
  if ((currentQuestionIndex = questionsAndAnswers.length)) {
    finalScore.textContent = scoring.score;
  }
}

submitButton.addEventListener("click", function () {
  window.location.assign("highscores.html");
});
