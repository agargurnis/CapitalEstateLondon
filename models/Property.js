const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PropertySchema = new Schema({
	district: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	post_code: {
		type: String,
		required: true
	},
	area_sqm: {
		type: Number,
		required: true
	},
	nr_of_bedrooms: {
		type: Number,
		required: true
	},
	nr_of_bathrooms: {
		type: Number,
		required: true
	},
	nr_of_parking: {
		type: Number,
		required: true
	},
	price: {
		type: String,
		required: true
	},
	ownership_type: {
		type: String,
		required: true
	},
	description_en: {
		type: String,
		required: true
	},
	description_ru: {
		type: String,
		required: true
	},
	status: {
		type: String,
		required: true
	},
	lat: {
		type: Number,
		required: true
	},
	lon: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	property_images: [
		{
			type: String,
			required: true
		}
	]
});

module.exports = Post = mongoose.model('property', PropertySchema);
