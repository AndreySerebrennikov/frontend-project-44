import { getRandomNum } from '../utils.js';
import runLogicGame from '../index.js';

const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxNumber = 100;
const minNumber = -10;

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number;
};

const getRoundGame = () => {
  const number = getRandomNum(maxNumber, minNumber);
  const question = number.toString();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainPrime = () => runLogicGame(ruleGame, getRoundGame);
export default runBrainPrime;
