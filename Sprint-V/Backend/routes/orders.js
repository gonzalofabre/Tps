const express = require('express');
const router = express.Router();
const postOrderController = require('../controllers/postOrderController');
const postOrderMiddleWare = require('../middlewares/postOrderMiddleware');



router.post( "/", postOrderMiddleWare , postOrderController);


module.exports = router;
