const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load newsletter model
const NewsletterSubscriber = require('../models/Newsletter');

// Load validator
const validateNewsletterInput = require('../validation/newsletter');

// @route   POST api/newsletter
// @desc    Add subscriber to the list
// @access  Public
router.post('/', (req, res) => {
	const { errors, isValid } = validateNewsletterInput(req.body);
	// Check validation
	if (!isValid) {
		// If any errors return 400 with errors object
		return res.status(400).json(errors);
	}
	// Create new post object
	const newSubscriber = new NewsletterSubscriber({
		email: req.body.email
	});
	// Save post to db
	newSubscriber.save().then(subscriber => res.json(subscriber));
});

// @route   GET api/newsletter
// @desc    Get all newsletter subscribers
// @access  Private
router.get(
	'/',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		const errors = {};
		NewsletterSubscriber.find()
			.then(subscribers => {
				if (!subscribers) {
					errors.nosubscribers = 'There are no subscribers';
					return res.status(404).json(errors);
				}
				res.json(subscribers);
			})
			.catch(err =>
				res.status(404).json({ subscribers: 'No subscribers found' })
			);
	}
);

// @route   DELETE api/newsletter/:newsletter_id
// @desc    Delete newsletter
// @access  Private
router.delete(
	'/:newsletter_id',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		NewsletterSubscriber.findById(req.params.newsletter_id)
			.then(newsletter => {
				// Delete newsletter
				newsletter.remove().then(() => {
					res.json({ success: true });
				});
			})
			.catch(err =>
				res.status(404).json({ newsletter: 'Newsletter not found' })
			);
	}
);

module.exports = router;
