// Escribir una función llamada sumarRango que reciba dos argumentos: 
// número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

// Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.

function sumarRango (firstNum,lastNum) {
    if(firstNum>lastNum) {
        return 'Error'
    }else if(firstNum == lastNum) {
        return firstNum+lastNum
    }
    else{
        let resultado = 0
        for(i=firstNum;i<=lastNum;i++) {
            resultado = resultado+i

        };
        return resultado
    };
}

console.log(sumarRango(0, 10)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5)); // 0? 5 (si se incluyen los numeros debería ser 10)
