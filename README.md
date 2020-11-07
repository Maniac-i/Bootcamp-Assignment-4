# Bootcamp-Assignment-4
Assignment 4 from the OSU Bootcamp

For this project we  creat a timed Code Quiz that included several multiple choice questions. This project utilized JS to dynamically update HTML and CSS. I stored my multiple choice questions in objects inside an array. This allowed me easily access the question itself, the answers, and store the correct answer for a reference. A timeInterval was utilized to put a time limit on the quiz, and localStorage was utilized to keep track of players scores. 

Some of the areas I had difficulty while creating this project was getting the next question to display dynamically and correctly implimenting the timeInterval with a globally scoped clearInterval so I had access to it in other places of my code.

The criteria for this project was as follows: 

GIVEN I am taking a code quiz

- WHEN I click the start button
  - THEN a timer starts and I am presented with a question
- WHEN I answer a question
  - THEN I am presented with another question
- WHEN I answer a question incorrectly
  - THEN time is subtracted from the clock
- WHEN all questions are answered or the timer reaches 0
  - THEN the game is over
- WHEN the game is over
  - THEN I can save my initials and score
  
  <br>
  An example of the final project is below.
  <br>
  
  ![](https://github.com/Maniac-i/Bootcamp-Assignment-4/blob/main/Assets/04-web-apis-homework-demo.gif?raw=true)
