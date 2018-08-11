const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateNewsletterInput(data) {
	let errors = {};

	data.email = !isEmpty(data.email) ? data.email : '';

	if (validator.isEmpty(data.email)) {
		errors.email = 'Email field is required';
	}

	return {
		errors: errors,
		isValid: isEmpty(errors)
	};
};
