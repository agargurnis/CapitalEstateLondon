const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const multer = require('multer');
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads/');
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	}
});
const fileFilter = (req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
		cb(null, true);
	} else {
		cb(new Error('file type must be jpeg or png'), false);
	}
};
const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 15
	},
	fileFilter: fileFilter
});

// Load post model
const Post = require('../models/Property');

// Load validator
const validatePropertyInput = require('../validation/property');

// @route   GET api/properties
// @desc    Create property
// @access  Private
router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	upload.array('photos', 12),
	(req, res) => {
		const { errors, isValid } = validatePropertyInput(req.body);
		// Check validation
		if (!isValid) {
			// If any errors return 400 with errors object
			return res.status(400).json(errors);
		}
		// Create new post object
		const newProperty = new Property({
			location: req.body.location,
			area: req.body.area,
			nr_of_rooms: req.body.nr_of_rooms,
			nr_of_bedrooms: req.body.nr_of_bedrooms,
			nr_of_bathrooms: req.body.nr_of_bathrooms,
			ownership_type: req.body.ownership_type,
			description: req.body.description,
			price: req.body.price,
			lat: req.body.lat,
			lon: req.body.lon,
			images: req.files.path
		});
		// Save post to db
		newProperty.save().then(property => res.json(property));
	}
);

// @route   GET api/properties
// @desc    Get all properties
// @access  Public
router.get('/', (req, res) => {
	const errors = {};
	Property.find()
		.sort({ date: -1 })
		.then(properties => {
			if (!properties) {
				errors.noproperties = 'There are no properties';
				return res.status(404).json(errors);
			}
			res.json(properties);
		})
		.catch(err => res.status(404).json({ properties: 'No properties found' }));
});

// @route   GET api/properties/:property_id
// @desc    Get one property
// @access  Public
router.get('/:property_id', (req, res) => {
	const errors = {};
	Property.findById(req.params.property_id)
		.then(property => {
			if (!property) {
				errors.noproperty = 'There is no property with this id';
				return res.status(404).json(errors);
			}
			res.json(property);
		})
		.catch(err =>
			res.status(404).json({ property: 'There is no property with this id' })
		);
});

// @route   DELETE api/properties/:property_id
// @desc    Delete property
// @access  Private
router.delete(
	'/:property_id',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		Property.findById(req.params.property_id)
			.then(property => {
				// Delete property
				property.remove().then(() => {
					res.json({ success: true });
				});
			})
			.catch(err => res.status(404).json({ property: 'Property not found' }));
	}
);

module.exports = router;
