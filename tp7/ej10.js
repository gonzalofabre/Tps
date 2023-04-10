// Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter).
//  La función debe retornar el número de veces que aparece el caracter en el string.

function numeroDeCaracteres(string, caracter) {
    let resultado = 0;
    for(i=0;i<string.length;i++) {
        if(string[i] == caracter) {
            resultado++
            
        }
    }
    return resultado;
}

console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m")); // 0
console.log(numeroDeCaracteres("eeee", "e")); // 4