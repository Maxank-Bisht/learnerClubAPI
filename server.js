const express = require('express');
const dotenv = require('dotenv');

// Route files
const bootcamp = require('./routes/bootcamps');

// Load env variables
dotenv.config({ path: './config/config.env' });

const app = express();

// Mount routers
app.use('/api/v1/bootcamps', bootcamp);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));
