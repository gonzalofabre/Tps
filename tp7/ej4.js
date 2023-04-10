//Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:

function imprimirArreglo(array) {
    array.forEach(element => {
        console.log(element)
    });
}
let array = [1, "Hola", 2, "Mundo"]
imprimirArreglo(array);
// 1
// Hola
// 2
// Mundo
