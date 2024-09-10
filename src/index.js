import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const countRoundGame = 3;
const executeLogicGame = (runRule, runRoundGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(runRule);

  for (let i = 0; i < countRoundGame; i += 1) {
    const [question, correctAnswer] = runRoundGame();
    console.log(question);
    const answerPlayer = readlineSync.question('Your answer ');
    if (answerPlayer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${answerPlayer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default executeLogicGame;
