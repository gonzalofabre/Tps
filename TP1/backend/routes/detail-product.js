const express = require('express');
const router = express.Router();

/* GET detail-product page. */
router.get('/', function(req, res, next) {
  res.send('Estoy en detail-product')

  });

module.exports = router;
