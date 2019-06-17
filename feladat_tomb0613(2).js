let tomb = [5, 4, 2, 8, 3, 9, 1, 10, 13, 11];

const max1Array = (tomb) => {
  let max1 = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < tomb.length; i++) {
    if (tomb[i] > max1) {
      max1 = tomb[i];
    }
  }
  return max1;
};

console.log('a tömb 1. maximuma: ', max1Array(tomb));
console.log(Math.max(tomb));

delete tomb[tomb.indexOf(max1Array(tomb))];

console.log(tomb);

const max2Array = (tomb) => {
  let max2 = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < tomb.length; i++) {
    if (tomb[i] > max2) {
      max2 = tomb[i];
    }
  }
  return max2;
};

console.log('a tömb 2. maximuma: ', max2Array(tomb));

delete tomb[tomb.indexOf(max2Array(tomb))];

console.log(tomb);

const max3Array = (tomb) => {
  let max3 = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < tomb.length; i++) {
    if (tomb[i] > max3) {
      max3 = tomb[i];
    }
  }
  return max3;
};

console.log('a tömb 3. legnagyobb száma: ', max3Array(tomb));

let tomb2 = [2, 4, 3, 16, 7, 9, 6, 13, 15, 11, 20];

let percent = 0.8;
let eightyPcntI = Math.round(tomb2.length * percent);
let arrayLengthP1 = tomb2.length + 1;
let arrayEightyPcIMax = arrayLengthP1 - eightyPcntI;

console.log(eightyPcntI);
console.log(tomb2.length);
console.log(arrayLengthP1);
console.log(arrayEightyPcIMax);
