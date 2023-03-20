const vocales = "aáeéiíoóuú"

const esVocal = (letra) => {
    if(typeof(letra) === "number") { 
        let num = letra
        return vocales.includes(num.toString())
    } else { 
       return vocales.includes(letra.toLowerCase());
    };
};
