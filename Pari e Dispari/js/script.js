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
    numGiocatore = Number(prompt('Scegli un numero da 1 a 5 '));
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

//   somma dei numeri giocatore e computer 
  const risultato = numGiocatore + numeroComputer;
  console.log(risultato);

// funzione che controllerà se la somma (risulato) è pari o dispari 
function controllo(risultato){
    if(risultato % 2 === 0){
        return 'vero';
    }
    return 'falso';
}
const verdetto =  controllo(risultato);
// condizione che va a richiamare la funzione del verdetto 
if(risposta === verdetto){
    console.log('hai vinto');
} else{
    console.log('ahahah hai perso');
}