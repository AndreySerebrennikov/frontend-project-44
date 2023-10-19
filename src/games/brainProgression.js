import readlineSync from 'readline-sync';
import { userName } from '../index.js';

let hiddenNumber;
let answerUser;

const progression = () => {
  const arrayRandomNumbers = [Math.floor(Math.random() * 100)];
  const arraySequences = [2, 3, 4, 5];
  const indexRandomArraySequences = Math.floor(Math.random() * arraySequences.length);

  for (let i = 0; i <= 10; i += 1) {
    arrayRandomNumbers.push(arrayRandomNumbers[i] + arraySequences[indexRandomArraySequences]);
  }

  const indexHiddenNuumber = Math.floor(Math.random() * arrayRandomNumbers.length);
  hiddenNumber = arrayRandomNumbers[indexHiddenNuumber];
  return arrayRandomNumbers.join().replace(arrayRandomNumbers[indexHiddenNuumber], '..');
};

const question = () => {
  answerUser = readlineSync.question(`Question: ${progression()}\nYor answer: `);
  return (hiddenNumber.toString() === answerUser.toString());
};

const questions = () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const resultQuestion = question();
    if (resultQuestion) {
      console.log('Correct!');
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${hiddenNumber}.\nLet's try again, ${userName}!`);
      return '';
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return '';
};
export default questions;
