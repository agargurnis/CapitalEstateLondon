const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const properties = require('./api-routes/properties');
const services = require('./api-routes/services');
const contacts = require('./api-routes/contacts');
const auth = require('./api-routes/auth');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware to make folder publicly available
app.use('/uploads', express.static('uploads'));
// DB Config
const db = require('./config/keys').mongoURI;

// Connect to mongoDB
mongoose
	.connect(db)
	.then(() => {
		console.log('---> MongoDB Connected');
	})
	.catch(err => {
		console.log(err);
	});

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use routes
// app.use('/api/properties', properties);
app.use('/api/services', services);
app.use('/api/contacts', contacts);
app.use('/api/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`---> server running on port ${port}`);
});
