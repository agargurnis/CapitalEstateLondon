const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const properties = require('./api-routes/properties');
const newsletter = require('./api-routes/newsletter');
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
app.use('/api/properties', properties);
app.use('/api/newsletter', newsletter);
app.use('/api/auth', auth);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`---> server running on port ${port}`);
});
