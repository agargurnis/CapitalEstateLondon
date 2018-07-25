const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load post model
const Contacts = require('../models/Contacts');

// Load validator
const validateContactsInput = require('../validation/contacts');

// @route   POST api/contacts
// @desc    Create or Edit contacts
// @access  Private
router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		const { errors, isValid } = validateContactsInput(req.body);

		// Check Validation
		if (!isValid) {
			// Return any errors with status 400
			return res.status(400).json(errors);
		}

		// Get fields
		const contactFields = {};

		if (req.body.number) {
			contactFields.number = req.body.number;
		}
		if (req.body.email) {
			contactFields.email = req.body.email;
		}

		// Address
		contactFields.address = {};

		if (req.body.street_line) {
			contactFields.address.street_line = req.body.street_line;
		}
		if (req.body.street_line2) {
			contactFields.address.street_line2 = req.body.street_line2;
		}
		if (req.body.post_code) {
			contactFields.address.post_code = req.body.post_code;
		}
		if (req.body.city) {
			contactFields.address.city = req.body.city;
		}
		// Social
		contactFields.social = {};

		if (req.body.twitter) {
			contactFields.social.twitter = req.body.twitter;
		}
		if (req.body.instagram) {
			contactFields.social.instagram = req.body.instagram;
		}
		if (req.body.facebook) {
			contactFields.social.facebook = req.body.facebook;
		}

		const contactsId = '5b53ad148ea6fc30fe89b645';

		Contacts.findById(contactsId).then(contact => {
			if (contact) {
				// Update
				Contacts.findByIdAndUpdate(
					contactsId,
					{ $set: contactFields },
					{ new: true }
				).then(contact => res.json(contact));
			}
		});
	}
);

// @route   GET api/contacts
// @desc    Get all contacts
// @access  Public
router.get('/', (req, res) => {
	const errors = {};
	Contacts.find()
		.then(contacts => {
			if (!contacts) {
				errors.nocontacts = 'There are no contacts';
				return res.status(404).json(errors);
			}
			res.json(contacts);
		})
		.catch(err => res.status(404).json({ contacts: 'No contacts found' }));
});

module.exports = router;
