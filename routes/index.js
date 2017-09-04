/*
Require all the things
*/ 
let express = require('express');
let router = express.Router();
// et User = require('../models/user');


// All the GETs
// register route
router.get('/register', function(req,res,next){
	return res.render('register', { title: 'Sign Up with FUNdbot!'});
});

// about route
router.get('/about', function(req,res,next){
	return res.render('about', {title: 'About FUNdbot'});
});

// home route
router.get('/', function(req, res, next){
	return res.render('index', {title: 'Home is where FUNdbot is!'});
});

// contact route
router.get('/contact', function(req, res, next){
	return res.render('contact', {title: 'Home'});
});




module.exports = router;