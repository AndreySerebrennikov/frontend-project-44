import runLogicGame from '../index.js';
import { getRandomNum } from '../utils.js';

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxNumber = 100;
const minNumber = 1;
const isEven = (num) => (num % 2 === 0);

const getRoundGame = () => {
  const number = getRandomNum(maxNumber, minNumber);
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainEven = () => runLogicGame(ruleGame, getRoundGame);
export default runBrainEven;
