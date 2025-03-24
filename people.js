/*1. Importa la tua funzione da names.js
2. Importa la tua funzione da hobbies.js
3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.*/


//importo la funzione creata in names.js
const personName = require('./names.js');

//console.log(personName.person('Nicola', 'Tesla'));


//importo la funzione creata in hobbies.js
const hobbiesList = require('./hobbies.js');

//console.log(hobbiesList.hobbiesList('disegnare', 'calcio', 'viaggiare'));

//creo una funzione che non ha parametri e restituisce un oggetto con due proprietà definite dalle funzioni precedenti
function personDetails() {
    let newObj = {
        //uso process.argv per inserire gli argomenti tramite terminale 
        fullName: personName.person(process.argv[2], process.argv[3]),
        hobbies: hobbiesList.hobbiesList(process.argv[4], process.argv[5], process.argv[6])
    }
    return newObj;
}

// console.log(process.argv);

//invoco la funzione
console.log(personDetails());

