const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to DB
connectDB();

// Route files
const bootcamp = require('./routes/bootcamps');
const { connect } = require('mongoose');

const app = express();

// Dev Logger middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamp);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));

//handling unhandled rejections
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error : ${err.message}`);
	// closing server and exit process
	server.close(() => process.exit(1));
});
