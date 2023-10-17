/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import { userName } from '../index.js';

let resultExpression;
let answerUser;

const expression = () => {
  const arr = ['+', '-', '*'];
  const randomZnak = Math.random();
  const randomNum1 = Math.floor(Math.random() * 10);
  const randomNum2 = Math.floor(Math.random() * 10);

  const i = Math.floor(randomZnak * arr.length);
  switch (i) {
    case 0:
      resultExpression = `${randomNum1 + randomNum2}`;
      return (`${randomNum1} + ${randomNum2}`);
    case 1:
      resultExpression = `${randomNum1 - randomNum2}`;
      return (`${randomNum1} - ${randomNum2}`);
    case 2:
      resultExpression = `${randomNum1 * randomNum2}`;
      return (`${randomNum1} * ${randomNum2}`);
    default:
      return ('');
  }
};

const question1 = () => {
  answerUser = readlineSync.question(`Question: ${expression()}\nYor answer: `);
  return (resultExpression === answerUser);
};

const question2 = () => {
  answerUser = readlineSync.question(`Question: ${expression()}\nYor answer: `);
  return (resultExpression === answerUser);
};

const question3 = () => {
  answerUser = readlineSync.question(`Question: ${expression()}\nYor answer: `);
  return (resultExpression === answerUser);
};

export const question = () => {
  console.log('What is the result of the expression?');
  const resultQuestion1 = question1();
  if (resultQuestion1) {
    console.log('Correct!');
  } else {
    console.log(`${answerUser} is wrong answer ;(. Correct answer was ${resultExpression}.\nLet's try again, ${userName}!`);
    return '';
  }

  const resultQuestion2 = question2();
  if (resultQuestion2) {
    console.log('Correct!');
  } else {
    console.log(`${answerUser} is wrong answer ;(. Correct answer was ${resultExpression}.\nLet's try again, ${userName}!`);
    return '';
  }

  const resultQuestion3 = question3();
  if (resultQuestion3) {
    console.log('Correct!');
  } else {
    console.log(`${answerUser} is wrong answer ;(. Correct answer was ${resultExpression}.\nLet's try again, ${userName}!`);
    return '';
  }
  console.log(`Congratulations, ${userName}!`);
  return '';
};
