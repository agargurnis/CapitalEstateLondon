const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
const mongoose = require('mongoose');
const passport = require('passport');
// const { cancelLoading } = require('../client/src/actions/propertyActions');

aws.config.update({
	secretAccessKey: 'kQbKuUluiEFkHt/fvLx9GcSkfkuAMOvc8jPTgXwX',
	accessKeyId: 'AKIAIWTJDJLIMEJ4C62A',
	region: 'eu-west-2'
});

const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = new aws.S3();

const storage = multerS3({
	s3: s3,
	bucket: 'cel-bucket',
	cacheControl: 'max-age=31536000',
	contentType: multerS3.AUTO_CONTENT_TYPE,
	metadata: function(req, file, cb) {
		cb(null, { fieldName: file.fieldname });
	},
	key: function(req, file, cb) {
		cb(null, Date.now().toString() + file.originalname);
	}
});
// const storage = multer.diskStorage({
// 	destination: (req, file, cb) => {
// 		cb(null, './uploads/');
// 	},
// 	filename: (req, file, cb) => {
// 		cb(null, file.originalname);
// 	}
// });
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
const Property = require('../models/Property');

// Load validator
const validatePropertyInput = require('../validation/property');

// @route   POST api/properties
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

		// Create new property object
		const newProperty = new Property({
			district: req.body.district,
			address: req.body.address,
			post_code: req.body.post_code,
			area_sqm: req.body.area_sqm,
			status: req.body.status,
			nr_of_bedrooms: req.body.nr_of_bedrooms,
			nr_of_bathrooms: req.body.nr_of_bathrooms,
			nr_of_parking: req.body.nr_of_parking,
			ownership_type: req.body.ownership_type,
			description_en: req.body.description_en,
			description_ru: req.body.description_ru,
			price: req.body.price,
			lat: req.body.lat,
			lon: req.body.lon,
			property_images: req.files.map(file => file.location)
		});
		// console.log(req.files.map(file => typeof file.location));
		// console.log(newProperty);
		// Save post to db
		newProperty.save().then(property => res.json(property));
	}
);

// @route   POST api/manageproperties/:property_id
// @desc    Edit property
// @access  Private
router.post(
	'/:property_id',
	passport.authenticate('jwt', { session: false }),
	upload.array('photos', 12),
	(req, res) => {
		const { errors, isValid } = validatePropertyInput(req.body);

		// Check Validation
		if (!isValid) {
			// Return any errors with status 400
			return res.status(400).json(errors);
		}

		Property.findById(req.params.property_id)
			.then(property => {
				if (!property) {
					errors.noproperty = 'No property found';
					return res.status(404).json(errors);
				}
				// else update
				if (req.body.address) {
					property.address = req.body.address;
				}
				if (req.body.post_code) {
					property.post_code = req.body.post_code;
				}
				if (req.body.district) {
					property.district = req.body.district;
				}
				if (req.body.area_sqm) {
					property.area_sqm = req.body.area_sqm;
				}
				if (req.body.price) {
					property.price = req.body.price;
				}
				if (req.body.status) {
					property.status = req.body.status;
				}
				if (req.body.ownership_type) {
					property.ownership_type = req.body.ownership_type;
				}
				if (req.body.nr_of_parking) {
					property.nr_of_parking = req.body.nr_of_parking;
				}
				if (req.body.nr_of_bedrooms) {
					property.nr_of_bedrooms = req.body.nr_of_bedrooms;
				}
				if (req.body.nr_of_bathrooms) {
					property.nr_of_bathrooms = req.body.nr_of_bathrooms;
				}
				if (req.body.description_en) {
					property.description_en = req.body.description_en;
				}
				if (req.body.description_ru) {
					property.description_ru = req.body.description_ru;
				}
				if (req.files.length > 0) {
					property.property_images = req.files.map(file => file.path);
				}
				property.save().then(updatedProperty => res.json(updatedProperty));
			})
			.catch(err => res.status(404).json({ property: 'No property found' }));
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
