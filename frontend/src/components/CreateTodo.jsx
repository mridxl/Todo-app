import { useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

function CreateTodo({ todolist, setTodolist }) {
	const [newItem, setNewItem] = useState('');
	const inputRef = useRef();

	const addTodo = async () => {
		// add a tempId and optimistically update the UI
		const tempId = uuid();
		const newTodo = {
			_id: tempId,
			completed: false,
			description: newItem,
		};
		setTodolist([newTodo, ...todolist]);

		try {
			// Create todo in mongoDB
			const response = await axios.post('http://localhost:8080/new', {
				description: newItem,
			});
			console.log(response);
			// Update the todo list with the actual ID from MongoDB
			setTodolist((prevTodolist) =>
				prevTodolist.map((todo) =>
					todo._id === tempId ? { ...todo, _id: response.data.todo._id } : todo
				)
			);
		} catch (error) {
			alert('Error creating todo');
			// Rollback optimistic update if the request fails
			setTodolist((prevTodolist) =>
				prevTodolist.filter((todo) => todo._id !== tempId)
			);
		}

		setNewItem('');
		inputRef.current.focus();
	};
	
	return (
		<>
			<input
				ref={inputRef}
				className="input-box"
				id="todo"
				placeholder="~ Today I need to ~"
				autoComplete="off"
				//helps clear the input text once we press submit
				value={newItem}
				//changes the newItem state to match input text
				onChange={(e) => setNewItem(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') addTodo();
				}}
			/>
			<button className="button" onClick={addTodo}>
				<span>Submit</span>
			</button>
		</>
	);
}
export default CreateTodo;
