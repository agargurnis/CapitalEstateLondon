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
const Service = require('../models/Service');

// Load validator
const validateServiceInput = require('../validation/service');

// @route   GET api/services
// @desc    Create service
// @access  Private
router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	upload.single('serviceImage'),
	(req, res) => {
		const { errors, isValid } = validateServiceInput(req.body);
		// Check validation
		if (!isValid) {
			// If any errors return 400 with errors object
			return res.status(400).json(errors);
		}
		// Create new service object
		const newService = new Service({
			title: req.body.title,
			description: req.body.description,
			serviceImage: req.file.path
		});
		// Save service to db
		newService.save().then(service => res.json(service));
	}
);

// @route   GET api/services
// @desc    Get all services
// @access  Public
router.get('/', (req, res) => {
	const errors = {};
	Service.find()
		.sort({ date: -1 })
		.then(services => {
			if (!services) {
				errors.noservices = 'There are no services';
				return res.status(404).json(errors);
			}
			res.json(services);
		})
		.catch(err => res.status(404).json({ services: 'No services found' }));
});

// @route   GET api/services/:service_id
// @desc    Get one service
// @access  Public
router.get('/:service_id', (req, res) => {
	const errors = {};
	Service.findById(req.params.service_id)
		.then(service => {
			if (!service) {
				errors.noservice = 'There is no service with this id';
				return res.status(404).json(errors);
			}
			res.json(service);
		})
		.catch(err =>
			res.status(404).json({ service: 'There is no service with this id' })
		);
});

// @route   DELETE api/services/:service_id
// @desc    Delete post
// @access  Private
router.delete(
	'/:service_id',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		Service.findById(req.params.service_id)
			.then(service => {
				if (!service) {
					errors.noservice = 'There is no service with this id';
					return res.status(404).json(errors);
				}
				// Delete service
				service.remove().then(() => {
					res.json({ success: true });
				});
			})
			.catch(err => res.status(404).json({ service: 'Service not found' }));
	}
);

module.exports = router;
