const express = require('express');
const router = express.Router();

/* GET Login page. */
router.get('/', function(req, res, next) {
  res.send('Estoy en Login')

  });

module.exports = router;
