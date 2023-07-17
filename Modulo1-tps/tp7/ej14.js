// Escribir una función llamada sumarArreglo que reciba tres argumentos: 
// un arreglo de números, la posición inicial y la posición final. 
// La función debe retornar la suma de todos los números dentro del rango 
// (la posición inicial y la posición final, incluyéndolas).

// Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final,
//  y que están dentro de los límites del arreglo.


function sumarArreglo (array, posInicial, posFinal){
    let resultado = 0;
    if(posFinal<posInicial) {
        return 'Error'
    }
    else if(posInicial == posFinal) {
        return 0
    }else {
        for(i=posInicial;i<=posFinal;i++){
            resultado = resultado + array[i]
        }
    }
    return resultado;
}
// código de prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)); // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)); // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)); // 0