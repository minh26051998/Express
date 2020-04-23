
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var userRoute = require('./routes/user.routes');

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function(req, res){
	res.render('index', {
		name:'Minh'
	});
});

app.use('/users', userRoute);

app.listen(port, function(){
	console.log('Server listening on port ' + port );
});