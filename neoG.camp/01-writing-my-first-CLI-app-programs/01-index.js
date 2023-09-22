// ex01: output your name
// console.log("Shaswata Karan");

// ex02: read the name of your user
// var readlineSync = require('readline-sync');
// var username = readlineSync.question("May I have your name? "");

// ex03: welcome your user
// ex04: do it all together
// var readlineSync = require('readline-sync');
// var username = readlineSync.question('May I have your name? ');
// console.log("Welcome " + username);

// ex05: print right/wrong if greater than 25
// var readlineSync = require('readline-sync');
// var age = readlineSync.question('Is your age greater than 25? ');
// console.log("You said " + age);
// if (age === "yes") {
//     console.log("You are Right!");
// } else {
//     console.log("You are Wrong!");
// }

// ex06: increment score if the right answer
// var readlineSync = require('readline-sync');
// var town = readlineSync.question('Is your hometown Kolkata? ');
// var score = 0;
// console.log("You said " + town);
// if (town == "yes") {
//     score = score + 1;
//     console.log("Score is: " + score);
// } else {
//         score = score - 1;
//     console.log("Score is: " + score);
// }

// ex07: function to add two numbers
// function add(num1, num2) {
//     console.log("Num1 is: ", num1, " Num2 is: ", num2);
//     var sum = num1 + num2;
//     return sum;
// }
// var result = add(5, 3);
// console.log("Result is: ", result);

// ex08: function to check the answer
// var readlineSync = require('readline-sync');
// var score = 0;
// function ask(question, answer) {
//     var userAnswer = readlineSync.question(question);
//     if (userAnswer == answer) {
//     score = score + 1;
//     console.log("You are Right. Score = " + score);
//     } else {
//     score = score - 1;
//     console.log("You are Wrong. Score = " + score);
//     }
// }
// ask("Where do I live: ", "Kolkata");

// ex09: print your name 5 times
// for (let i = 0; i < 5; i++) {
//     console.log("Shaswata Karan");
// }

// question1: var1 will always be constant 2nd var will change and print 10 values
// const a = 22;
// for (let i = 0; i < 10; i++) {
//     var sum = a + i;
//     console.log(sum);
// }

// homework: star pattern
// *
// **
// ***
// ****
// *****
// for (let i = 0; i < 5; i++) {
//     var row = "";
//     for (let j = 0; j <= i; j++) {
//         row = row + "*";
//     }
//     console.log(row);
// }

// ex10: list grocery items to buy
// var groceryList = ["milk", "eggs", "samosa", "flowers", "biscuits"];
// console.log(groceryList[0]);
// console.log(groceryList[2]);
// console.log(groceryList[4]);
// console.log(groceryList.length);
// console.log(groceryList[groceryList.length-1]);

// ex11: print every item on the list
// function log(data) {
//     console.log(data);
// }
// var groceryList = ["milk", "eggs", "samosa", "flowers", "biscuits", "medicines"];
// for (let i = 0; i < groceryList.length; i++) {
//     log(groceryList[i]);
// }

// ex12: club info about a superhero together
// Object in JS {
//     key : "value",
//     key : "value",
// }
// var superman = {
//     name: "superman",
//     power: "flight",
//     color: "blue-red",
//     strength: 1000,
//     stealth: 0,
//     intelligence: 100,
// }
// var batman = {
//     name: "batman",
//     power: "martial arts",
//     color: "black",
//     strength: 100,
//     stealth: 100,
//     intelligence: 1000,
// }
// console.log(superman.strength);
// console.log(superman.color);
// console.log(superman.strength > batman.strength);


// question2: create array of superhero objects
// print name, color of all objects in the list
// use array, loop, objects, function call
// var superman = {
//     name: "superman",
//     power: "flight",
//     color: "blue-red",
//     strength: 1000,
//     stealth: 0,
//     intelligence: 100,
// }
// var batman = {
//     name: "batman",
//     power: "martial arts",
//     color: "black",
//     strength: 100,
//     stealth: 100,
//     intelligence: 1000,
// }
// var superhero = [superman, batman];
// for (let i = 0; i < superhero.length; i++) {
//     console.log(superhero[i].name);
//     console.log(superhero[i].color);
//     console.log("----------");
// }

// ex13: put a list of questions together
// questionOne = {
//   question: "Who is my favorite superhero?",
//   answer: "Dhruv",
// }
// questionTwo = {
//   question: "Which is my favorite sad song?",
//   answer: "Channa Meraya",
// }
// var questions = [questionOne, questionTwo];
// for (let i = 0; i < questions.length; i++) {
//     console.log(questions[i].question);
// }

// ex14: club everything to make the game
var readlineSync = require('readline-sync');
var score = 0;
var username = readlineSync.question("What's your name? ");
console.log("Welcome " + username + ", do you know Shaswata?");

// play function
function play(question, answer) {
    var userAnswer = readlineSync.question(question);
    if (userAnswer === answer) {
        console.log("right!");
        score = score + 1;
    } else {
        console.log("wrong!");
    }
    console.log("Current score: ", score);
    console.log("---------------");
}

// array of objects
var questions = [{
    question: "Where do he live? ",
    answer: "Kolkata",
}, {
    question: "What is his age? ",
    answer: "22",
}, {
    question: "What is his hobby? ",
    answer: "Photography",
}
]

// loop
for (let i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer);
}

// ex15: print the final score to the user
console.log("YAY! YOU SCORED: ", score);