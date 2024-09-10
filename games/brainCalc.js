import executeLogicGame, { getRandomNumber } from '../src/index.js';

const runOperator = () => {
  const operators = ['+', '-', '*'];
  const index = Math.floor(Math.random() * 3);
  return operators[index];
};

const getCorrectAnswer = (number1, number2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = (number1 + number2);
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      result = 'erorr';
  }
  return result;
};

const runRule = 'What is the result of the expression?';
const runRoundGame = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 10);
  const operator = runOperator();
  const question = `Question: ${number1} ${operator} ${number2}`;
  const correctAnswer = getCorrectAnswer(number1, number2, operator);
  return [question, correctAnswer];
};

const runBrainCalc = () => executeLogicGame(runRule, runRoundGame);
export default runBrainCalc;
