const vocales = "aáeéiíoóuú"

const esVocal = (letra) => {
    if(typeof(letra) === "number") { 
        // let num = letra
        return vocales.includes(letra.toString())
    } else { 
       return vocales.includes(letra.toLowerCase());
    };
};
console.log(esVocal(5));

console.log(esVocal("Á"))