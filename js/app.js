'use strict'

// Customer greeting for site visitors
function greetUser() {
  let userName = prompt('Hello! What is your name?');

  while (!userName) {
    userName = prompt('Please enter your name so we can properly greet you!');
  }
  console.log(userName);
  alert(`Welcome to my site ${userName}!`);
}

function quiz() {
  // Alerts the user the game has started
  alert("Let's see if you actually read the site!");

  // Questions
  const q1 = 'I have a wife and two daughters. (Yes/No)';
  const q2 = 'I attended the Naval Academy for undergrad. (Yes/No)';
  const q3 = 'I speak Korean & Japanese. (Yes/No)';
  const q4 = 'I was a cook in the Navy. (Yes/No)';
  const q5 = 'I am from Texas originally. (Yes/No)';
  const q6 = 'Guess my favorite number!';
  const q7 = 'What sports have I played in college?';

  // Question Array for Loop Iteration
  const questions = [q1, q2, q3, q4, q5, q6, q7];

  // Answers
  const yesNoAcceptAns = ['n', 'no', 'y', 'yes'];
  const a1 = ['n', 'no'];
  const a2 = ['y', 'yes'];
  const a3 = ['y', 'yes'];
  const a4 = ['n', 'no'];
  const a5 = ['y', 'yes'];
  const a6 = '8';
  const a7 = ['tennis', 'crew', 'rowing', 'karate', 'marathon', 'swimming', 'underwater rugby'];

  // Answer Array for Loop Iteration
  const correctAns = [a1, a2, a3, a4, a5, a6, a7];

  // Responses to User
  const r1 = 'I have a wife and two sons, ages 3 & 1.';
  const r2 = 'I attended the Naval Academy for undergrad.';
  const r3 = 'I speak both Korean & Japanese.';
  const r4 = 'I was a bomb disposal officer in the Navy.';
  const r5 = 'I am origninally from Uvalde, Tx.';
  const r6 = 'My favorite number is 8!';
  const r7 = (`I did the following sports in college: ${a7.join()}`);

  // Response Array for Loop Iteration
  const responseAlert = [r1, r2, r3, r4, r5, r6, r7];

  // Global variable for tracking number of correct answers by user
  let correctCount = 0;

  // Global variables for tracking attemps
  let q6Attempts = 4;
  let q7Attempts = 6;

  for (let i = 0; i < questions.length; i++) {

    let userAns = prompt(questions[i]).toLowerCase();

    while (yesNoAcceptAns.includes(userAns) == false && i < 5) {
      console.log('invalid input');
      userAns = prompt("Please answer 'Yes' or 'No'").toLowerCase();
    }

    if (correctAns[i].includes(userAns) && i < 5) {
      console.log('correct');
      correctCount = correctCount + 1;
      alert(`Correct! ${responseAlert[i]}`);
    } else if (correctAns[i].includes(userAns) == false && i < 5) {
      console.log('incorrect');
      alert(`Incorrect! ${responseAlert[i]}`);
    } else if (i == 5) {
      while (q6Attempts > 1 && userAns !== correctAns[i]) {
        if (userAns > correctAns[i]) {
          console.log('too high');
          userAns = prompt(`Too High! Guess again. Your previous guess was ${userAns}. You have ${q6Attempts -1} remaining!`);
          q6Attempts = q6Attempts - 1;
        } else {
          console.log('too low');
          userAns = prompt(`Too Low! Guess again. Your previous guess was ${userAns}. You have ${q6Attempts -1} remaining!`);
          q6Attempts = q6Attempts - 1;
        }
      }
      if (userAns == correctAns[i]) {
        console.log('correct');
        alert(`Correct! ${responseAlert[i]}`);
        correctCount = correctCount + 1;
      } else {
        console.log('incorrect');
        alert(`Incorrect! ${responseAlert[i]}`);
      }
    } else if (i == 6) {
      while (q7Attempts > 1 && correctAns[i].includes(userAns) == false) {
        console.log('incorrect');
        userAns = prompt(`Incorrect! You have ${q7Attempts -1} remaining!`).toLowerCase();
        q7Attempts = q7Attempts - 1;
      }
      if (correctAns[i].includes(userAns)) {
        console.log('correct');
        alert(`Correct! ${responseAlert[i]}`);
        correctCount = correctCount + 1;
      } else {
        console.log('incorrect');
        alert(`Incorrect! ${responseAlert[i]}`);
      }
    }
    console.log(`Number correct: ${correctCount}`);
  }
  console.log('end quiz');
  console.log(`Correct answers: ${correctCount}`);
  alert(`You got ${correctCount}/${questions.length} correct.`);
};
