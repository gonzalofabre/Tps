const data = require('./dataBase');
const agregar = require('./agregar');
const busqueda = require('./busqueda')
const buscarPorCat = require('./listar');
const help = require('./help');

const comando = process.argv[2]
const parametro1 = process.argv[3];


switch (comando) {
    case "agregar":
        agregar();
        break;
    case "id" :
        console.log(busqueda.buscarPorId(parametro1));
        break;
    case "alcance":
        console.log(busqueda.scopePrecio(parametro1));
        break;
    case "cat":
        console.log(buscarPorCat(parametro1));
        break;
    case "lista":
        console.log(data);
        break;
    case "help":
        help();
        break;
    default: 
    console.log(
        'El comando ingresado no es válido, escriba como comando "help" para tener más información sobre los comaandos: \n',
        '"npm start help"');
        break;
};