'use strict';

// variabile che conterrà la risposta dell'utente 
let risposta = '';
// chiedi con prompt la sua scelta 
do {
    risposta = prompt('Scrivi la tua scelta tra pari o dispari ');
}
// WHILE se la risposta non contiene pari e dispari continua a chiedere
while (risposta != 'pari' && risposta != 'dispari');
console.log(risposta);