//DANGER
const Products = require('../models/products');
const readDb = require('./readDb');

async function createDb () {
    const products = await readDb().products;

    try {
        products.map((product) => {

            const { price, category, description, title, image } = product
            const newProduct = Products.create({
                price,
                category,
                description,
                title,
                image

            })
            if(newProduct) { 
                console.log('Creado : ', newProduct)
            } else {
                console.log('no creado')
            }
        })
    } catch (error) {
        console.error(error);
    };


};

module.exports = createDb