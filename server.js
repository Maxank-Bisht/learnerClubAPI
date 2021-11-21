const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to DB
connectDB();

// Route files
const bootcamp = require('./routes/bootcamps');
const { connect } = require('mongoose');

const app = express();

// Body Parser
app.use(express.json());

// Dev Logger middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamp);

// error handler middlerware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
	PORT,
	console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgMagenta.italic.bold.white)
);

//handling unhandled rejections
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error : ${err.message}`.red);
	// closing server and exit process
	server.close(() => process.exit(1));
});
