//  Scrivi un programma che stampi in console i numeri da 1 a 100,
//  ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const grid = document.querySelector(".grid");
// PARTIAMO COL COSTRUIRE UN CIGLO DA 1 A 100.
for (let i = 1; i < 101; i++) {
  // CONTROLLO CHE IL NUMERO SIA DIVISIBILE PER 3 E PER 5, SE RISULTA FALSO, CONTROLLO PRIMA PER 3 E POI PER 5

  // PARTIAMO CON LA STAMPA
  let element = `<div class="box">${i}</div>`;

  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbazz", i);
    element = `<div class="box fizzbuzz">fizzbuzz</div>`;
    grid.innerHTML += element;
  } else if (i % 3 === 0) {
    console.log("frizz", i);
    element = `<div class="box fizz">fizz</div>`;
    grid.innerHTML += element;
  } else if (i % 5 === 0) {
    console.log("bazz", i);
    element = `<div class="box buzz">buzz</div>`;
    grid.innerHTML += element;
  } else {
    grid.innerHTML += element;
  }
}
