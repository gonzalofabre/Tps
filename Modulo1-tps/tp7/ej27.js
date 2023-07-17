// Escribir una función llamada numerosAPalabras que reciba un arreglo de 
// números (cada número en el rango de 0 a 0) y 
// retorne un nuevo arreglo convirtiendo cada número a su versión en palabras.

function numerosAPalabras(array) {
    const nuevoArray = [];
  
        function convertir (numero) { //esta funcion transcribe en palabra cualquier numero del 0-100

            const unidades = ['cero', 'uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve'];
            const decenas = ['','','veinte','treinta','cuarenta','cincuenta','sesenta','setenta','ochenta','noventa'];
            const otro = ['diez', 'once', 'doce','trece','catorce','quince','dieciseis','diecisiete','dieciocho','diecinueve'];
            const xx = 'veinti';
            const centena = 'cien';
        
        
            let resultado= '';
        
            if(numero < 10) {
                resultado = unidades[numero]
            } else if(numero < 20) {
                resultado = otro[(numero-10)]
            } else if(numero <30 && numero != 20) {
                resultado = xx + unidades[numero-20]
            } else if(numero <100) {
                    if(numero%10 == 0){
                    resultado = decenas[numero/10]
                    }   else    {
                        var decena = Math.floor(numero/10)
                        var unidad = Math.floor(((numero/10) - Math.floor(numero/10))*10)
                        resultado = decenas[decena] + ' y ' + unidades[unidad]
                    }
            } else if(numero == 100) {
                resultado = centena
            }
        return resultado
        }

    
        array.forEach(element => {
            let numeroConvertido = convertir(element);

            nuevoArray.push(numeroConvertido);
        });




    return nuevoArray;
}
console.log(numerosAPalabras([0, 1, 2, 3, 4,45,62,13,42])); //['cero','uno','dos','tres','cuatro','cuarenta y cinco','sesenta y dos','trece','cuarenta y dos']
console.log(numerosAPalabras([5, 6, 7, 8, 9])); // ["cinco", "seis", "siete", "ocho", "nueve"]