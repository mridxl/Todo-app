function CreateTodo() {
	return (
		<>
			<input
				className="input-box"
				id="todo"
				placeholder="~ Today I need to ~"
				autoComplete="off"
			/>
			<button className="button">
				<span>Submit</span>
			</button>
		</>
	);
}

export default CreateTodo;
