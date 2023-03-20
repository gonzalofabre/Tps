
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'dataBase.js');

const data = require('./dataBase');
const readLineSync = require('readline-sync');

function agregar () {
    let newObject = {
        id: readLineSync.question('Ingrese el id del producto nuevo: '),
        nombre: readLineSync.question('Ingrese el nombre del producto nuevo: '),
        categoria: readLineSync.question('Ingrese el nombre de la categoría del producto nuevo: '),
        precio: readLineSync.question('Ingrese el precio del producto nuevo en valores numéricos: '),
    };

    data.push(newObject);
    
return data

};


console.log(agregar());