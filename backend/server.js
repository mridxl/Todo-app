const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const { connectDB } = require('./config/dbConn');
const { createTodo, updateTodo, deleteTodo } = require('./types');
const { todos } = require('./db');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

// get all todos
app.get('/todos', async function (req, res) {
	const allTodos = await todos.find();
	res.json(allTodos);
});

// create new todo
app.post('/new', async function (req, res) {
	const payload = req.body;
	const parsedPayload = createTodo.safeParse(payload);

	if (!parsedPayload.success) {
		res.status(400).json({
			msg: `Validation error: Invalid inputs sent`,
		});
		return;
	}

	//put it in db
	const newTodo = await todos.create({
		completed: false,
		description: payload.description,
	});

	res.json({
		msg: 'Todo Created',
		todo: newTodo,
	});
});

//change todo completion
app.put('/completed', async function (req, res) {
	const payload = req.body;
	const parsedPayload = updateTodo.safeParse(payload);

	if (!parsedPayload.success) {
		res.status(400).json({
			msg: `Validation error: Invalid inputs sent`,
		});
		return;
	}

	// change todo completed status
	try {
		await todos.updateOne(
			{ _id: payload._id },
			{ completed: !payload.completed }
		);

		res.json({
			msg: 'todo updated',
		});
	} catch (error) {
		res.status(400).json({
			msg: `Todo with id: ${payload._id} does not exist`,
		});
	}
});

//delete todo
app.delete('/delete', async function (req, res) {
	const payload = req.body;
	const parsedPayload = deleteTodo.safeParse(payload);

	if (!parsedPayload.success) {
		res.status(400).json({
			msg: `Validation error: Invalid inputs sent`,
		});
		return;
	}

	// change todo completed status
	try {
		await todos.findByIdAndDelete(payload._id);

		res.json({
			msg: 'todo deleted',
		});
	} catch (error) {
		res.status(400).json({
			msg: `Todo with id: ${payload._id} does not exist`,
		});
	}
});

connectDB();

// Only starts the server once we're connected to mongoDB
mongoose.connection.once('open', () => {
	console.log(`Connected to mongoDB`);
	app.listen(PORT, () => {
		console.log(`Server running at http://localhost:${PORT}`);
	});
});
