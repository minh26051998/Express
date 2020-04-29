var controller = require('../controllers/auth.controller');
var express = require('express');

var router = express.Router();

router.get('/login', controller.login );
router.post('/login', controller.postLogin);

module.exports = router;