import getRandomNum from '../utils.js';
import runLogicGame from '../index.js';

const ruleGame = 'What number is missing in the progression?';
const maxNumber = 20;
const minNumber = 3;

const getProgression = () => {
  const progressions = [getRandomNum(maxNumber, minNumber)];
  const sequences = getRandomNum(maxNumber, minNumber);

  for (let i = 0; i < 9; i += 1) {
    progressions.push(progressions[i] + sequences);
  }
  return progressions;
};

const getRoundGame = () => {
  const progressions = getProgression();
  const indexRandomProgressions = Math.floor(Math.random() * progressions.length);
  const correctAnswer = progressions[indexRandomProgressions].toString();

  progressions[indexRandomProgressions] = '..';
  const question = progressions.join(' ');
  return [question, correctAnswer];
};

const runBrainProgression = () => runLogicGame(ruleGame, getRoundGame);
export default runBrainProgression;
