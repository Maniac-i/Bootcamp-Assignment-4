

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
var submit = document.getElementById("submit");
var highScores = document.getElementById("highScores");
var highScoreSection = document.getElementById("highScoreSection");
var goBack = document.getElementById("goBack");
var timeLeft = 60;
var score = 0;
var i = 0
var toggle;


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

setFirstQuestion(0);

function setFirstQuestion(i) {
  //sets inputs for first question
  theQuestion.textContent = questionArray[i].question;
  firstAnswer.textContent = questionArray[i].a;
  secondAnswer.textContent = questionArray[i].b;
  thirdAnswer.textContent = questionArray[i].c;
  fourthAnswer.textContent = questionArray[i].d;
}

//hides main page and displays first question when Start Quiz is pressed
//starts timer
var timeInterval;

startButton.addEventListener("click", function () {

  quiz.classList.add("hide");
  question.classList.remove("hide");

  timeDisplay.textContent = "Time: " + timeLeft;

  timeInterval = setInterval(function () {

    timeLeft--;
    timeDisplay.textContent = "Time: " + timeLeft;

    if (timeLeft === 0) {
      timeDisplay.textContent = "Time: 0"
      clearInterval(timeInterval);

      if (toggle !== "over") {
        finished.classList.remove("hide");
        question.classList.add("hide");
        clearInterval(timeInterval);
      }
    }

  }, 1000);

});

//event delegation to listgroup
//displays if questions is correct or wrong
//runs nextQuestion to dynamically display nexts questions text
listGroup.addEventListener("click", function (event) {

  var buttonText = event.target.textContent

  if (buttonText === questionArray[i].answer) {
    rightWrong.textContent = "Correct!";
    score++
  } else {
    rightWrong.textContent = "wrong!";
    timeLeft = timeLeft - 10;


  }
  nextQuestion();

});

//Dynamically displays next question text
var nextQuestion = function () {

  i++;

  //hides question section after last question --- NEED TO CHANGE TO FOR LOOP
  if (i < questionArray.length) {
    setFirstQuestion(i);

  } else {
    clearInterval(timeInterval);
    question.classList.add("hide");
    finished.classList.remove("hide");


    scoreEl.textContent = "Your Score is: " + score + " out of 5";
  }
}


//stores users initials and score 
submit.addEventListener("click", function (event) {

  event.preventDefault();

  var initials = document.getElementById("inputPassword2").value;

  localStorage.setItem("score", score);
  localStorage.setItem("initials", initials);

  createListItem();


})

//creates list item with score and appends to highscore list
function createListItem() {

  highScoreSection.classList.remove("hide");
  finished.classList.add("hide");

  var user = localStorage.getItem("initials");
  var userScore = localStorage.getItem("score");

  listItem = document.createElement("li");
  listItem.textContent = user + ": " + userScore + " out of 5";
  highScores.appendChild(listItem);


}

goBack.addEventListener("click", () => {

  i = 0;
  timeLeft = 60;
  score = 0;

  highScoreSection.classList.add("hide");
  quiz.classList.remove("hide");
  
  clearInterval(timeInterval);
  setFirstQuestion(0);
  timeDisplay.textContent = "";
  rightWrong.textContent = "";

})