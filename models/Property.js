const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PropertySchema = new Schema({
	location: {
		type: String,
		required: true
	},
	area: {
		type: String
	},
	nr_of_bedrooms: {
		type: Number,
		required: true
	},
	nr_of_bathrooms: {
		type: Number,
		required: true
	},
	nr_of_rooms: {
		type: Number
	},
	price: {
		type: Number,
		required: true
	},
	ownership_type: {
		type: String
	},
	description: {
		type: String,
		required: true
	},
	geolocation: {
		lat: {
			type: Number,
			required: true
		},
		lon: {
			type: Number,
			required: true
		}
	},
	date: {
		type: Date,
		default: Date.now
	},
	images: [
		{
			type: String,
			required: true
		}
	]
});

module.exports = Post = mongoose.model('property', PropertySchema);
