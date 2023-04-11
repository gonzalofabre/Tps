// Escribir una función llamada transcribir que reciba un 
// string (una cadena de ADN) y retorne otro string (su complemento ARN).

// Los complementos son los siguientes:

// G -> C
// C -> G
// T -> A
// A -> U

function transcribir (string) {
    let newString = "";

    for(i=0;i<string.length;i++){
        switch (string[i]) {
            case "G":
                newString = newString+'C'
                break;
            case "C":
                newString = newString+"G"
                break;
            case "T":
                newString = newString+'A'
                break;
            case "A":
                newString = newString+'U'
                break;
            default:
                break;
        };
    }
    return newString
};

// código de prueba
console.log(transcribir("ACGT")); // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")); // "UGCACCAGAAUU"