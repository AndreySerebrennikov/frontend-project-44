import { getRandomNum } from '../utils.js';
import runLogicGame from '../index.js';

const ruleGame = 'Find the greatest common divisor of given numbers.';
const maxNumber = 100;
const minNumber = 1;

const getDivisor = (number1, number2) => {
  const minNum = Math.min(number1, number2);
  let count = 0;
  for (let i = 0; i <= minNum; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      count = i;
    }
  }
  return count;
};

const getRoundGame = () => {
  const number1 = getRandomNum(maxNumber, minNumber);
  const number2 = getRandomNum(maxNumber, minNumber);
  const question = `${number1} ${number2}`;
  const correctAnswer = getDivisor(number1, number2).toString();
  return [question, correctAnswer];
};

const runBrainGcd = () => runLogicGame(ruleGame, getRoundGame);
export default runBrainGcd;
