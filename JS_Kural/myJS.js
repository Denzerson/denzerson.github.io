//1.1a)
console.log('Deniz Kural');

//1.1b)
let foo = 'Hallo';
let bar = foo;
console.log(bar);

//1.1c)
// Alle Variablennamen sind gültig außer: 1life, 123, 733t, const

//1.1d)
//Das Wort: Zweiundvierzig 

/*1.1e)
Backticks sind Vorlagenliterale: Durch Interpolation werden Daten eingesetzt
Hier wird der Text dort eingefügt, wo "text" steht
Man kann auch Expressions ausdrücken
*/
let text = String(42);
console.log(`Hello ${text}`);

//1.1f)
console.log("2" + "2");  //Hier wurden die Zahlen nicht geparsed: 2 Strings zusammen: "22"
console.log("2"*"2");  //hier wurden die Zahlen automatisch geparst: Ergebnis=2

//1.1g) Weil ein Buchstaben nicht direkt in Zahlen übersetzt werden können, ist das Ergebnis NaN
let bInput = Number("Hallo");
console.log(bInput);

/*1.1h) Es kommt NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaN Batman! raus, weil
der Seperator "lol"-2 ist, was keine Bedeutung für den Compiler hat, weil er eine
Zahl erwartet, wenn -2 nach "lol" steht*/
console.log(Array(16).join("lol" - 2) + " Batman!");

//1.1i) Solange die Werte gleich sind, ist es true
let v1 = "123";
let v2 = "123";
let v3 = "HaHa";
let v4 = "HaHa";

if(v1==v2)
    console.log("true");
if(v3==v4)
    console.log("true");


//1.1j) und k)
let alter = prompt('Wie alt sind Sie?','');

if (alter < 13 && Number(alter)!="NaN") {
    console.log('Sie sind ein Kind');
} else if (alter <= 19 && Number(alter)!="NaN") {
    console.log('Sie sind ein Teenager.')
} else if(alter > 19 && Number(alter)!="NaN") {
    console.log('Sie sind erwachsen.')
} else if(alter > 25 && Number(alter)!="NaN"){
    console.log('Sie sind alt');
} else {
    console.log('Falsche Eingabe');
}

//1.1l) Es wird 1,2,6,24,120 ausgegeben, bei jeder Wiederholung steigert sich der Faktor um 1 und diese Zahl
// wird mit dem vorherigen Ergebnis multipliziert

//1.1m)
let input1 = prompt('Zahl eingeben','');
let i1 = 0;
while(i1<=input1) {
    console.log(i1);
    i1++;
}

//1.1n)
let n1 = 0
let n2 = 1
let n;
let input2 = parseInt(prompt('Grenze eingeben',''));
console.log("Fibanocci");
while(n1 <= input2) {
    console.log(n1);
    n = n1 + n2;
    n1 = n2;
    n2 = n;
}

//1.1o) bei i=2 wird wiederholt ausgeführt mit i=3, und das Listing geht nur bis 100 
//weil i=10 ist, aus der Klammer rausgegangen wird
for (let i = 0; i < 10000; i++) {
    
    if (i*i > 100)
    break;
    if (i == 2)
    continue;
    
    console.log(i*i);
}

//1.1p)
let resultat = 1;
for(let i = 1; i<=5; i++) {
    resultat = resultat * i;
}
console.log("Das Resultat: "+resultat);