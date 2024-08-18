import { useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';

function CreateTodo({ todolist, setTodolist }) {
	const [newItem, setNewItem] = useState('');
	const inputRef = useRef();

	const addTodo = () => {
		const tempId = uuid();
		const newTodo = {
			_id: tempId,
			completed: false,
			description: newItem,
		};
		setTodolist([newTodo, ...todolist]);
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
