import Lineitem from './Lineitem';

function TodoItems({ todolist, setTodolist }) {
	return (
		<ol className="toDoList">
			{todolist &&
				todolist.map((todo, i) => {
					return <Lineitem key={i} todo={todo} />;
				})}
		</ol>
	);
}
export default TodoItems;
