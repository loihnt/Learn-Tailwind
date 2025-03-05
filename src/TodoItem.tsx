import Todo from "./Todo";

export default function TodoItem({ todo }: { todo: Todo }) {
	return <div className="-mt-1">{todo.title}</div>;
}
