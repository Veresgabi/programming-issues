const palindrom = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str === /[^A-Za-z0–9]/g) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(palindrom('indul a görög aludni'));

function palindrome (str) {
  str = str.toLowerCase();
  str = str.replace(',', '');
  str = str.replace('.', '');
  str = str.replace(':', '');
  str = str.replace(';', '');
  str = str.replace('-', '');
  str = str.replace(',', '');
  str = str.replace(' ', '');
  for (var i = 0; i <= (str.length / 2); i++) {
    if (str[i] != str.length - i) return false;
  }
  return true;
}

let str = 'indul a görög aludni';
console.log(palindrome(str));
