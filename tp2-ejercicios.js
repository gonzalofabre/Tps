console.log("EJERCICIO NUMERO 1");

const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);

if(numeroRandom%2 == 0) {
    console.log(numeroRandom, " es par");
} else {
    console.log(numeroRandom, " es impar");
};



// ejercicio 2
console.log("EJERCICIO NUMERO 2");

const palabra1 = "tren";
const palabra2 = "edificio";

if(palabra1.length>palabra2.length) {
    console.log('nuestra primera variable: "', palabra1, '" contiene más caracteres');
} else if(palabra1.length<palabra2.length) {
    console.log('nuestra segunda variable: "', palabra2, '" contiene más caracteres');
} else {
    console.log("Ambas variables contienen la misma cantidad de caracteres");
};




//ejercicio 3
console.log("EJERCICIO NUMERO 3");

for(let i=0; i<11; i++ ) {
    console.log(i*9);
};



//ejercicio 4
console.log("EJERCICIO NUMERO 4");

function multiplicar(a) {
    let resultado = a*23
    return resultado
};
let variable = multiplicar(10);
console.log(variable);



//ejercicio 5
console.log("EJERCICIO NUMERO 5");

let cantidadDeNumeros = 10;
let numeros = [];
function crearNumerosEntre(min, max) {
    return Math.floor(Math.random()*(max-min+1) + min);
}
while (numeros.length<cantidadDeNumeros) {
    numeros.push(crearNumerosEntre(1,1000));
}
console.log(numeros);