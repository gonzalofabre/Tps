const express = require('express');
const router = express.Router();
const postOrderController = require('../controllers/postOrderController');
const postOrderMiddleWare = require('../middlewares/postOrderMiddleware');
const { readOrders} =require('../middlewares/getOrderMiddleware')
const { getOrdersController} = require('../controllers/getOrdersController')



router.post( "/", postOrderMiddleWare , postOrderController);

router.get ('/', readOrders, getOrdersController )


module.exports = router;
