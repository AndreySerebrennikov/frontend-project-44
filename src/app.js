import readlineSync from 'readline-sync';

let userName;
let answerUser;
let answerCorrect;
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const chekingNumber = (num) => num % 2 === 0;

const question1 = () => {
  const num = Math.floor(Math.random() * 100);
  const evenOdd = chekingNumber(num);
  answerUser = readlineSync.question(`Question: ${num}\nYor answer: `);

  if (evenOdd) {
    answerCorrect = 'yes';
  } else {
    answerCorrect = 'no';
  }

  return ((evenOdd === true && answerUser === 'yes') || (evenOdd === false && answerUser === 'no'));
};

const question2 = () => {
  const num = Math.floor(Math.random() * 100);
  const evenOdd = chekingNumber(num);
  answerUser = readlineSync.question(`Question: ${num}\nYor answer: `);

  if (evenOdd) {
    answerCorrect = 'yes';
  } else {
    answerCorrect = 'no';
  }

  return ((evenOdd === true && answerUser === 'yes') || (evenOdd === false && answerUser === 'no'));
};

const question3 = () => {
  const num = Math.floor(Math.random() * 100);
  const evenOdd = chekingNumber(num);
  answerUser = readlineSync.question(`Question: ${num}\nYor answer: `);

  if (evenOdd) {
    answerCorrect = 'yes';
  } else {
    answerCorrect = 'no';
  }

  return ((evenOdd === true && answerUser === 'yes') || (evenOdd === false && answerUser === 'no'));
};

export const question = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const resultQuestion1 = question1();
  if (resultQuestion1) {
    console.log('Correct!');
  } else {
    console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answerCorrect}.\nLet's try again, ${userName}!`);
    return '';
  }

  const resultQuestion2 = question2();
  if (resultQuestion2) {
    console.log('Correct!');
  } else {
    console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answerCorrect}.\nLet's try again, ${userName}!`);
    return '';
  }

  const resultQuestion3 = question3();
  if (resultQuestion3) {
    console.log('Correct!');
  } else {
    console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answerCorrect}.\nLet's try again, ${userName}!`);
    return '';
  }
  console.log(`Congratulations, ${userName}!`);
  return '';
};
