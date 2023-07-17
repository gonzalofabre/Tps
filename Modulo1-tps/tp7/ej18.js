// Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

// Nota: Intentarlo hacer sin el método Math.max de JavaScript.

function max (array) {
 array.sort((a, b) => b-a );

 return array[0];
}

// código de prueba
console.log(max([3, 9, 6])); // 9
console.log(max([67, 35, 54, 26])); // 67
console.log(max([5, 9, 2, 4, 5, 7])); // 9