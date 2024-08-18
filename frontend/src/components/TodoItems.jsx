import Lineitem from './Lineitem';

function TodoItems({ todolist, setTodolist }) {
	const completeTodo = (id) => {
		setTodolist((prevTodos) =>
			prevTodos.map((todo) =>
				todo._id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
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
						/>
					);
				})}
		</ol>
	);
}

export default TodoItems;
