const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePropertyInput(data) {
	let errors = {};

	data.district = !isEmpty(data.district) ? data.district : '';
	data.address = !isEmpty(data.address) ? data.address : '';
	data.post_code = !isEmpty(data.post_code) ? data.post_code : '';
	data.status = !isEmpty(data.status) ? data.status : '';
	data.nr_of_bedrooms = !isEmpty(data.nr_of_bedrooms)
		? data.nr_of_bedrooms
		: '';
	data.nr_of_bathrooms = !isEmpty(data.nr_of_bathrooms)
		? data.nr_of_bathrooms
		: '';
	data.nr_of_parking = !isEmpty(data.nr_of_parking) ? data.nr_of_parking : '';
	data.area_sqm = !isEmpty(data.area_sqm) ? data.area_sqm : '';
	data.price = !isEmpty(data.price) ? data.price : '';
	data.ownership_type = !isEmpty(data.ownership_type)
		? data.ownership_type
		: '';
	data.description_en = !isEmpty(data.description_en)
		? data.description_en
		: '';
	data.description_ru = !isEmpty(data.description_ru)
		? data.description_ru
		: '';
	data.lat = !isEmpty(data.lat) ? data.lat : '';
	data.lon = !isEmpty(data.lon) ? data.lon : '';

	if (validator.isEmpty(data.district)) {
		errors.district = 'District field is required';
	}

	if (validator.isEmpty(data.address)) {
		errors.address = 'Address field is required';
	}

	if (validator.isEmpty(data.post_code)) {
		errors.post_code = 'Post code field is required';
	}

	if (validator.isEmpty(data.status)) {
		errors.status = 'Status field is required';
	}

	if (validator.isEmpty(data.ownership_type)) {
		errors.ownership_type = 'Ownership type field is required';
	}

	if (validator.isEmpty(data.area_sqm)) {
		errors.area_sqm = 'Area field is required';
	}

	if (validator.isEmpty(data.nr_of_bedrooms)) {
		errors.nr_of_bedrooms = 'Number of bedrooms field is required';
	}

	if (validator.isEmpty(data.nr_of_bathrooms)) {
		errors.nr_of_bathrooms = 'Number of bathrooms field is required';
	}

	if (validator.isEmpty(data.nr_of_parking)) {
		errors.nr_of_parking = 'Number of parking spaces field is required';
	}

	if (validator.isEmpty(data.price)) {
		errors.price = 'Price field is required';
	}

	if (validator.isEmpty(data.description_en)) {
		errors.description_en = 'Description in English field is required';
	}

	if (validator.isEmpty(data.description_ru)) {
		errors.description_ru = 'Description in Russian field is required';
	}

	if (validator.isEmpty(data.lat)) {
		errors.lat = 'Latitude field is required';
	}

	if (validator.isEmpty(data.lon)) {
		errors.lon = 'Longditude field is required';
	}

	return {
		errors: errors,
		isValid: isEmpty(errors)
	};
};
