/*1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.
2. Esporta la funzione dal file.*/

// let hobby1 = 'Disegnare';
// let hobby2 = 'Fotografia';
// let hobby3 = 'Videogames';

// let hobbiesArray = [];

// hobbiesArray.push(hobby1, hobby2, hobby3);
// console.log(hobbiesArray);


//creo una funzione che accetta tre parametri e ritorni un array di stringhe che raccolgono gli hobby
function hobbiesList(hobbyOne, hobbyTwo, hobbyThree){
    let hobbiesArray = [];
    hobbiesArray.push(hobbyOne, hobbyTwo, hobbyThree); 
    return hobbiesArray;
}

//esporto la funzione in people.js

module.exports = {
    hobbiesList
};