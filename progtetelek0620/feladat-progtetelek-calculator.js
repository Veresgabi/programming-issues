let readline = require('readline-sync');
let stringA = readline.question('Kérem, adja meg az első számot!');
let t = readline.question('Kérem, adja meg az operátort');
let stringB = readline.question('Kérem, adja meg a második számot!');

let a = parseInt(stringA);
let b = parseInt(stringB);

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mult = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const operation = (a, b, t) => {
  return t(a, b);
};

// let operators = ['+', '-', '*', '/'];
// let index3 = readlineSync.keyInSelect(operators, 'Kérem, válasszon egy operátort!');

// const main = () => {
switch (t) {
  case '+':
    console.log(operation(a, b, add));
    break;
  case '-':
    console.log(operation(a, b, sub));
    break;
  case '*':
    console.log(operation(a, b, mult));
    break;
  case '/':
    console.log(operation(a, b, div));
}
