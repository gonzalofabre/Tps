// Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":

function numeroDeAes(string) {
    let numerodeA = 0;

    for(i=0;i<string.length;i++){
        if(string[i].toLowerCase() =='a' || string[i].toLowerCase == 'á'){
            numerodeA++
        };
    };
    return numerodeA;
};

// código de prueba
console.log(numeroDeAes("abracadabra")); // 5
console.log(numeroDeAes("etinol")); // 0
console.log(numeroDeAes("")); // 0