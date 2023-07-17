// Escribir una función llamada posiciones que reciba un 
// arreglo de números y retorne un nuevo arreglo con las posiciones donde 
// se encuentran números pares.

function posiciones(array) {
    let newArray = [];

    array.forEach((element, indice) => {
        if(element%2 == 0) {
            newArray.push(indice)
        }
        

    });
    return newArray
}

console.log(posiciones([1, 2, 3, 4, 5, 6])); // [1, 3, 5]
console.log(posiciones([])); // []