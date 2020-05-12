
var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');
var authMiddleware = require('../middlewares/auth.middleware');
var express = require('express');
var multer  = require('multer');
var router = express.Router();
var upload = multer({ dest: './public/uploads/' });

router.get('/', authMiddleware.requireAuth, controller.index );

router.get('/search', controller.search );

router.get('/create', controller.create );

router.get('/:id', controller.view );

router.post('/create',
	upload.single('avatar'), 
	validate.postCreate, 
	controller.postCreate 
);

module.exports = router;