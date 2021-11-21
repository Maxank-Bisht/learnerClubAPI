const mongoose = require('mongoose');

const connectDB = async () => {
	const conn = await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
	});

	console.log(`Connected to DB: ${conn.connection.host}`.yellow.bold.underline);
};

module.exports = connectDB;
