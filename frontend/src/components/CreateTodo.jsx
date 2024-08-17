import { useState } from 'react';

function CreateTodo({ todolist, setTodolist }) {
	const [newItem, setNewItem] = useState('');

	const addTodo = () => {
		const newTodo = {
			completed: false,
			description: newItem,
		};
		setTodolist([newTodo, ...todolist]);
		setNewItem('');
	};
	return (
		<>
			<input
				className="input-box"
				id="todo"
				placeholder="~ Today I need to ~"
				autoComplete="off"
				//helps clear the input text once we press submit
				value={newItem}
				//changes the newItem state to match input text
				onChange={(e) => setNewItem(e.target.value)}
			/>
			<button className="button" onClick={addTodo}>
				<span>Submit</span>
			</button>
		</>
	);
}
export default CreateTodo;
