let myKm = parseFloat(prompt('inserisci KM da percorrere'));
document.getElementById('Km').innerHTML = myKm
// console.log(myKm);

let myAge = parseInt(prompt('inserisci la tua età'));
document.getElementById('Età').innerHTML = myAge
// console.log(myAge);

let prezzo = myKm * 0.21;
console.log(prezzo);

let sconto = 0;
if (myAge < 18){
    sconto = prezzo * 20 / 100
}
if (myAge > 65){
    sconto = prezzo * 40 / 100
}
// console.log(sconto);

let prezzoFinale = (parseFloat (prezzo - sconto)).toFixed(2) + ' €';
document.getElementById('Prezzo-finale').innerHTML = prezzoFinale
// console.log(prezzoFinale);
