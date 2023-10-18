import readlineSync from 'readline-sync';
import { userName } from '../index.js';

let resultExpression;
let answerUser;

const expression = () => {
  const randomNum1 = Math.floor((Math.random() * 100));
  const randomNum2 = Math.floor((Math.random() * 100));
  const minNum = Math.min(randomNum1, randomNum2);
  let count = 0;
  for (let i = 0; i <= minNum; i += 1) {
    if (randomNum1 % i === 0 && randomNum2 % i === 0) {
      count = i;
    }
  }
  resultExpression = count;
  return `${randomNum1} ${randomNum2}`;
};

const question = () => {
  answerUser = readlineSync.question(`Question: ${expression()}\nYor answer: `);
  return (resultExpression.toString() === answerUser.toString());
};

const questions = () => {
  console.log('Find the greatest common divisor of given numbers.');
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
export default questions;
