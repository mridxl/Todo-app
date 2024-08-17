const mongoose = require('mongoose');
require('dotenv').config();

const dbConnectionString = process.env.MONGO_URI;

const connectDB = async () => {
	try {
		await mongoose.connect(dbConnectionString);
	} catch (error) {
		console.error(error);
	}
};

module.exports = { connectDB };
