document.addEventListener("DOMContentLoaded", function () {
  var userInitials =
    localStorage.getItem("userinitials") || "Please enter your initials";
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  var highscoresList = document.getElementById("highscores");

  // Displays user initials
  document.getElementById("highscores").textContent = userInitials;

  // Displays highscores in the ordered list
  if (highscoresList) {
    highscores.forEach(function (score) {
      var listItem = document.createElement("li");
      listItem.textContent = score.initials + ": " + score.score;
      highscoresList.appendChild(listItem);
    });
  } else {
    console.error("Element with id 'highscores' not found.");
  }

  // Function to use clearscore button to clear the highscores
  var clearButton = document.getElementById("clear");
  if (clearButton) {
    clearButton.addEventListener("click", function () {
      localStorage.removeItem("highscores");
      highscoresList.innerHTML = "";
    });
  }
});

//Function to store a new score to the highscore page
function addScore(initials, score) {
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  highscores.push({ initials: initials, score: score });
  localStorage.setItem("highscores", JSON.stringify(highscores));
}
