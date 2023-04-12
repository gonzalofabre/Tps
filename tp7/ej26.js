// Escribir una función llamada imprimirMatriz que reciba una matriz 
// (un arreglo de arreglos) e imprima todos los elementos del arreglo.

function imprimirMatriz(matriz) {

    newArray = [];
    matriz.forEach(array => {
        array.forEach(element => {
            newArray.push(element)
        })


        
    });

    return newArray.join('\n')
}

console.log(
    imprimirMatriz([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]));