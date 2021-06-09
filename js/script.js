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

  