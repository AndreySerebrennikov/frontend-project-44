import runLogicGame from '../index.js';
import { getRandomNum, getRandomIndex } from '../utils.js';

const ruleGame = 'What is the result of the expression?';
const maxNumber = 100;
const minNumber = 1;
const operators = ['+', '-', '*'];

const getAnswerExpression = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return ' ';
  }
};

const getRoundGame = () => {
  const number1 = getRandomNum(maxNumber, minNumber);
  const number2 = getRandomNum(maxNumber, minNumber);
  const operator = operators[getRandomIndex(operators)];

  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = getAnswerExpression(number1, number2, operator).toString();
  return [question, correctAnswer];
};

const runBrainCalc = () => runLogicGame(ruleGame, getRoundGame);
export default runBrainCalc;
