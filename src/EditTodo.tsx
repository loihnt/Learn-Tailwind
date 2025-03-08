import { useState } from "react";
import useTodoStore from "./TodoStore";
import { stringify } from "uuid";

type EditTodoProps = {
	id: string;
	onClose: () => void;
};
export default function EditTodo({ id, onClose }: EditTodoProps) {
	const [editTask, setEditTask] = useState("");
	const { editTodoById } = useTodoStore();

	function handleOnClose(_e: React.MouseEvent) {
		onClose();
	}

	function onEdit(id: string) {
		editTodoById(id, editTask);
	}
	function handleEdit() {
		onEdit(id);
		onClose();
	}
	return (
		<div>
			<input
				type="text"
				value={editTask}
				onChange={(e) => setEditTask(e.target.value)}
			/>
			<button onClick={handleOnClose}>Cancel</button>
			<button onClick={handleEdit}>Confirm</button>
		</div>
	);
}
