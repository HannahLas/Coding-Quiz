# Coding-Quiz

## My sixth challenge with the edX Bootcamp

I completed this task for the sixth challenge in my Skills Boot Camp in Front-End Web Development. I was tasked with creating code for a coding quiz using JavsScript. I was provided with HTML starter code and then needed to write three pages of JavaScript to dynamically alter the webpage in the browser.  This task aimed to use the JavaScript skills I had learned during the week. I traversed the DOM, used timers, attributes, event listeners and was able to use local storage to store high scores in the browser. 

## Usage
Click on the Start Quiz button to start the quiz. Read the question and answer the correct option from the choices provided.  Below is a link to a screenshot that shows you an example of a question you will see during the quiz. 

[linktoscreenshot](assets/screenshot.png)

Here is a link to the final webpage: https://hannahlas.github.io/Coding-Quiz

## Acknowledgements

I used Chat GPT to help me see the link between storing the initals for the high scores in the logic page and then displaying them on the highscores page. In particular, I used chat GPT to write this code:
document.addEventListener("DOMContentLoaded", function () {
  var userInitials =
    localStorage.getItem("userinitials") || "Please enter your initials";
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  var highscoresList = document.getElementById("highscores");

I learnt that "DOMContentLoaded" is an event which I had not learnt about before.  



## License
MIT License

Copyright (c) 2023 Hannah Lassey]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
