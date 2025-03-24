/*1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
2. Esporta la funzione dal file.*/

// let nome = 'Angela';
// let cognome = 'Ferraro';

// const persona = {
//     nome,
//     cognome
// };
// console.log(persona);

function person(firstName, lastName){
    let completeName = {
        nome: firstName,
        cognome: lastName
    }
    return completeName;
}

console.log(person('Angela', 'Ferraro'));

