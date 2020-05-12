var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
	image: String,
	name: String,
	description: String,
	avatar: String
});

var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;