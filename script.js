
//global variables
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


//An array containing the questions
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

//sets first question to be displayed
setFirstQuestion(0);

//Function that sets the question and answers being displayed
function setFirstQuestion(i) {

  theQuestion.textContent = questionArray[i].question;
  firstAnswer.textContent = questionArray[i].a;
  secondAnswer.textContent = questionArray[i].b;
  thirdAnswer.textContent = questionArray[i].c;
  fourthAnswer.textContent = questionArray[i].d;
}

//set timeInterval as a global variable
var timeInterval;

startButton.addEventListener("click", function () {

  //hides quiz start section and displays question section
  quiz.classList.add("hide");
  question.classList.remove("hide");

  timeDisplay.textContent = "Time: " + timeLeft;

  //sets time interval
  timeInterval = setInterval(function () {

    timeLeft--;
    timeDisplay.textContent = "Time: " + timeLeft;

    //conditional for when timer reaches 0
    if (timeLeft === 0) {

      //set timer to 0
      timeDisplay.textContent = "Time: 0"
      clearInterval(timeInterval);

      //conditional for when all the questions are answered before time runs out
      if (toggle !== "over") {

        //shows finished section and hides question section
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

  //sets the text of answered selected to a variable
  var buttonText = event.target.textContent

  //checks to see if answer selected matches the correct answer
  if (buttonText === questionArray[i].answer) {

    //if answer is correct
    rightWrong.textContent = "Correct!";
    score++

  } else {

    //if answer is wrong
    rightWrong.textContent = "wrong!";
    timeLeft = timeLeft - 10;


  }

  //display next question
  nextQuestion();

});

//Dynamically displays next question text
var nextQuestion = function () {

  i++;

  if (i < questionArray.length) {

    setFirstQuestion(i);

  } else {

    //hides question section and displays finished sectionafter last question is answered
    clearInterval(timeInterval);
    question.classList.add("hide");
    finished.classList.remove("hide");

    //Displays final score
    scoreEl.textContent = "Your Score is: " + score + " out of 5";
  }
}


//stores users initials and score in local storage
submit.addEventListener("click", function (event) {

  event.preventDefault();

  //creates variable out of user input
  var initials = document.getElementById("inputPassword2").value;

  //sets local storage items
  localStorage.setItem("score", score);
  localStorage.setItem("initials", initials);

  //calls create list function
  createListItem();


})

//creates list item with score and intials and appends to highscore list
function createListItem() {

  //hides finished section and shows highscore section
  highScoreSection.classList.remove("hide");
  finished.classList.add("hide");

  //grabs initials and score values from local storage
  var user = localStorage.getItem("initials");
  var userScore = localStorage.getItem("score");

  //creat a list item and appends it to highscore page
  listItem = document.createElement("li");
  listItem.textContent = user + ": " + userScore + " out of 5";
  highScores.appendChild(listItem);


}

//adds click event to Go Back button
goBack.addEventListener("click", () => {

  //resets counting vairables
  i = 0;
  timeLeft = 60;
  score = 0;

  //hides highscore section and shows the Quiz start page
  highScoreSection.classList.add("hide");
  quiz.classList.remove("hide");

  //clears current time interval
  clearInterval(timeInterval);

  //displays first question
  setFirstQuestion(0);

  //clears time display
  timeDisplay.textContent = "";

  //clears display showing if question was answered correctly or not
  rightWrong.textContent = "";

})