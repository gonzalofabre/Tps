// Número de asteriscos en una matriz
// Escribir una función llamada numAsteriscos que reciba 
// una matriz (un arreglo de arreglos) y 
// retorne el número de asteriscos:

function numAsteriscos(matriz){
    let num = 0;

    matriz.forEach(array => {
            array.forEach(element => {
                if(element == '*') {
                    num++
                }
            })       
    });

    return num;
};

console.log(
    numAsteriscos([
      ["*", "", "*"],
      ["", "*", ""],
      ["*", "", "*"],
    ])
  );
  // 5