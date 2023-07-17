// Escribir una función llamada terminanConS que reciba un arreglo de strings y 
// retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula).

function terminanConS(array) {
    let newArray = [];

    array.forEach(element => {
        if(element.endsWith('s') || element.endsWith('S')) {
            newArray.push(element);
        }
        
    });

    return newArray
};

console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])); // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])); // []
console.log(terminanConS([])); // []