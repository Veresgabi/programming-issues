const generateArray = (size) => {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 15 + 1);
  }
  return arr;
};

const selectSort = (arr) => {
  let min = 0; // legkisebb elem indexe
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i; j < arr.length; j++) { // Min.keresés
      if (arr[j] < arr[min]) {
        min = j; // Ha kisebb elemet találtunk, elmentjük az indexét
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
};

let k = generateArray(10);
console.log(k);
selectSort(k);
console.log(k); /* azért nem tudjuk kiírni úgy a függvényt, h console.log(selectSort(k)), mert nincs visszatérési értéke
a függvénynek (nincs return) */

// Beszúrásos rendezés, a 2.elemtől indulhat, ezért a forban i = 1:
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) { // vizsgált elem
    let temp = arr[i]; // eltároljuk, mert valószínűleg felülfogjuk írni
    let j = i - 1; // Ciklust indítunk, amely lefelé halad a tömbben
    while (j >= 0 && arr[j] > temp) { // Amíg nem futottunk ki a tömbből és nem találtunk a vizsgáltnál kisebb elemet
      arr[j + 1] = arr[j]; // feljebb mozgatjuk a tömb elemeit eggyel
      j--; // Ciklusváltozó csökkentése
    }
    arr[j + 1] = temp; // Ha lefutott a teljes ciklus, akkor vagy a tömb elején vagyunk, vagy találtunk kisebb elemet, ezért elé beszúrjuk a temp-et
  }
};

let l = generateArray(10);
console.log(l);
insertionSort(l);
console.log(l);

// Buborékrendezés
const bubbleSort = (arr) => {
  let n = arr.length;
  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

let m = generateArray(10);
console.log(m);
bubbleSort(m);
console.log(m);
