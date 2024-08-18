const mongoose = require('mongoose');
const { Schema } = mongoose;

// create a new schema
const todoSchema = new Schema({
	description: String,
	completed: Boolean,
});

//create a new table with the defined schema
const todos = mongoose.model('todo', todoSchema);

//exporting the todo table
module.exports = {
	todos,
};
