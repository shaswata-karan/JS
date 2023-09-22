var readlineSync = require("readline-sync");
var score = 0;

function welcome() {
    var userName = readlineSync.question("What's your name? ");
    console.log("Welcome "+ userName + " to DO YOU KNOW Tanay?");
}

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    } else {
        console.log("wrong!");
    }
    console.log("current score: ", score);
    console.log("-------------")
}

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Kolkata"
}, {
  question: "My favorite superhero would be? ",
  answer: "Spiderman"
}, {
  question: "What is my age? ",
  answer: "22"
}, {
  question: "My favorite hobby? ",
  answer: "Photography"
}, {
  question: "I love to code? ",
  answer: "Sometimes"
}];

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
    console.log("YAY! You SCORED: ", score);
    console.log("Check out the other high scores");
    highScores.map(score => console.log(score.name, " : ", score.score))
}

// data of high score
var highScores = [
  {
    name: "Shaswata",
    score: 3,
  },

  {
    name: "Sunny",
    score: 2,
  },
]

welcome();
game();
showScores();