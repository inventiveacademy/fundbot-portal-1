const mongoose = require('mongoose');
const Applicant = mongoose.model('Applicant');

exports.homePage = (req, res) => {
	res.render('index');
}
exports.addApplicant = (req, res) => {
	//TODO create editApplicant.pug
	res.render('editApplicant', { title: 'Apply now'});
}
exports.createApplicant = async (req, res) => {
	const applicant = new Applicant(req.body);
	await applicant.save();
	req.flash('success', "Congrats, you don't suck!");
	res.redirect('/');
}

exports.getApplicants = async (req, res) => {
	// 1. Query database for list of all applicants
	const applicants = await Applicant.find();
	console.log(applicants.length);
	//TODO create applicants.pug
	res.render('applicants', {title: 'Applicants', applicants});
}