const port = 3002;
/*
Requiring all the things. Leggo!
🤘
*/
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let session = require('express-session');
let app = express();

/*
Use sessions for tracking logins
*/
app.use(session({
	secret: 'scottie loves you',
	resave: true,
	saveUninitialized: false
}));

//parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false }));

// serve static files from /public
app.use(express.static(__dirname + '/public'));

/*
View engine setup!
*/
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

/*
Get our routes set up, and let the program know to look in the routes folder for that shit!
*/
let routes = require('./routes/index');
app.use('/', routes);

/*
404 error handler
*/
app.use(function(req,res,next){
	
	let err = new Error('File not found, oh noes man!');
	err.status = 404;
	next(err);
});

/*
The last of the app.use callbacks! Our stop-all error handler
*/
app.use(function(err, req, res, next){
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});
/*
Sit down and listen! 🕺
*/
app.listen(port, function(){
	console.log(`Express app listening on port ${port}`);
});