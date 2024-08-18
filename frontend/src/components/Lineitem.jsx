function Lineitem({ todo, completeTodo }) {
	return (
		<li className={todo.completed ? 'todo-completed' : 'todo'}>
			<div className="line-item">
				<p
					className="todo-desc"
					onClick={() => completeTodo(todo._id)}
				>
					{todo.description}
				</p>
				<button>
					<img className='trash-icon' src="./assets/trash.svg" alt="delete button" />
				</button>
			</div>
		</li>
	);
}
export default Lineitem;
