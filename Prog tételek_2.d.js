let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr[0][0]);
console.log(arr[1][0]);
console.log(arr[2][2]);

const generate2d = (n, m) => { // 2 méretet vár: hosszúság és szélesség
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

let k = generate2d(3, 3);
console.log(k);
console.log(arr);

const print2d = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      process.stdout.write(arr[i][j] + ' ');
    }
    console.log();
  }
};

let l = generate2d(4, 4);
console.log(l);
print2d(l);
