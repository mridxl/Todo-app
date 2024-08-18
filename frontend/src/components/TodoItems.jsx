import Lineitem from './Lineitem';

function TodoItems({ todolist, setTodolist }) {
	const completeTodo = (id) => {
		setTodolist((prevTodos) =>
			prevTodos.map((todo) =>
				todo._id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};
	const deleteTodo = (id) => {
		setTodolist((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
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
