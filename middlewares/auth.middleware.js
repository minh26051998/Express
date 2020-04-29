var db = require('../db');
//tạo ra 1 cái ràng buộc khi đăng nhập tài khỏan
module.exports.requireAuth = function(req, res, next){
	if(!req.signedCookies.userId){
		res.redirect('/auth/login');
		return;
	}

	var user = db.get('users').find({ 
		id: req.signedCookies.userId })
	.value();

	if(!user){
		res.redirect('/auth/login');
		return;
	}

	res.locals.user = user;

	next();
};