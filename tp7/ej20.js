// Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:

// Las mayúsculas se reemplazan por minúsculas.
// Se eliminan los espacios en blanco.
// Reemplaza el caracter “a” por “4”.
// Reemplaza el caracter “e” por “3”.
// Reemplaza el caracter “i” por “1”.
// Reemplaza el carater “o” por “0”.


function password (string) {
    let array = [];
    let arrayInvertido = []
    let newString = ''

    for(i=0;i<string.length;i++){
        array.push(string[i]);
    }

    array.forEach((element) => {
    
         if(element === element.toUpperCase() && element != ' ') {
            arrayInvertido.push(element.toLowerCase());
        }else if(element === element.toLowerCase() && element != ' '){
            arrayInvertido.push(element.toUpperCase());
        }
    })

    arrayInvertido.forEach(element => {
        switch (element) {
            case "a":
                newString = newString+"4"
                break;
            case "A":
                newString = newString+"4"
                break;
            case "e":
                newString = newString+"3"
                break;
            case "E":
                newString = newString+"3"
                break;
            case "i":
                newString = newString+'i'
                break;
            case "I":
                newString = newString+'i'
                break;
            case "o":
                newString = newString+'0'
                break;
            case "O":
                newString = newString+'0'
                break;
            default:
                newString = newString+ element
                break;
        }
    })

    return newString
}

console.log(password("hola")); // "h0l4"
console.log(password("esta es una prueba")); // "3st43sun4pru3b4"
console.log(password("")); // ""