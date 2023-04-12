// Escribir una función llamada duplicar que reciba un arreglo 
// de números y retorne un nuevo arreglo donde cada número 
// esté multiplicado por dos (2).

function duplicar (array) {
    let newArray = [];

    array.forEach(element => {

        newArray.push(element*2)
        
    });

    return newArray
}

// código de prueba
console.log(duplicar([1, 2, 3])); // [2, 4, 6]
console.log(duplicar([])); // []