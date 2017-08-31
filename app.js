const port = 3002;
/*
Requiring all the things. Leggo!
🤘
*/
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

/*
Parse incoming requests
*/
//parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false }));

/*
TEST ROUTE
*/

app.get('/', function(req, res){
	res.send('Hello World');
});
/*
Sit down and listen!
🕺
*/
app.listen(port, function(){
	console.log(`Express app listening on port ${port}`);
});