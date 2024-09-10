import executeLogicGame, { getRandomNumber } from '../src/index.js';

const ruleGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  const remainder = number1 % number2;
  return getGcd(number2, remainder);
};

const runRoundGame = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 11);
  const question = `Question: ${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);
  return [question, correctAnswer];
};

const runBrainGcd = () => executeLogicGame(ruleGame, runRoundGame);
export default runBrainGcd;
