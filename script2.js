//petlje

"use strict";

/* console.log("gol 1 ⚽");
console.log("gol 1 ⚽");
console.log("gol 1 ⚽");
console.log("gol 1 ⚽");
console.log("gol 1 ⚽");
console.log("gol 1 ⚽");
console.log("gol 1 ⚽");
console.log("gol 1 ⚽");

for (let ponavljanje = 1; ponavljanje <=10; ponavljanje++) {
    console.log(`gol ${ponavljanje} ⚽`);
} */

/* const igorLista = [
    'Igor',
    'Jevremovic',
    1983,
    'Samsvojrob',
    ['Marko','Luka','Ivan']
];

//const types[];

for (let i = 0; i< igorLista.length;i++){
    console.log(igorLista[i], typeof(igorLista[i]))
} */

//arrays nesto
/* const godine = [1991,2007,1959,1987]

const dob = [];

for (let i = 0; i<godine.length;i++){
    dob.push(2022-godine[i]);
}

console.log(dob); */

/*  const igorLista = [
    'Igor',
    'Jevremovic',
    1983,
    'Samsvojrob',
    ['Marko','Luka','Ivan']
];
 */

//break and continue
/* 
for (let i = 0; i<igorLista.length;i++) {
    if(typeof igorLista[i] !== 'string') continue;
        console.log(igorLista[i],typeof(igorLista[i]));
}

for(let i =0; i< igorLista.length;i++) {
    if (typeof igorLista[i] === 'number')break;
    console.log(igorLista[i], typeof igorLista[i]);
} */

//petlja unutar petlje
/* for (let i = igorLista.length = 1; i>= 0; i--){
    console.log(igorLista[i]);
}

for (let vjezba = 1; vjezba <4; vjezba++){
    console.log(`------kreće vježba ${vjezba} ------------`);

    for(let ponavljanje = 1; ponavljanje<6;ponavljanje++){
     console.log(`vjezba ponavljanja ${ponavljanje}`);   
    }
} */

//while

for(let i = 1; i <= 10; i++){
    console.log(`dizemo uteg ${i} puta`);
}

let i = 1;while (i<=10) {
    console.log(`dizemo uteg ${i} puta`);
}

let kocka = math.random() * 6 +1;
console.log(kocka);

while (kocka !==6){
    console.log(`Dobio si ${kocka}`);
    kocka = Math.trunc(Math.random()) * 6) + 1;
    if (kocka === 6) console.log(`Dobio si ${kocka}`);
}