const express = require('express');
const router = express.Router();

/* GET Register page. */
router.get('/', function(req, res, next) {
  res.send('Estoy en Register')

  });

module.exports = router;
