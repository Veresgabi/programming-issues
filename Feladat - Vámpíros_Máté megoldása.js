let samTar = 8;
let noDb = 3;
let noHp = 2;
let himDb = 8;
let himHp = 4;
while (samTar > 0) {
   if (samTar > noHp && noDb > 0) {
       samTar -= noHp; // samTar = samTar - noHp;
       noDb--; // noDb = noDb - 1;
   }
   if (noDb == 0 && samTar > himHp && himDb > 0) {
       samTar -= himHp;
       himDb--;
   }
   if (noDb == 0 && samTar < himHp || samTar < noHp) {
       console.log(samTar);
       break;
   }
}

console.log('Szükséges volt-e Castiel közbelépése?');

if (samTar >= noDb * noHp) {
    console.log('Nem volt szükség Castiel közbelépésére')
}
    else {
        console.log('Szükség volt Castiel közbelépésére');
    }

console.log('Mekkora esélye (%) volt Castielnek arra, hogy baja essen?');


console.log('Sam vagy Dean lőtt le több vámpírt, ha Deannek minden harmadik lövése félrement a sok wiskeytől?');

if ([40 - 40%3] / 3 > 24) {
    console.log('Dean lőtt le több vámpírt');
}
else {console.log('Sam lőtt le több vámpírt');
}

console.log('Ha Dean küldött a purgatóriumba több vámpírt, elérte-e a többlet a 10%-ot Dean-éhez képest?');
console.log('Ha megjelenik a csetepaté végén Crowley, a keresztúti démon, marad-e elég golyó a számára? 5x annyi kell neki mint az alfának.');
console.log('Hány hete néz folyamatosan Supernatural-t Tasi, ha most tart az S8E18-nál és napi átlag 5 rész lecsúszik, de hétvégén 10 is.');