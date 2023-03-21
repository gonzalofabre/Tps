const data = require('./dataBase');
const readLineSync = require('readline-sync');

function agregar () {
    let newObject = {
        id: readLineSync.question('Ingrese el id del producto nuevo: '),
        nombre: readLineSync.question('Ingrese el nombre del producto nuevo: '),
        categoria: readLineSync.question('Ingrese el nombre de la categoria del producto nuevo: '),
        precio: readLineSync.question('Ingrese el precio del producto nuevo en valores numericos: '),
    };

    data.push(newObject);

    console.log('Producto agregado exitosamente: \n', newObject);
    
return console.log('Lista actualizada de productos: \n ', data);

};

module.exports = agregar;