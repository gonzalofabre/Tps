const express = require('express');
const router = express.Router();

/* GET cart page. */
router.get('/', function(req, res, next) {
  res.send('Estoy en cart')

  });

module.exports = router;
