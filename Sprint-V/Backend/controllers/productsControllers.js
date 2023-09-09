const Products = require('../models/products');

module.exports = {
    createNewProduct: async (req, res) => {
        const {title, description, image, category, price} = req.body;
        try {
            const newProduct = await Products.create({
                title,
                description,
                category,
                image,
                price
            })

            if(newProduct) { return res.status(201).json({message: 'New Product added', data: newProduct})

            } else {
                return res.status(400).json({message: 'Bad request, invalid Data'})
            }
        } catch (error){
            console.error(error)
            return res.status(500).json({status: 500, message: 'Internal Server Error'})
        }
        
    },
    readAllProducts: async ()=> {
        try{
            const allProducts = await Products.findAll();
            return allProducts
        } catch ( error) {
            console.error('Error getting products from db', error)
            throw error;
        }
    } 


}

