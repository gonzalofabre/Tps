const data = require('./dataBase');

function buscarPorId (id) {
    let object;
    data.forEach(element => {
        if(element.id == id) {
            object = element
        }
        
    });
    if(object) {
        return object
    } else {
        return 'No encontrado'
    }
}

function scopePrecio(precio) {
    let price = Number(precio);
    let scope = data.filter(element => element.precio<price);

    if(scope.length>0){

    return scope
    } else{
        return 'El valor ingresado no alcanza para comprar ningun producto'
    }
}

module.exports = {
    buscarPorId,
    scopePrecio
};

