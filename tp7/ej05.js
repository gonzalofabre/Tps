// Escribe una función llamada likes que reciba un número y retorne un 
//string utilizando el formato de K para miles y M para millones.

// Por ejemplo:

// 1400 se convierte en 1K
// 34,567 se convierte en 34K
// 7’456,345 se convierte en 7M.
// Si el número es menor a 1000 se debe devolver el mismo número como un string.

function likes (numero) {
    let k = 1000
    let M = 1000000
    
    if(numero<k) {
        return numero
    }else if(numero<M) {
        return Math.floor(numero/k) + 'K'
    }else{
        return Math.floor(numero/M) + 'M'
    }
};

console.log(likes(983)); // "983"
console.log(likes(1900)); // "1K"
console.log(likes(54000)); // "54K"
console.log(likes(120800)); // "120K"
console.log(likes(25222444)); // "25M"