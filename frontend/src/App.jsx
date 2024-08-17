import CreateTodo from './components/CreateTodo';
import Header from './components/Header';
import TodoItems from './components/TodoItem';

function App() {
	return (
		<>
			<section className="container">
				<Header />
				<CreateTodo />
				<TodoItems />
			</section>
		</>
	);
}

export default App;
