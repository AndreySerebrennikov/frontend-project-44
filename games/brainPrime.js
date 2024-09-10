import executeLogicGame, { getRandomNumber } from '../src/index.js';

const chekingPrimeNumber = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrime = (number) => chekingPrimeNumber(number);

const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const runRoundGame = () => {
  const number = getRandomNumber(1, 200);
  const question = `Question: ${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runBarinPrime = () => executeLogicGame(ruleGame, runRoundGame);
export default runBarinPrime;
