const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const applicantSchema = new mongoose.Schema({
	firstName: String,
	middleName: String,
	lastName: String,
	contactPhone: Number,
	email: String,
	address: String,
	zip: Number,
	city: String,
	state: String,
	tags: [String] 
});


applicantSchema.pre('save', function(next){
	if(!this.isModified('name')){
		next(); // skip it
		return; // stop this function from running
	}
	this.slug = slug(this.name);
	next();
	
	// TODO make more resilient so slugs are unique
});

module.exports = mongoose.model('Applicant', applicantSchema);