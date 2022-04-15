#!/usr/bin/env node
import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name?');
console.log('Hello,' + userName + '!');
console.log('What is the result of the expression?');

// const userAnswer = readlineSync.question('Your answer: ');

const randomNumber = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        };


console.log(calculate(rndNum1, rndNum2, '+'));

    export function calculate (num1, num2, operator) {
        const operators = ['+', '-', '*'];
        const rndOperator = operators[randomNumber(0, 2)];
        const rndNum1 = randomNumber(1, 100);
        const rndNum2 = randomNumber(1, 100);

        let userAnswer;
    switch (operator){
        case '+':
            return num1 + num2;
            console.log(`${num1} + ${num2}`);
            break;
        case '-':
            return num1 - num2;
        break;
        case '*':
            return num1 * num2;
        break;
    }
}

const result = calculate(rndNum1, rndNum2, rndOperator);


