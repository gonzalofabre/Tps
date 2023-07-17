// Escribir una función llamada numAsteriscos que 
// reciba un arreglo y retorne el número de asteriscos:

function numAsteriscos(array) {
    let num = 0;

    array.forEach(element => {
        if(element == '*') {
            num++
        }
        
    });

    return num;
}
// código de prueba
console.log(numAsteriscos(["", "*", "", "*"])); // 2
console.log(numAsteriscos(["*", "*", "*"])); // 3
console.log(numAsteriscos([])); // 0