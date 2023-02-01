'use strict';
const guessedNumberClass = document.querySelector('.guess');
const resultStatusClass = document.querySelector('.message');
const btnCheck = document.querySelector('.btn.check');
const btnAgain = document.querySelector('.btn.again');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const body = document.body;

let intScore = parseInt(score.textContent);

function getRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

let randomNumber = getRandomNumber();

btnCheck.addEventListener('click', () => {
  const guessedNumber = guessedNumberClass.value;
  if (!guessedNumber) {
    resultStatusClass.textContent = '🚫 No Number Guessed ';
  } else {
    if (guessedNumber == randomNumber) {
      resultStatusClass.textContent = '🎇🎉🎇 Correct Number!';
      body.style.background = 'green';
      if (parseInt(highScore.textContent) < intScore) {
        highScore.textContent = intScore;
      }
    } else {
      if (intScore <= 0) {
        resultStatusClass.textContent = 'Game Over! You Lose';
      } else {
        resultStatusClass.textContent =
          guessedNumber < randomNumber ? 'Oops Too Low!' : 'Oops Too High!';
        body.style.background = 'red';
        intScore = intScore - 1;
        score.textContent = intScore;
      }
    }
  }
});

function restartGame() {
  body.style.background = '#222';
  score.textContent = '20';
  randomNumber = getRandomNumber();
  guessedNumberClass.value = '';
  resultStatusClass.textContent = 'Start guessing...';
}

btnAgain.addEventListener('click', restartGame);
