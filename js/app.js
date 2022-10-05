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

  alert("Let's see if you actually read the site!");

  const questions = ['I have a wife and two daughters. (Yes/No)', 'I attended the Naval Academy for undergrad. (Yes/No)', 'I speak Korean & Japanese. (Yes/No)', 'I was a cook in the Navy. (Yes/No)', 'I am from Texas originally. (Yes/No)'];
  
  const correctAns = ['n', 'y', 'y', 'n', 'y'];
  
  const responseAlert = ['I have a wife and two sons, ages 3 & 1.', 'I attended the Naval Academy for undergrad.', 'I speak both Korean & Japanese.', 'I was a bomb disposal officer in the Navy.', 'I am origninally from Uvalde, Tx.'];
  
  let correctCount = 0;
  
  for (let i = 0; i < questions.length; i++) {
    
    let userAns = prompt(questions[i]).charAt(0).toLowerCase();

    while (userAns != 'y' && userAns != 'n') {
            console.log('invalid input');
      userAns = prompt("Please answer 'Yes' or 'No'").charAt(0).toLowerCase();
    }
    console.log(userAns);
    if (userAns == correctAns[i]) {
      console.log('correct');
      correctCount = correctCount + 1;
      console.log(correctCount);
      alert(`Correct! ${responseAlert[i]}`);
    } else{
      console.log('incorrect');
      alert(`Incorrect! ${responseAlert[i]}`);
    }
  } 
  console.log('end quiz');
  console.log(`Correct answers: ${correctCount}`);
  alert(`You got ${correctCount}/${questions.length} correct.`)  
};
