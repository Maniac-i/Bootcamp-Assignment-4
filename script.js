

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
var timeLeft = 60;

//var highScores = localStorage.setItem("score", score);
//localStorage.getItem(score);
var questionArray = [

questionOne = {

  question: "What do you use to declare a variable?",

  a: "var",

  b: "hmm",

  c: "yup",

  d: "idk",

  answer: "var"


},
questionTwo = {

  question: "What is scope?",

  a: "It's this",

  b: "It's that",

  c: "It's everything",

  d: "IDK",

  answer: "IDK"
},
questionThree = {

  question: "",

  a: "",

  b: "",

  c: "",

  d: "",

  answer: ""
},
questionFour = {

  question: "",

  a: "",

  b: "",

  c: "",

  d: "",

  answer: ""
},
questionFive = {

  question: "",

  a: "",

  b: "",

  c: "",

  d: "",

  answer: ""
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
  timeDisplay.textContent = "Time: ";

  var timeInterval = setInterval(function() {
  
    // do something
    timeDisplay.textContent = "Time: " + timeLeft;
    timeLeft--;
  
  if (timeLeft === 0) {
    alert("finished");
    timeDisplay.textContent = "Time: "
    clearInterval(timeInterval);
    }
  }, 1000);

});

//event delegation to listgroup
//displays if questions is correct or wrong
//runs nextQuestion to dynamically display nexts questions text
listGroup.addEventListener("click", function(event) {

var buttonText = event.target.textContent

console.log(buttonText);

if (buttonText === questionArray[i].answer) {
rightWrong.textContent = "Correct!";
} else { rightWrong.textContent = "wrong!";


}
nextQuestion();

});

//Dynamically displays next question text
var nextQuestion = function() {

  i++;

  //hides question section after last question --- NEED TO CHANGE TO FOR LOOP
  if (i >= questionArray.length) {
    question.classList.add("hide");

    }

theQuestion.textContent = questionArray[i].question;
firstAnswer.textContent = questionArray[i].a;
secondAnswer.textContent = questionArray[i].b;
thirdAnswer.textContent = questionArray[i].c;
fourthAnswer.textContent = questionArray[i].d;


}
