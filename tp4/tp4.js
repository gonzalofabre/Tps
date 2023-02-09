const readlineSync = require("readline-sync");

// TP 4 !!!
//Ejercicio 1
console.log("--------EJERCICIO 1 ------- \n\n");

let nombre = readlineSync.question("Ingrese su nombre: \n");
console.log(`¡Hola ${nombre}!`);

//Ejercicio 2

console.log("--------EJERCICIO 2 ------- \n\n");

let objeto = {
    nombre: readlineSync.question("Ingrese su nombre: "),
    apellido: readlineSync.question("Ingrese su apellido: "),
    edad: readlineSync.question("ingrese su edad: ")
}

console.log(objeto);

//Ejercicio 3

console.log("--------EJERCICIO 3 ------- \n\n");

let lacteos = ["Leche", "Queso", "Yogurt"];
let carne = ["Pollo","Cerdo","Res","Pescado"]

function buscarElemento(a,b) {
   let posicion = a.indexOf(b);
  return console.log("Elemento encontrado en la posición " + posicion);
}
buscarElemento(lacteos,"Queso");
buscarElemento(carne,"Pescado");
buscarElemento(lacteos,"Yogurt");
buscarElemento(carne,"Pollo");

//Ejercicio 4

console.log("--------EJERCICIO 4 ------- \n\n");

let array = [1,15,24,"Casa",36,4890,"Perro",3,2,39];
console.log("Esta es la lista \n", array);

array.reverse();
console.log("Esta es la lista invertida: \n", array);


