function TodoItems() {
	return (
		<ol className="toDoList">
			<li className="todo" key="1">
				<button>
					<p className="todo-desc">todo description</p>
				</button>
			</li>
			<li className="todo" key="2">
				<button>
					<p className="todo-desc">todo description</p>
				</button>
			</li>
			<li className="todo-completed" key="3">
				<button>
					<p className="todo-desc">todo description</p>
				</button>
			</li>
		</ol>
	);
}
export default TodoItems;
