const express = require('express');
const { connectDB } = require('./config/dbConn');
const mongoose = require('mongoose');

require('dotenv').config();
const PORT = process.env.PORT;

const app = express();
connectDB();

// Only starts the server once we're connected to mongoDB
mongoose.connection.once('open', () => {
	console.log(`Connected to mongoDB`);
	app.listen(PORT, () => {
		console.log(`Server running at http://localhost:${PORT}`);
	});
});
