// Escribir una función llamada palabrasANumeros que reciba un arreglo de strings y retorne un nuevo 
// arreglo traduciendo cada palabra a su versión numérica (del 0 al 9). Si la 
// palabra no es un número traducir a -1.

function palabrasANumeros (array) {
    const palabras = ['cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve']
    let nuevoArray = []

    array.forEach(element => {
        if(array.includes(element)) {
            nuevoArray.push(palabras.indexOf(element))
        }
        
    });

    return nuevoArray;
}

console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])); // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])); // [5, 6, 7, 8, 9]