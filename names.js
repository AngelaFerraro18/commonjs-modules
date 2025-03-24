/*1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
2. Esporta la funzione dal file.*/

// let nome = 'Angela';
// let cognome = 'Ferraro';

// const persona = {
//     nome,
//     cognome
// };
// console.log(persona);


//creo una funzione che accetti due parametri e restituisce un oggetto con le proprietà firstName e lastName
function person(firstName, lastName) {
    let completeName = {
        firstName,
        lastName
    }
    return completeName;
}

//esporto la funzione in people.js
module.exports = {
    person
};