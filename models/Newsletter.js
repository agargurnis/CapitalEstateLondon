const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const NewsletterSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Post = mongoose.model('newsletter', NewsletterSchema);
