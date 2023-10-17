/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import { userName } from '../index.js';

const randomNum = () => Math.floor(Math.random() * 100);
const chekingNumber = (num) => ((num % 2 === 0) ? 'yes' : 'no');

let resultExpression;
let answerUser;

const question1 = () => {
  const num = randomNum();
  resultExpression = chekingNumber(num);
  answerUser = readlineSync.question(`Question: ${num}\nYor answer: `);
  return (resultExpression === answerUser);
};

const question2 = () => {
  const num = randomNum();
  resultExpression = chekingNumber(num);
  answerUser = readlineSync.question(`Question: ${num}\nYor answer: `);
  return (resultExpression === answerUser);
};

const question3 = () => {
  const num = randomNum();
  resultExpression = chekingNumber(num);
  answerUser = readlineSync.question(`Question: ${num}\nYor answer: `);
  return (resultExpression === answerUser);
};

export const question = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
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
