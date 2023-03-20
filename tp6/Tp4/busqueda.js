const data = require('./dataBase');

function buscarPorId (id) {
    let object;
    data.forEach(element => {
        if(element.id === id) {
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
    let Scope = data.filter(element => element.precio<price);

    return Scope
}

