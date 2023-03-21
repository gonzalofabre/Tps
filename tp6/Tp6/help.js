function help () {
    console.log(
        'Lista de comandos: \n',
        '-Ingrese: "npm start lista" para ver la lista completa de productos. \n',
        '-Ingrese: "npm start agregar" para agregar un nuevo producto a la lista \n',
        '-Ingrese: "npm start id numero_de_id" para mostrar en consola el producto de un Id determinado\n',
        '-Ingrese: "npm start cat nombre_de_categoria" para mostrar en consola todos los productos de una categoria determinada. \n',
        '-Ingrese: "npm start alcance numero_valor" para mostrar en consola todos los productos cuyo precio es inferior al valor ingresado  \n',
        '-Ingrese: "npm start help" para mostrar informacion sobre los comandos posibles . \n'

    )
};

module.exports = help;