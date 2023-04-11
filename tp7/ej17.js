// Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:

function capitalizar(str) {
    let array = str.split(' ')
    let newString = "";
    array.forEach(word => {
        let newWord = word.charAt(0).toUpperCase() + word.slice(1);
        newString = newString + ' ' + newWord

        
    });

    return newString
}
// código de prueba
console.log(capitalizar("hola mundo")); // "Hola Mundo"
console.log(capitalizar("make it real")); // "Make It Real"
console.log(capitalizar("")); // ""