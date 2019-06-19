let readline = require('readline-sync'); // npm install szükséges: npm install -g readline-sync
let name = readline.question('What\'s your name?');
console.log('Hello', name, '!');

while (true) {
  let key = readline.keyIn("Press a key, \'q\' to exit!");
  console.log('You pressed', key); // Your pressed 'megnyomott gomb'
  if (key === 'q') { // q lenyomására kilép a programból
    break;
  }
}

/* let stdin = process.stdin; // lekérjük a bemeneti folyamatot
stdin.setRawMode(true); // végtelen ciklus
stdin.resume();
stdin.setEncoding('utf-8'); // Kódolás beállítása.
stdin.on('data', (key) => {
  console.log('You pressed', key); // kiírja, hogy mit nyomtál meg
  if (key === 'q') {
    process.exit(); // Fontos, mert különben nincs kilépési lehetőség
  }
});

setInterval(() => {
  console.log('Nagycica'); // callback, arrow function
}, 100
); // játék írásánál lesz hasznos ez a függvény
*/

/* let time = 1000; // Kezdetben 1 msperc majd egyre gyorsabban hívja meg magát a függvény.
const fun = () => {
  if (time > 0) { // Amíg a függvény értéke nagyobb a 0-nál, addig futtassa a következőt
    time -= 50;
    console.log(time);
    setTimeout(fun, time);
  } else {
    console.log('Time is up');
  }
};

fun();

Rekurzió: Önmagát hívja meg a függvény
const counter = (count) => {
  console.log(count); //
  if (count === 0) { return 0; }
  count -= 1; // A count értékét csökkentettük 1-gyel.
  counter(count); // Újra meghívjuk a függvényt.
};

counter(10);
const arrMin = (index, arr) => {
  if (index === 0) return arr[0];
  return Math.min(arr[index - 1], arrMin(index - 1, arr));
};

let arr = [1, -5, 2, -10, 3];
console.log(arrMin(arr.length, arr));

const fibo = (n) => { // n. elemet várjuk
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(10));

for (let i = 0; i < 11; i++) {

  process.stdout.write(fibo(i) + '');

}

*/

const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

const fill2D = (arr) => {
  let num = 0;
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      arr[x][y] = num++;
    }
  }
};

let arr = generate2d(5, 5);
fill2D(arr);

console.log(arr);
let table = require('table');
let out = table.table(arr);
console.log(out);

const contains = (element, arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (element === arr[i][j]) {
        return true;
      }
    }
  }
  return false;
};

console.log(contains(-1, arr));
