
require('dotenv').config();
console.log(process.env.SESSION_SECRET);
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var cookieParser = require('cookie-parser');
var productRoute = require('./routes/product.route');

var port = 3000;


app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.SESSION_SECRET));


app.get('/', function(req, res){
	res.render('index', {
		name:'Minh'
	});
});

app.use(express.static('public'));

app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);

app.listen(port, function(){
	console.log('Server listening on port ' + port );
});