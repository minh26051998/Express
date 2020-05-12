var shortid = require('shortid');

var db = require('../db');

module.exports = function(req, res, next) {
	if (!req.signedCookies.sessionId) {
		var sessionId = shortid.generate();
		res.cookie('sessionId', sessionId, {
		//không cho người dùng chỉnh sửa cookiesId
		signed: true
		});
		db.get('sessions').push({
			id: sessionId
		}).write();
	}

	next();
}