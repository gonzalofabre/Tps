const data = require('./dataBase');

function buscarPorCat (cat) {
    let array = [];

    data.forEach(element => {
        if(element.categoria == cat) {
            array.push(element);
        }
        
    });
    if (array.length !== 0) {
        return array
    } else {
        return 'No se encontraron productos'
    };
};

module.exports = buscarPorCat;