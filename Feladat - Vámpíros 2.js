console.log('Sam és Dean Winchester egy vámpírtanya kiírtására készülnek Missouri állambeli Green Ridge külvárosában.Bobby információi szerint 12 vámpír tanyázik az elhagyott pajtában, ebből 3 nő, egy pedig alfa. Egy hím vámpírt 4 ezüstgolyó terít le. A nőket fele ennyi. Az alfát viszont a háromszora a férfinak. Samnek 3 tára van táranként 8 golyóval, Dean felkészültebb, 4 darab 10 töltényes tárral érkezett hentelni. A megbeszéltek szerint Castiel a segítségükre siet, ha kifogynak a munícióból. Castiel egy angyal, szinte halhatatlan, de egy kis esélye, 3%-a minden általa elpusztított vámpír esetén van, hogy megsérül.');

const vampire = 12;
const womenvampire = 3;
const alphavampire = 1;
const manvampire = vampire - womenvampire - alphavampire;

const killmanvampire = 4;
const killwomenvampire = killmanvampire / 2;
const killalphavampire = killmanvampire * 4;

const Samguns = 3 * 8;
const Deanguns = 4 * 10;
const Allguns = Samguns + Deanguns

let Vampirno = womenvampire;
let Alfavampir = alphavampire;
let Ferfivampir = manvampire;

let Vampirnomeghal = killwomenvampire;
let Vampirferfimeghal = killmanvampire;
let Vampiralfameghal = killalphavampire;
let osszesszuksegestolteny = killalphavampire + killmanvampire + killwomenvampire;

let Samtoltenyei = Samguns;
let Deantoltenyei = Deanguns;
let Osszestolteny = Allguns;


console.log('Vámpírnők, Alfavámpírok, Férfivámpírok:');

console.log(Vampirno, Alfavampir, Ferfivampir);

console.log('Vámpírnők, Alfavámpír, Férfivámpírok ennyi golyótól hal meg:');

console.log(killwomenvampire, killalphavampire, killmanvampire);

console.log('Hány tölténye volt Deannek?');
console.log(Deantoltenyei);
console.log('Hány tölténye volt Samnnek?');
console.log(Samtoltenyei);
console.log('Hány töltényük volt összesen?');
console.log(Osszestolteny);
console.log('Hány töltény kell egy női vámpír kivégzéséhez');
console.log(Vampirnomeghal);
console.log('Hány töltény kell az alfához?');
console.log(Vampiralfameghal);
console.log('Kinek volt több tölténye?');
if (Deantoltenyei > Samtoltenyei){
    console.log('Deannek volt több tölténye.')
    }
    else {
        console.log('Samnek volt több tölténye')
    }
console.log('Hány töltény szükséges az összes vámpír kivégzéséhez?');
console.log(osszesszuksegestolteny);
console.log('Ha minden golyó betalál, Samnek hány tölténye marad az egy tárral maximálisan lelőhető vámpírok után?');

while (Samtoltenyei > 0) {
   if (Samtoltenyei > Vampirnomeghal && Vampirno > 0) {
       Samtoltenyei -= Vampirnomeghal; // Samtoltenyei = Samtoltenyei - Vampirnomeghal;
       Vampirno--; // Vampirno = Vampirno - 1;
   }
   if (Vampirno == 0 && Samtoltenyei > manvampire && manvampire > 0) {
       Samtoltenyei -= Vampirferfimeghal;
       Ferfivampir--;
   }
   if (Vampirno == 0 && Samtoltenyei < Vampirferfimeghal || Samtoltenyei < Vampiralfameghal) {
       console.log(Samtoltenyei) 
       break;
    }

console.log('Ha minden golyó betalál, Deannek hány tölténye marad az egy tárral maximálisan lelőhető vámpírok után?');
console.log('Szükséges volt-e Castiel közbelépése?');
console.log('Mekkora esélye (%) volt Castielnek arra, hogy baja essen?');
console.log('Sam vagy Dean lőtt le több vámpírt, ha Deannek minden harmadik lövése félrement a sok wiskeytől?');
console.log('Ha Dean küldött a purgatóriumba több vámpírt, elérte-e a többlet a 10%-ot Dean-éhez képest?');
console.log('Ha megjelenik a csetepaté végén Crowley, a keresztúti démon, marad-e elég golyó a számára? 5x annyi kell neki mint az alfának.');
console.log('Hány hete néz folyamatosan Supernatural-t Tasi, ha most tart az S8E18-nál és napi átlag 5 rész lecsúszik, de hétvégén 10 is.');