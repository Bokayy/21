"use strict"

/* const ekipa1 = [112,89,95];
const ekipa2 = [85,108,98];

const calcAverage = (a,b,c) => (a+b+c)/3;
const scoreReal = calcAverage(ekipa1[0], ekipa1[1], ekipa1[2]); 
const scoreBarca = calcAverage(ekipa2[0], ekipa2[1], ekipa2[2]); 

console.log(scoreReal, scoreBarca);

const checkWinner = function(avgReal,avgBarca){
    if(avgReal >= (avgBarca)*2){
        console.log(`Real wins with ${avgReal} to ${avgBarca}`);
    }
    else if(avgBarca >= (avgReal)*2){
        console.log(`Barca wins with ${avgBarca} to ${avgReal}`); 
    }
    else {
        console.log("nema pobjednika xd");
    }
}

checkWinner(scoreReal,scoreBarca); */

/* const prijatelji = ["igor", "luka", "marko"]; */

/* prijatelji.push("Matija");
console.log(prijatelji);

//removes the last element
prijatelji.pop();
console.log(prijatelji);

//removes the first element
prijatelji.shift();
console.log(prijatelji); */

//returns -1 because Josip isn't in the array
/* console.log(prijatelji.indexOf("Josip"));
console.log(prijatelji.indexOf("marko"));

//includes returns either true or false
console.log(prijatelji.includes("Josip"));
console.log(prijatelji.includes("luka")); */

/* Joža želi napraviti jednostavna kalkulator za napojnice.
 U njegovoj zemlji je uobičajeno dati 15% za napojnicu ako
 je račun između 50 i 300. Ako je vrijednost drugačija, 20%
 
 Izračunaj napojnicu ovisno o veličini računa. Nparavi funkciju koja računa napojnicu.
 
 napravi listu koja će koristiti podatak dolje koje ćemo koristiti:
 testni podatci: 125,555,44
 
 Napravite listu napojnice koja će sadržavati value napojince za svaki račun
,vrijednosti koje ste dobili koristeći funkciju za izračun napojnica
 
 napravi listu sa ukupnim izmosima, znači račun + napojnica (total)
 
 tip:svaka lista treba vrijednosti na svakom polju i svaka vrijednost noze biti return vrijednost funkcije
 ne mozete samo nazbvati funkciju sa vrijednostima liste. Stoga ne spremajte vrijednosti
 napojnice u posebne varijable prvo nego direkt u novu listu*/

/*  function napojnicaCalc(iznos){
     if(iznos >=50 &&  iznos <=300){
         return (iznos* 0.15);
     }
     else{
         return (iznos*0.2);
     }
 }

const racuni = [125,555,44]

function rezultat(iznosRacuna){
    for(let i = 0; i <racuni.length; i++){
        console.log(`Napojnica za racun ${i} iznosa ${iznosRacuna[i]} je ${napojnicaCalc(racuni[i])}`);
    }
}

rezultat(racuni);
*/
// const igorLista=["Igor", "Jevremovic",2022-1983,"Samosvojrob"];

// /* Object literal syntax */

// const igor = {
//     firstName: 'Igor',
//     lastName: 'Jevremović',
//     godine: 2022-1983,
//     zanimanje: 'Samosvojrob'
// }

// //dot notation
// console.log(igor.firstName);

// //bracket notation
// console.log(igor["lastName"]);

// //dot notation nam ne daje mogućnost spajanja više dijelova objekta, sa brackets mozes

// const nameKey = "Name";

// console.log(igor['first'] + "nameKey");
// //fascinating execution order

// //dodavanje elemenata u objekt je moguće
// igor.hobij = "ribolov";
// console.table(igor);

/* const igor = {
    firstName: 'Igor',
    lastName: 'Jevremović',
    godinaRodenja: 1983,
    zanimanje:"samsvojrob",
    prijatelji:["Marko","Luka","Ivan"],
    vozacka:true,
    //object member
    starost:function (godinaRodenja) {
        return 2022-godinaRodenja;
    },
}; */

//console.log(igor.starost(1988));
//same thing
//console.log(igor["starost"](1988));

//doesn't work
//igor[sigmagrindset] = true;

//you can only add new object parameters using dot notation
/* igor.sigmagrindset = true;
console.log(igor.sigmagrindset); */

/* usage of this */
/* const igor = {
    firstName: 'Igor',
    lastName: 'Jevremović',
    godinaRodenja: 1983,
    zanimanje:"samsvojrob",
    prijatelji:["Marko","Luka","Ivan"],
    vozacka:true,
    //object member
    starost:function () {
       //ispisi objekt cijeli: console.log(this);
       //ispisi dob
        return 2022 - this.godinaRodenja;
    },
};
console.log(igor.starost());

console.log(igor.starost());
console.log(igor.starost());
console.log(igor.starost());
console.log(igor.starost());
console.log(igor.starost());
 */


// const igor = {
// firstName: 'Igor',
// lastName: 'Jevremović',
// godinaRodenja: 1983,
// zanimanje:"SamSvojRob",
// prijatelji:["Marko","Luka","Ivan"],
// vozacka:true,
// //object member
// starost:function () {
//   //bržije nego prošla metoda
//   /* u ovom retku dob bude dodan kao parametar objektu */
//     this.dob = 2022 - this.godinaRodenja;
//     return this.dob;
// },
// zadatak: function(){
//     return `${this.firstName} je ${this.starost()}-godišnji ${
//         this.zanimanje
//     } i ${this.vozacka ? 'ima' : 'nema'} vozačku dozvolu`;
// }
// };
// //bržije je izvođenje kada koristimo this unutar objekt member f-ije iz nekog razloga
// console.log(igor.starost());

// console.log(igor.dob);

// console.log(igor.zadatak());

/* Marko i Josip BMI
BMI = masa/visina **2

za svakog kreirajte objekt sa vrijednostima:
ime, težina, visina.
Kreirajte calcBIM metodu na svakom od njih koji će izračunati BMI(ista metoda za oba objekta
    
spremi BIM izračun u vrijednost objekta i vrati ga iz metode (return)

logiraj u console tko ima viši BMI skupa sa imenom i BMI vrijednosti

npr. Josipov BMI (28.3) je veći od Markovog BMI-a (26)

testni podatci: 
marko: 78kg, 1.69m
Josip: 92kg i 1.75m*/

/* //izbrijavanje
 class osoba {
     constructor(ime, tezina, visina, BMI) {
             this.ime = ime,
            this.tezina = tezina,
            this.visina = visina,
            this.BMI = BMI;
         function _BMI(v, t) {
             return (t / v) ** 2;
         }
     }
 }

 const marko = new osoba();
marko.ime = "Marko";
marko.tezina = 78;
marko.visina = 1.69;
marko.BMI = osoba._BMI(visina,tezina);

console.table(marko);

 */
const osoba = {
    ime: String(),
    tezina: Number(),
    visina: Number(),
    bmi: Number(),
    calcBMI: function(){
        this.bmi = (weight / height)**2;
        return this.bmi;
    }
}

/* function calcBMI(v, t) {
    return(t/v)**2;
} */

let marko = Object.create(osoba);
marko.ime = "Marko";
marko.tezina = 78;
marko.visina = 1.69;
marko.calcBMI;
//marko.bmi = calcBMI(marko.visina,marko.tezina);

/* const marko = Object.create(osoba);
marko.ime = "Marko";
marko.tezina = 78;
marko.visina = 1.69;
 */
console.table(marko);



//profesorovo rjesenje
/* const marko = {
    ime: "marko",
    tezina: 78,
    visina: 1.69,
    calcBMI: function () {
        this.bmi = this.tezina/this.visina **2;
        return this.bmi;
   },
}

const josip = {
    ime: "josip",
    tezina: 92,
    visina: 1.95,
    calcBMI: function () {
        this.bmi = this.tezina/this.visina **2;
        return this.bmi;
    },
}

marko.calcBMI();
josip.calcBMI();
console.table(marko.bmi, josip.bmi);

if (marko.bmi > josip.bmi){
    console.log(`${marko.ime}-ov od ${marko.bmi} BMI je visi od ${josip.bmi}-ovog BMi od ${josip.bmi}`);
}
else {
    console.log(`${marko.ime}-ov od ${marko.bmi} BMI je visi od ${josip.bmi}-ovog BMi od ${josip.bmi}`);
} 
*/