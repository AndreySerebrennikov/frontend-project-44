import executeLogicGame from '../src/index.js';
import getRandomNumber from '../src/utils.js';

const getListNumbers = (startSequence, sizeSequence) => {
  const numbers = [];
  let currentNumber = startSequence;
  for (let i = 0; i < 10; i += 1) {
    currentNumber += sizeSequence;
    numbers.push(currentNumber);
  }
  return numbers.sort((a, b) => a - b);
};

const getSequenceHiddenNumber = (sequenceNumbers, indexHiddenNumber) => {
  const numbers = sequenceNumbers;
  numbers[indexHiddenNumber] = '..';
  return numbers.join(' ');
};

const ruleGame = 'What number is missing in the progression?';
const runRoundGame = () => {
  const sizeSequence = getRandomNumber(2, 8);
  const startSequence = getRandomNumber(1, 100);
  const indexHiddenNumber = Math.floor(Math.random() * 10);

  const sequenceNumbers = getListNumbers(startSequence, sizeSequence);
  const hiddenNumber = sequenceNumbers[indexHiddenNumber];
  const sequenceHiddenNumber = getSequenceHiddenNumber(sequenceNumbers, indexHiddenNumber);

  const question = `Question: ${sequenceHiddenNumber}`;
  const correctAnswer = hiddenNumber;
  return [question, correctAnswer];
};

const runBrainProgression = () => executeLogicGame(ruleGame, runRoundGame);
export default runBrainProgression;
