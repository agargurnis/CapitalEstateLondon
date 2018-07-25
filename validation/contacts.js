const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateContactsInput(data) {
	let errors = {};

	data.number = !isEmpty(data.number) ? data.number : '';
	data.email = !isEmpty(data.email) ? data.email : '';
	data.street_line = !isEmpty(data.street_line) ? data.street_line : '';
	data.street_line2 = !isEmpty(data.street_line2) ? data.street_line2 : '';
	data.city = !isEmpty(data.city) ? data.city : '';
	data.post_code = !isEmpty(data.post_code) ? data.post_code : '';

	if (!validator.isLength(data.number, { min: 7, max: 15 })) {
		errors.number = 'Phone number must be between 7 and 15 characters';
	}

	if (!validator.isLength(data.street_line, { min: 2, max: 30 })) {
		errors.street_line = 'Address must be between 2 and 30 characters';
	}

	if (validator.isEmpty(data.number)) {
		errors.number = 'Number field is required';
	}

	if (!validator.isEmail(data.email)) {
		errors.email = 'Email is invalid';
	}

	if (validator.isEmpty(data.email)) {
		errors.email = 'Email field is required';
	}

	if (validator.isEmpty(data.city)) {
		errors.city = 'City field is required';
	}

	if (validator.isEmpty(data.post_code)) {
		errors.post_code = 'Post Code field is required';
	}

	if (!isEmpty(data.twitter)) {
		if (!validator.isURL(data.twitter)) {
			errors.twitter = 'Not a valid URL';
		}
	}

	if (!isEmpty(data.facebook)) {
		if (!validator.isURL(data.facebook)) {
			errors.facebook = 'Not a valid URL';
		}
	}

	if (!isEmpty(data.instagram)) {
		if (!validator.isURL(data.instagram)) {
			errors.instagram = 'Not a valid URL';
		}
	}

	return {
		errors: errors,
		isValid: isEmpty(errors)
	};
};
