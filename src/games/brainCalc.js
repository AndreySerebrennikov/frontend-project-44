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

const question = () => {
  answerUser = readlineSync.question(`Question: ${expression()}\nYor answer: `);
  return (resultExpression === answerUser);
};

const questions = () => {
  console.log('What is the result of the expression?');
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
