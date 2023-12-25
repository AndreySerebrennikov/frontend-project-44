import { getRandomNum, getRandomIndex } from '../utils.js';
import runLogicGame from '../index.js';

const ruleGame = 'What number is missing in the progression?';
const maxNumber = 20;
const minNumber = 3;

const getProgression = (number, sequences) => {
  const progressions = [];
  for (let i = number; progressions.length < 10; i += sequences) {
    progressions.push(i);
  }
  return progressions;
};

const getRoundGame = () => {
  const startNumber = getRandomNum(maxNumber, minNumber);
  const sequences = getRandomNum(maxNumber, minNumber);
  const progression = getProgression(startNumber, sequences);
  const hiddenIndexProgressions = getRandomIndex(progression);
  const correctAnswer = progression[hiddenIndexProgressions].toString();
  progression[hiddenIndexProgressions] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runBrainProgression = () => runLogicGame(ruleGame, getRoundGame);
export default runBrainProgression;
