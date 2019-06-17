let name = 'Feri'; // Globális láthatósági tartoányban lévő változó
const hello = (name) => {
  let c = 'cica';
  console.log('Hello', name);
};

hello('Géza');
console.log(name)
;

if (name === 'Feri') {
  let c = 10;
}

console.log(c); // Hibára fut
