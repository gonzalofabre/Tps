var express = require('express');
var router = express.Router();
const userMiddleware = require('../middlewares/userMiddlewares')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', userMiddleware);

module.exports = router;
