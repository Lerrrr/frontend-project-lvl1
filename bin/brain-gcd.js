#!/usr/bin/env node
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const userName = readlineSync.question("May I have your name?");
console.log("Hello," + userName + "!");

console.log("Find the greatest common divisor of given numbers.");

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

function getIsAnswerCorrect(answer, res) {
  const correctAnswer = +answer;
  if (correctAnswer === res) {
    console.log("Correct!");
    return true;
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${res}`);
    return false;
  }
}

export function gameGcd() {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const rndNum1 = randomNumber(1, 20);
    const rndNum2 = randomNumber(1, 20);

    console.log(`Question: ${rndNum1} ${rndNum2}`);
    const result = gcd(rndNum1, rndNum2);
    const userAnswer = readlineSync.question("Your answer: ");
    const isAnswerCorrect = getIsAnswerCorrect(userAnswer, result);
    if (isAnswerCorrect === false) {
      return;
    }
    console.log("Congratulations," + userName + "!");
  }
}
gameGcd();
