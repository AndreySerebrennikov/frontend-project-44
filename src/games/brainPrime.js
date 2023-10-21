import readlineSync from 'readline-sync';
import { userName } from '../index.js';

let primeNum;
let answerUser;

const primeNumber = () => {
  const num = Math.floor(Math.random() * 100);
  let count = 0;
  let i = 2;
  while (i <= num) {
    if (num % i === 0) {
      count += 1;
    }
    i += 1;
  }
  if (count === 1) {
    primeNum = 'yes';
  } else {
    primeNum = 'no';
  }
  return num;
};

const question = () => {
  answerUser = readlineSync.question(`Question: ${primeNumber()}\nYor answer: `);
  return (primeNum === answerUser);
};

const questions = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const resultQuestion = question();
    if (resultQuestion) {
      console.log('Correct!');
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${primeNum}.\nLet's try again, ${userName}!`);
      return '';
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return '';
};
export default questions;
