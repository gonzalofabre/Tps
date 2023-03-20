const array = [4,6,"5","7"]

function sumaArreglo(array) {
    let suma = 0
    array.forEach(element => {
        suma = suma + Number(element)
    });
return suma
}

console.log(sumaArreglo(array));