'use strict';

// prompt per chiedere la parola all'utente 
const inputParola = prompt("Inserisci una parola");
console.log(inputParola);
// funzione che stabilirà se la parola inserita dall'utente è palindroma o no 
function isPalindroma(parola) {
    // variabile vuota che conterrà inputParola inversa 
    let palindroma = '';
    // ciclo che toglierà lettera per lettera alla parola 
    for (let i = parola.length - 1; i >= 0; i--) {
      palindroma += parola[i];
      console.log(palindroma);
    }
    return palindroma;
  }
// condizione che mette a confronto le "2" parole (una inversa e una normale) 
  if (inputParola === isPalindroma(inputParola)) {
    console.log(isPalindroma(inputParola));
    alert("la parola è palindroma");
  } else {
    alert("la parola non è palindroma");
  }
