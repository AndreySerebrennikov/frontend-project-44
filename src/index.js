import readlineSync from 'readline-sync';

const runLogicGame = (ruleGame, getRoundGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleGame);

  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = getRoundGame();
    const answerUser = readlineSync.question(`Question: ${question}\nYor answer: `);
    if (correctAnswer !== answerUser) {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runLogicGame;
