var express = require('express');
var router = express.Router();
const axios = require('axios');
const peek = require('../utils/peek');
const {readAllProducts} = require('../middlewares/productsMiddleware');
const { getProductsController, updateProduct} = require('../controllers/productsControllers');


// router.get('/', function(req, res , next) {
//     axios.get('https://fakestoreapi.com/products')
//         .then(response => {
//             res.header("Access-Control-Allow-Origin", "*");
//             res.json(response.data);

//         })
//         .catch(error => {
//             console.log(error)
//             res.status(404).send(error)
//         })
        
        
// })

router.get('/', readAllProducts, getProductsController );

router.put('/', updateProduct)


module.exports = router;