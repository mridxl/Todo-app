import axios from 'axios';
import Lineitem from './Lineitem';

function TodoItems({ todolist, setTodolist }) {
	const completeTodo = async (id, completed) => {
		// complete todo and optimistically update the UI
		setTodolist((prevTodos) =>
			prevTodos.map((todo) =>
				todo._id === id ? { ...todo, completed: !completed } : todo
			)
		);

		try {
			// update completion status in mongoDB
			await axios.put('http://localhost:8080/completed', {
				_id: id,
				completed,
			});
		} catch (error) {
			alert('Error completing todo');

			// Rollback optimistic update if the request fails
			setTodolist((prevTodos) =>
				prevTodos.map((todo) =>
					todo._id === id ? { ...todo, completed } : todo
				)
			);
		}
	};

	const deleteTodo = async (id) => {
		const todoToDelete = todolist.find((todo) => todo._id === id);

		// delete todo and optimistically update the UI
		setTodolist((prevTodos) => prevTodos.filter((todo) => todo._id !== id));

		try {
			// delete todo in mongoDB
			await axios.delete('http://localhost:8080/delete', {
				data: { _id: id },
			});
		} catch (error) {
			alert('Error deleting todo');

			// Rollback optimistic update if the request fails
			setTodolist((prevTodos) => [todoToDelete, ...prevTodos]);
		}
	};

	return (
		<ol className="toDoList">
			{todolist &&
				todolist.map((todo, i) => {
					return (
						<Lineitem
							key={i}
							todo={todo}
							completeTodo={completeTodo}
							deleteTodo={deleteTodo}
						/>
					);
				})}
		</ol>
	);
}

export default TodoItems;
