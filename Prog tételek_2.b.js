const fgv = (k) => { // csak az értéket módosítjuk, az eredeti változó értéke megmarad
  k = 5;
  console.log('Function: ', k); // 5
};

let a = 10;
fgv(a);
console.log('Golbal: ', a); // 10

const generateArray = (arr, size) => {
  for (let i = 0; i < size; i++) {
    // arr[i] = Math.floor(Math.random() * 11); - így is lehet random tömböt generálni
    arr.push(Math.floor(Math.random() * 11));
  }
};

let b = [];
generateArray(b, 10);
console.log(b);
