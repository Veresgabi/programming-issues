let arr1 = [7, 8, 9, 10, 11];
let arr2 = [1, 2, 3, 5, 6];

const smallestDiff = (arr1, arr2) => {
  let minDiffI = [];
  let minDiff = Math.abs(arr1[0] - arr2[0]);
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) < minDiff) {
        minDiff = Math.abs(arr1[i] - arr2[j]);
        minDiffI = [arr1[i], arr2[j]];
      }
    }
  }
  return minDiffI;
};

console.log('A legkisebb különbség számai: ', smallestDiff(arr1, arr2));

let arr = [1, 2, 3];
console.log(arr);

const piramis = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 0) return arr[0]; {
      arr[i] = [i] + [i + 1];
      arr[i + 1] = [i + 2] + [i + 3];
    }
  }
};

{
  process.stdout.write(stepSum(i) + ' ');
}
