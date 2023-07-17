// Escribir una función llamada empiezanConA que reciba un arreglo de strings 
// y retorne un nuevo arreglo con todas las palabras 
// que empiecen por "a" (mayúscula o minúscula).


function empiezanConA(array) {
    let newArray = [];
    array.forEach(element => {

        if(element.charAt(0) == 'a' || element.charAt(0) == 'A') {
            newArray.push(element);
        }
        
    });

    return newArray;
}

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])); // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])); // []
console.log(empiezanConA([])); // []