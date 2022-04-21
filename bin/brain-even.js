#!/usr/bin/env node
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const userName = readlineSync.question("May I have your name?");
console.log("Hello," + userName + "!");
console.log('Answer "yes" if the number is even, otherwise answer "no".');

export function gameEven() {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const rndNum = randomNumber(1, 100);
    console.log(`Question: ${rndNum}`);
    const userAnswer = readlineSync.question("Your answer: ");
    const isEven = rndNum % 2 === 0;
    const correctAnswer = isEven ? "yes" : "no";

    if (correctAnswer === userAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`
      );
      return;
    }
  }
  console.log("Congratulations," + userName + "!!");
}

gameEven();

// const isEven = rndNum % 2 === 0;
//
// if (isEven && userAnswer === 'yes') {
//     console.log('Correct!');
// } else if (!isEven && userAnswer === 'no') {
//     console.log('Correct!');
// } else {
//     console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'`);
//     return ;
// }
