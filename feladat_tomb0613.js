let arr1 = [8, 1, 2, 3, 4, 5, 6, 7];
let arr2 = [98, 111, 576, 81, 118, 286];

const maxArray = (arr1) => {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > max && arr1[i] % 3 === 0) {
      max = arr1[i];
    }
  }
  return max;
};

console.log('Az 1.tömb 3-mal osztható maximuma: ', maxArray(arr1));

const minArray = (arr2) => {
  let min = Number.POSITIVE_INFINITY;
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < min && arr2[i] % 2 === 0) {
      min = arr2[i];
    }
  }
  return min;
};

console.log('A 2.tömb 2-vel osztható minimuma: ', minArray(arr2));

const diff = (minArray, maxArray) => {
  return Math.abs(maxArray(arr1) - minArray(arr2));
};

console.log('Az 1.tömb maximumának és a 2.tömb minimumának a különbsége: ', diff(minArray, maxArray));
