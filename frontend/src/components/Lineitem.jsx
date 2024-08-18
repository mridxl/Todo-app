function Lineitem({ todo, completeTodo, deleteTodo }) {
	return (
		<li className={todo.completed ? 'todo-completed' : 'todo'}>
			<div className="line-item">
				<p className="todo-desc" onClick={() => completeTodo(todo._id)}>
					{todo.description}
				</p>
				<button onClick={() => deleteTodo(todo._id)}>
					<img
						className="trash-icon"
						src="./assets/trash.svg"
						alt="delete button"
					/>
				</button>
			</div>
		</li>
	);
}
export default Lineitem;
