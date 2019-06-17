let tomb = [1, 2, 3, 4, 5];

console.log(tomb);
console.log(tomb[0]);

tomb[0] = 10; // a tömb első elemének módosítása
console.log(tomb);
console.log('A Tömb mérete:', tomb.length);

tomb.push(100); // a tömb elemeinek kiegészítése 100-zal
console.log(tomb);

let x = tomb.pop(); // a tömb utolsó elemének törlése, és letárolása egy változóban

console.log('kitörölt utolsó elem: ', x);
console.log(tomb);

let t = tomb.shift(); // a tömb 1. elemének törlése -> Tasi w3school-os linkje

console.log('kitörölt első elem: ', t);

for (let i = 0; i < tomb.length; i++) { // Tömb bejárása, 1 < tomb.length: eggyel kissebb az index, mint a tömb elemeinek száma; ++: egyessével megyünk
  tomb[i] = 0;
}
console.log(tomb);

const generateArray = (size) => { // feladat, hozzunk létre egy olyan függvényt, ami létrehoz egy 10 véletlenszerű számból 1-10-ig álló tömböt
  let tomb2 = [];
  for (let i = 0; i < size; i++) {
    tomb2[i] = Math.floor(Math.random() * 10 + 1); // Math.floor(x.y) megadja az adott tört szám lefele kerekített értékét
  } // Math.random() - véletlenszerű számokat generál 0 és 1 között.
  return tomb2;
};
let arr = generateArray(10); // megadjuk a size értékeként a 10-et
console.log(arr);

const sumArray = (arr) => {
  let valtozo = 0;
  for (let i = 0; i < arr.length; i++) {
    valtozo += arr[i];
  }
  return valtozo;
};

console.log('Összeg: ', sumArray(arr)); // összeadja az előző random tömb (arr) elemeinek értékét

const mulArray = (arr) => { // az arr és i változó csak a blokkon belül látható, ezért lehet ugyan az a neve.
  let m = 1;
  for (let i = 0; i < arr.length; i++) {
    m *= arr[i];
  }
  return m;
};

console.log('Szorzat: ', mulArray(arr)); // összeszorozza az előző random tömb elemeinek értékét

const countElement = (e, tomb) => { // megszámolja, hogy hányszor van 1-es a random tömbben
  let c = 0;
  for (let i = 0; i < tomb.length; i++) {
    if (e === arr[i]) {
      c++;
    }
  }
  return c;
};

console.log('Ennyiszer van 1: ', countElement(1, arr));

const maxArray = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log('Maximum: ', maxArray(arr));

const minArray = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

console.log('Minimum: ', minArray(arr));

const tartArray = (e, arr) => { // Tartalmazza-e az 1-et??
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === e) {
      return true;
    }
  }
  return false;
};

console.log('Tartalmazza 1-et: ', tartArray(1, arr));

const indexOfArray = (e, arr) => { // Az e-t és az arr-t várjuk paraméterül
  let i = 0;
  while (i < arr.length && arr[i] != e) {
    i++;
  }
  if (i < arr.length) {
    return i;
  } else {
    return -1;
  }
};

console.log('1 helye: ', indexOfArray(1, arr)); // Ha nincs a random tömbben 1, -1-et ír ki,ha van benne, megmutatja az indexhelyét

const copy2xArray = (arr) => { // duplázva másolós algoritmus
  let b = [];
  for (let i = 0; i < arr.length; i++) {
    b[i] = arr[i] * 2;
  }
  return b;
};

console.log('másolt,duplázott értékű tömb: ', copy2xArray(arr));

// Kiválogatás, páros elemeket válogatja ki és másolja át egy új üres tömbbe
const selectEven = (arr) => {
  let b = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      b[j] = arr[i];
      j++;
    }
  }
  return b;
};

console.log('Páros elemek: ', selectEven(arr));

// Szétválogatás: páros és páratlan számokat külön-külön tömbbe tegye
const selectEvenOdd = (arr, b, c) => {
  let j = 0; // b tömb indexelésére
  let k = 0; // c tömb indexelésére
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      b[j] = arr[i];
      j++;
    } else {
      c[k] = arr[i];
      k++;
    }
  }
};

let b = [];
let c = [];
selectEvenOdd(arr, b, c);
console.log('Páros elemek: ', b);
console.log('Páratlan elemek: ', c);

// Metszet;
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [2, 3, 4, 6, 8, 10];

const intersectionArray = (arr1, arr2) => {
  let b = [];
  let k = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        b[k] = arr1[i];
        k++;
        break;
      }
    }
  }
  return b;
};

let m = intersectionArray(arr1, arr2);
console.log('Metszet:', m);

// Kamu Unió
let arr3 = arr1.concat(arr2);
console.log('Kamu Unió: ', arr3);

// 2. Unió próbálkozásom

const unionArr = (arr1, arr2) => {
  let b = [];
  let k = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] !== arr2[j]) {
        b[k] = arr1[i];
      } else if (arr1[i] !== arr2[j]) {
        b[k] = arr2[j];
        k++;
        break;
      }
    }
  }
  return b;
};

console.log('Unió 2.:', unionArr(m, arr3));

// 1. Unió próbálkozásom
const unionArray = (arr1, arr2) => {
  let f = [];
  let g = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] !== arr2[j]) {
        f[g] = arr1[i];
        g++;
        break;
      }
    }
  }
  return f;
};

let u = unionArray(arr1, arr2);
console.log('Unió 1.: ', u);

// Unióra ezt találtam a neten
function arrayUnion (arr1, arr2) {
  if ((arr1 == null) || (arr2 == null)) { return void 0; }
  const obj = {};
  for (var i = arr1.length - 1; i >= 0; --i) { obj[arr1[i]] = arr1[i]; }
  for (var i = arr2.length - 1; i >= 0; --i) { obj[arr2[i]] = arr2[i]; }
  const res = [];
  for (const n in obj) {
    if (obj.hasOwnProperty(n)) { res.push(obj[n]); }
  }
  return res;
}

console.log('Unió net: ', arrayUnion(arr1, arr2));
