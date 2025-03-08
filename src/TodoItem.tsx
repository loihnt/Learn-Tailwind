import Todo from "./Todo";

type TodoItemProps = {
	todo: Todo;
	handleRemove: (id: string) => void;
	hanndleDone: (id: string) => void;
	handleEdit: (id: string) => void;
};

export default function TodoItem({
	todo,
	handleRemove,
	hanndleDone,
	handleEdit,
}: TodoItemProps) {
	function handleChange() {
		return hanndleDone(todo.id);
	}

	return (
		<div className=" rounded-[1vw] p-3 mt-3 flex flex-row bg-amber-50 justify-between">
			<input
				checked={todo.finished}
				onChange={handleChange}
				type="checkbox"
				className="mt-1 flex-0 size-5 checked:bg-blue-500 mr-2 text-blue-800 "
			></input>
			<p
				className={`flex-1 ${
					todo.finished ? "line-through" : "font-bold"
				}`}
			>
				{todo.title}
			</p>
			<button
				onClick={() => handleRemove(todo.id)}
				className="p-1 flex-0 cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-[0.5vw]"
			>
				Remove
			</button>
			{/* tai sao  */}
			<button
				onClick={() => handleEdit(todo.id)}
				className="ml-2 p-1 flex-0 cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-[0.5vw]"
			>
				Edit {todo.id}
			</button>
		</div>
	);
}
