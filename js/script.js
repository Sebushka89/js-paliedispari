/*Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
*/

function checkPalindroma(str){
  var strInversa = str.split('').reverse().join('');  
  return strInversa;
}

var parola = prompt('inserisci qua la tua parola');

var parolaInversa = checkPalindroma(parola);

if(parola == parolaInversa){
    document.getElementById('pali').innerHTML='La parola è palindroma';
  } else {
    document.getElementById('non_pali').innerHTML='La parola non è palindroma';
  }
  
/*  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  Sommiamo i due numeri.
  Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  Infine, dichiariamo chi ha vinto.*/

var scelta =  prompt('inserisci qua la tua scelta, se PARI o DISPARI');
console.log(scelta);

var numeroUtente = parseInt(prompt('inserisci qua la tua scelta, tra 1 e 5'));
console.log(numeroUtente);

function getRandomNumber(min, max) {
  var numRandom = Math.floor(Math.random()* (max - min + 1) + min);
  return numRandom;
} 

var random = getRandomNumber(1, 5);
console.log(random);

document.getElementById('sceltaPc').innerHTML = random;

function add(num1, num2) {
  var result = num1 + num2;
  return result;
}

var totale = add(random, numeroUtente);


console.log(totale);
if(totale % 2 == 0 && scelta == 'pari' ){
  document.getElementById('esitoGara').innerHTML = 'Hai vinto';
} else if(totale % 2 != 0 && scelta == 'dispari' ){
  document.getElementById('esitoGara').innerHTML = 'Hai vinto';
} else{
  document.getElementById('esitoGara').innerHTML = 'Hai perso!';
  console.log('hai perso');
}