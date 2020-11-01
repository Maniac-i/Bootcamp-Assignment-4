

//make inteface with html/css

//start quiz button that stats quiz and timer

//mkae the questions

//questions change when answer is submitted

//timeout for ending the quiz

//place to enter score is prompted after quiz end

//high scores are shown

var theQuestion = document.getElementById("theQuestion");
var firstAnswer = document.querySelector(".a");
var secondAnswer = document.querySelector(".b");
var thirdAnswer = document.querySelector(".c");
var fourthAnswer = document.querySelector(".d");
var rightWrong = document.getElementById("rightWrong");
var timeDisplay = document.querySelector(".time");
var listGroup = document.querySelector(".list-group");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var startButton = document.getElementById("startQuiz");
var finished = document.getElementById("finished");
var scoreEl = document.getElementById("score");
var timeLeft = 60;

//var highScores = localStorage.setItem("score", score);
//localStorage.getItem(score);
var questionArray = [

questionOne = {

  question: "What is used to declare a variable?",

  a: "var",

  b: "variable",

  c: "string",

  d: "idk",

  answer: "var"


},
questionTwo = {

  question: "In JS, what is a block of code called that is used to perform a speciic task?",

  a: "Boolean",

  b: "Function",

  c: "Variable",

  d: "String",

  answer: "Function"
},
questionThree = {

  question: "In JS, what element is used to store multiple values in a single variable?",

  a: "String",

  b: "Boolean",

  c: "Function",

  d: "Array",

  answer: "Array"
},
questionFour = {

  question: "The link elements go inside which HTML section?",

  a: "Body",

  b: "Footer",

  c: "Head",

  d: "Div",

  answer: "Head"
},
questionFive = {

  question: "What tag is used to define a list item?",

  a: "ul",

  b: "li",

  c: "ol",

  d: "b",

  answer: "li"
},
]

var score = 0;

var i = 0
//sets inputs for first question
theQuestion.textContent = questionArray[i].question;
firstAnswer.textContent = questionArray[i].a;
secondAnswer.textContent = questionArray[i].b;
thirdAnswer.textContent = questionArray[i].c;
fourthAnswer.textContent = questionArray[i].d;


//hides main page and displays first question when Start Quiz is pressed
//starts timer

startButton.addEventListener("click", function() {
  
  quiz.classList.add("hide");
  question.classList.remove("hide");
  timeDisplay.textContent = "Time: " + timeLeft;

  var timeInterval = setInterval(function() {
  
    // do something
    timeLeft--;
    timeDisplay.textContent = "Time: " + timeLeft;
  
  if (timeLeft === 0) {
    finished.classList.remove("hide");
    question.classList.add("hide");
    timeDisplay.textContent = "Time: 0"
    clearInterval(timeInterval);
    }
  }, 1000);

});

//event delegation to listgroup
//displays if questions is correct or wrong
//runs nextQuestion to dynamically display nexts questions text
listGroup.addEventListener("click", function(event) {

var buttonText = event.target.textContent

if (buttonText === questionArray[i].answer) {
rightWrong.textContent = "Correct!";
score++
} else { rightWrong.textContent = "wrong!";
          timeLeft = timeLeft - 10;


}
nextQuestion();

});

//Dynamically displays next question text
var nextQuestion = function() {

  i++;

  //hides question section after last question --- NEED TO CHANGE TO FOR LOOP
  if (i < questionArray.length) {
  theQuestion.textContent = questionArray[i].question;
  firstAnswer.textContent = questionArray[i].a;
  secondAnswer.textContent = questionArray[i].b;
  thirdAnswer.textContent = questionArray[i].c;
  fourthAnswer.textContent = questionArray[i].d;

  } else {
  
    question.classList.add("hide");
    finished.classList.remove("hide");
    
    scoreEl.textContent = "Your Score is: " + score + " out of 5";
  }
}



