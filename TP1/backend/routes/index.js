var express = require('express');
var router = express.Router();
var  {indexController}  = require('../Controllers/index')

/* GET home page. */
router.get('/', indexController);

module.exports = router;
