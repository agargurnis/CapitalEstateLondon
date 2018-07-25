const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ContactsSchema = new Schema({
	address: {
		street_line: {
			type: String,
			required: true
		},
		street_line2: {
			type: String
		},
		city: {
			type: String,
			required: true
		},
		post_code: {
			type: String,
			required: true
		}
	},
	social: {
		twitter: {
			type: String
		},
		facebook: {
			type: String
		},
		instagram: {
			type: String
		}
	},
	number: {
		type: Number,
		required: true
	},
	email: {
		type: String,
		required: true
	}
});

module.exports = Post = mongoose.model('contacts', ContactsSchema);
