import axios from 'axios';
import CreateTodo from './components/CreateTodo';
import Header from './components/Header';
import TodoItems from './components/TodoItems';
import { useEffect, useState } from 'react';

function App() {
	const [todolist, setTodolist] = useState([]);

	useEffect(() => {
		async function getTodos() {
			try {
				const response = await axios.get('http://localhost:8080/todos');
				if (!response.data) throw new Error(`Can't fetch todos`);
				setTodolist(response.data);
			} catch (error) {
				alert(error.message);
			}
		}
		getTodos();
	}, []);

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
