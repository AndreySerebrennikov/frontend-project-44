/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import { userName } from '../index.js';

const randomNum = () => Math.floor(Math.random() * 100);
const chekingNumber = (num) => ((num % 2 === 0) ? 'yes' : 'no');

let resultExpression;
let answerUser;

const question = () => {
  const num = randomNum();
  resultExpression = chekingNumber(num);
  answerUser = readlineSync.question(`Question: ${num}\nYor answer: `);
  return (resultExpression === answerUser);
};

export const questions = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const resultQuestion = question();
    if (resultQuestion) {
      console.log('Correct!');
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${resultExpression}.\nLet's try again, ${userName}!`);
      return '';
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return '';
};
