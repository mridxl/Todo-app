function Lineitem({ todo }) {
	return (
		<li className={todo.completed ? 'todo-completed' : 'todo'}>
			<button>
				<p className="todo-desc">{todo.description}</p>
			</button>
		</li>
	);
}
export default Lineitem;
