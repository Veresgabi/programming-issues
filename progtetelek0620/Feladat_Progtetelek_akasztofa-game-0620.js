let readLine = require('readline-sync');
let dictionary = ['kutya', 'macska', 'ebéd', 'étel', 'öltöny'];
let word = '';
let guessedWord = [];
let life = 0;

const generateWord = () => {
  word = dictionary[Math.floor(Math.random() * dictionary.length)];
  life = Math.ceil(word.length / 2);
  for (let j = 0; j < word.length; j++) {
    guessedWord[j] = '_';
  }
};

const printGame = () => {
  for (let i = 0; i < guessedWord.length; i++) {
    process.stdout.write(guessedWord[i] + ' ');
  }
  console.log('Életeid: ', life);
};

const isFinished = () => {
  for (let i = 0; i < guessedWord.length; i++) {
    if (guessedWord[i] === '_') return false;
  }
  return true;
};

const makeGuess = (character) => {
  let found = false;
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === character) {
      guessedWord[i] = word.charAt(i);
      found = true;
    }
  }
  return found;
};

const main = () => {
  generateWord();
  console.log('Hello, találd ki a szót!');
  printGame();
  while (life > 0) {
    if (!makeGuess(readLine.keyIn())) {
      life--;
    }
    printGame();
    if (isFinished()) {
      console.log('Nyertél!');
      break;
    }
  }
  if (life === 0) {
    console.log('Vesztettél!');
  }
};

main();
