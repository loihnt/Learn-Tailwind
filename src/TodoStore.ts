import Todo from "./Todo";

export default function useTodoStore() {
	function getAllTodos() {
		return JSON.parse(
			localStorage.getItem("jobs") as string
		) as Array<Todo>;
	}
	function addTodo(todo: Todo) {
		localStorage.setItem("jobs", JSON.stringify([...getAllTodos(), todo]));
	}
	function deleteTodo(todo: Todo) {
		localStorage.setItem(
			"jobs",
			JSON.stringify(getAllTodos().filter((t) => t.id !== todo.id))
		);
	}
	function editTodo(todo: Todo, newTodo: string) {
		const newTodoList = getAllTodos().map((item) => {
			if (item.id === todo.id) {
				item.title = newTodo;
			}
			return item;
		});

		localStorage.setItem("jobs", JSON.stringify(newTodoList));
	}
	function editTodoById(id: string, newTodo: string) {
		const newTodos = getAllTodos().map((item) => {
			if (item.id === id) {
				item.title = newTodo;
			}
			return item;
		});

		localStorage.setItem("jobs", JSON.stringify(newTodos));
	}
	function getTodoById(id: string) {
		const todos = getAllTodos();
		for (var item of todos) {
			if (item.id === id) {
				return item;
			}
		}
		throw new Error("Item with id does not exist");
	}
	return {
		getAllTodos,
		getTodoById,
		addTodo,
		deleteTodo,
		editTodo,
		editTodoById,
	};
}
