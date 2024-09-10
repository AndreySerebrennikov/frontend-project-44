import executeLogicGame, { getRandomNumber } from '../src/index.js';

const isEven = (number) => number % 2 === 0;

const runRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const runRoundGame = () => {
  const number = getRandomNumber(1, 100);
  const question = `Question: ${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainEven = () => executeLogicGame(runRule, runRoundGame);
export default runBrainEven;
