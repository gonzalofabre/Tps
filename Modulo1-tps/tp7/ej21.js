// Escribir una función llamada pares que reciba un arreglo de números 
// y retorne un nuevo arreglo con los números pares únicamente.

function pares(array) {

let pares = array.filter(num => num%2 == 0 )

return pares


}

// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(pares([])); // []