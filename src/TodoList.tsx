import { useState } from "react";
import TodoItem from "./TodoItem";
import Todo from "./Todo";
import Modal from "./Modal";
import EditTodo from "./EditTodo";
import useTodoStore from "./TodoStore";

//honguyentailoi
export default function TodoList() {
	const [job, setJob] = useState("");
	const [jobs, setJobs] = useState<Todo[]>(() => {
		const storageJobs = JSON.parse(localStorage.getItem("jobs") as string);
		return storageJobs ?? [];
	});

	const [editTodoId, setEditTodoId] = useState<string>();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { getAllTodos } = useTodoStore();
	//commit todo
	const handleSubmit = function () {
		const j = new Todo(job);
		setJobs((prev) => {
			const newJobs = [...prev, j];

			localStorage.setItem("jobs", JSON.stringify(newJobs));

			return newJobs;
		});
		setJob("");
	};

	//remove todo
	const handleRemove = function (id: string) {
		const newJobs = jobs.filter((job) => job.id !== id);
		setJobs(newJobs);

		localStorage.setItem("jobs", JSON.stringify(newJobs));
	};

	//complete todo
	const handleDone = function (i: string) {
		setJobs(
			jobs.map((j) => {
				if (j.id === i) {
					return { ...j, finished: !j.finished };
				} else {
					return j;
				}
			})
		);
	};

	function toggleOpen() {
		setIsOpen(!isOpen);
	}

	const openModal = (id: string) => {
		setEditTodoId(id);
		toggleOpen();
	};

	function handleClose() {
		toggleOpen();
		setEditTodoId("");
		setJobs(getAllTodos());
	}

	return (
		<div className="">
			<div className="py-5 my-2 mx-20 text-6xl font-bold text-center text-gray-400">
				<h1>TODO LIST</h1>
			</div>

			<div className="flex mx-20">
				<input
					className="pl-2 mr-1 border-2 border-gray-300 rounded-[0.5vw] flex-1/6"
					value={job}
					onChange={(e) => setJob(e.target.value)}
				></input>
				<button
					className="py-1 px-5 text-white bg-blue-600 cursor-pointer rounded-[0.75vw] hover:hover:bg-sky-400"
					onClick={handleSubmit}
				>
					Add Task
				</button>
			</div>
			<div className="flex flex-col px-5 pt-3 pb-5 mx-20 mt-2 bg-gray-200 rounded-[1vw]">
				{jobs.map((j, index) => (
					<TodoItem
						key={index}
						todo={j}
						handleRemove={handleRemove}
						hanndleDone={handleDone}
						handleEdit={openModal}
					></TodoItem>
				))}
			</div>
			<Modal isOpen={isOpen} title="Hello world" onClose={handleClose}>
				{editTodoId && (
					<EditTodo id={editTodoId} onClose={handleClose}></EditTodo>
				)}
			</Modal>
		</div>
	);
}
