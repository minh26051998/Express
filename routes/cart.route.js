var controller = require('../controllers/cart.controller');
var express = require('express');

var router = express.Router();

router.get('/add/:productId', controller.addToCart );

module.exports = router;