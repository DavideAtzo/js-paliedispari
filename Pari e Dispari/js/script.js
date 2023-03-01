'use strict';

// variabile che conterrà la risposta dell'utente 
let risposta = '';
let rispostaNum = '';
// chiedi con prompt la sua scelta pari o dispari
do {
    risposta = prompt('Scrivi la tua scelta tra pari o dispari ');
}
// WHILE se la risposta non contiene pari e dispari continua a chiedere
while (risposta != 'pari' && risposta != 'dispari');
console.log(risposta);

let numGiocatore = '';
// chiedi con prompt un numero da 1 a 5
do {
    numGiocatore = prompt('Scegli un numero da 1 a 5 ');
}
// WHILE se il numero scelto non è compreso tra quelli sotto citati, continua  a chiedere
while (numGiocatore <= 1 || numGiocatore > 5);
console.log(numGiocatore);

// numero random per il computer 
function pcNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  let numeroComputer =  pcNumero(1, 5);
  console.log(numeroComputer);
  pcNumero();


  