let myKm = parseFloat(prompt('inserisci KM da percorrere'));
console.log(myKm);

let myAge = parseInt(prompt('inserisci la tua età'));
console.log(myAge);

let prezzo = myKm * 0.21;
console.log(prezzo);

let sconto = 0;
if (myAge < 18){
    sconto = prezzo * 20 / 100
}
if (myAge > 65){
    sconto = prezzo * 40 / 100
}
console.log(sconto);

let prezzoFinale = prezzo - sconto 
console.log(prezzoFinale);
