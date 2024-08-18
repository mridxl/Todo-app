import CreateTodo from './components/CreateTodo';
import Header from './components/Header';
import TodoItems from './components/TodoItems';
import { useState } from 'react';

function App() {
	const [todolist, setTodolist] = useState([
		{
			_id: '34567890-q3w4e5r6t',
			completed: false,
			description: 'item 1',
		},
		{
			_id: '34568765-q3w4e5r6t',
			completed: false,
			description: 'item 2',
		},
		{
			_id: '98we5678-q3w4e5r6t',
			completed: true,
			description: 'item 3',
		},
	]);

	return (
		<>
			<section className="container">
				<Header />
				<CreateTodo todolist={todolist} setTodolist={setTodolist} />
				<TodoItems todolist={todolist} setTodolist={setTodolist} />
			</section>
		</>
	);
}

export default App;
