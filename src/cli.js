import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  return (`Hello, ${userName}!`);
};
console.log(greeting());
export default greeting;
