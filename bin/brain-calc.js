#!/usr/bin/env node
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const userName = readlineSync.question("May I have your name?");
console.log("Hello," + userName + "!");
console.log("What is the result of the expression?");

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
  }
}
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

export function gameCalc() {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const operators = ["+", "-", "*"];
    const rndOperator = operators[randomNumber(0, 2)];
    const rndNum1 = randomNumber(1, 10);
    const rndNum2 = randomNumber(1, 10);

    console.log(`Question: ${rndNum1} ${rndOperator} ${rndNum2}`);

    const result = calculate(rndNum1, rndNum2, rndOperator);
    const userAnswer = readlineSync.question("Your answer: ");
    const isAnswerCorrect = getIsAnswerCorrect(userAnswer, result);
    if (isAnswerCorrect === false) {
      return;
    }
  }
  console.log("Congratulations," + userName + "!");
}
gameCalc();
