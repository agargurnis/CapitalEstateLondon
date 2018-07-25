const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ServiceSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	serviceImage: {
		type: String,
		required: true
	}
});

module.exports = Post = mongoose.model('service', ServiceSchema);
