
require('dotenv').config();
// console.log(process.env.SESSION_SECRET);
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var cookieParser = require('cookie-parser');
var productRoute = require('./routes/product.route');
var sessionMiddleware = require('./middlewares/session.middleware');
var cartRoute = require('./routes/cart.route');
var tranferRoute = require('./routes/transfer.route');
var authMiddleware = require('./middlewares/auth.middleware');
var csurf = require('csurf');
var mongoose = require('mongoose');
var apiProductRoute = require('./api/routes/product.route');

mongoose.connect(process.env.MONGO_URL);

var port = 3000;


app.set('view engine', 'pug');
app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);
// app.use(csurf({cookie: true}));

app.get('/', function(req, res){
	res.render('index', {
		name:'Minh'
	});
});

app.use(express.static('public'));

app.use('/users',authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use('/transfer',authMiddleware.requireAuth, tranferRoute);
app.use('/api/products', apiProductRoute);


app.listen(port, function(){
	console.log('Server listening on port ' + port );
});