const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

let tomb = generate2d(20, 20);
console.log(tomb);

const fill2DArray = (tomb) => {
  for (let i = 0; i < tomb.length; i++) {
    for (let j = 0; j < tomb[i].length; j++) {
      tomb[i][j] = Math.floor(Math.random() * 3 + 1);
    }
  }
  return tomb;
};

console.log(fill2DArray(tomb));

const tartArray = (e, f, g, tomb) => { // Tartalmazza-e az 1, 2, 3-at??
  let count = 0;
  for (let i = 0; i < tomb.length; i++) {
    for (let j = 0; j < tomb[i].length; j++) {
      if (tomb[i][j] === e && tomb[i][j + 1] === f && tomb[i][j + 2] === g) {
        count++;
      }
    }
  }
  return count;
};

console.log('Tartalmazza az 1, 2, 3-at: ', tartArray(1, 2, 3, tomb));

const tart2Array = (e, f, g, tomb) => {
  let count = 0;
  for (let i = 0; i < tomb.length - 2; i++) {
    for (let j = 0; j < tomb[i].length; j++) {
      if (tomb[i][j] === e && tomb[i + 1][j] === f && tomb[i + 2][j] === g) {
        count++;
      }
    }
  }
  return count;
};

console.log('Egymás alatt tartalmazza az 1, 2, 3-at: ', tart2Array(1, 2, 3, tomb));

const tart3Array = (e, f, g, tomb) => {
  let count = 0;
  for (let i = 0; i < tomb.length - 1; i++) {
    for (let j = 0; j < tomb[i].length; j++) {
      if (tomb[i][j] === e && tomb[i][j + 1] === f && tomb[i + 1][j + 1] === g) {
        count++;
      }
    }
  }
  return count;
};

console.log('Fordított L alakban tartalmazza az 1, 2, 3-at: ', tart3Array(1, 2, 3, tomb));

const tart4Array = (e, f, g, tomb) => {
  let count = 0;
  for (let i = 0; i < tomb.length - 2; i++) {
    for (let j = 0; j < tomb[i].length; j++) {
      if (tomb[i][j] === e && tomb[i + 1][j + 1] === f && tomb[i + 2][j + 2] === g) {
        count++;
      }
    }
  }
  return count;
};

console.log('Átlóban tartalmazza az 1, 2, 3-at: ', tart4Array(1, 2, 3, tomb));
