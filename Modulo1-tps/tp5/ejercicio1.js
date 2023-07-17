const primerArray = ["Juan", "Dani"];
const segundoArray =  ["Leo", "Monica", "Juliana"];


const concatenado = [...primerArray, ...segundoArray];

//OtraForma ------- Una funcion que toma como parametro los arrays a concatenar y lo realiza utilizando for

const list = [1, 2, 3, 4, 5];
const secondList = [45,7,8,9];

var concatenate = [];

function pushear(lista, lista2) {

    concatenate = [];
    for(i=0; i<lista.length; i++) {
        concatenate.push(lista[i]);
    };

    for(i=0; i<lista2.length; i++) {
        concatenate.push(lista2[i]);
    }

}
pushear(primerArray, segundoArray)
console.log(concatenate);

pushear(list,secondList);

console.log(concatenate);


//Otra forma ------- igual que el anterior pero con forEach

var caja = [];
function insertar (lista, lista2) {

    caja = []
    lista.forEach(element => {
        caja.push(element)     
    });

    lista2.forEach(element => {
        caja.push(element)
        
    });
} 

insertar(list, segundoArray);

console.log(caja);

//Otra forma con filter ---- Quería practicar pero tuve que agregar los ...antes ya que me lo reconocía como 2 arrays diferentes.



const nuevoArray = [...primerArray.filter(elemento => elemento), ...segundoArray.filter(elemento => elemento)]

console.log(nuevoArray);