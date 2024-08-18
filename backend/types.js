const zod = require('zod');

const createTodo = zod.object({
	description: zod.string().min(1),
});

const updateTodo = zod.object({
	_id: zod.string().min(1),
	completed: zod.boolean(),
});
const deleteTodo = zod.object({
	_id: zod.string().min(1),
});

module.exports = {
	createTodo,
	updateTodo,
	deleteTodo,
};
