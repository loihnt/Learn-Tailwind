import { useState } from "react";
import TodoItem from "./TodoItem";
import Todo from "./Todo";

//honguyentailoi
export default function TodoList() {
	const [job, setJob] = useState("");
	const [jobs, setJobs] = useState<Todo[]>(() => {
		const storageJobs = JSON.parse(localStorage.getItem("jobs") as string);
		return storageJobs ?? [];
	});
	const [isOpen, toggle] = useState<boolean>(false);

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
		// console.log(id);
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
	const openModal = () => {
		toggle(!isOpen);
	};
	return (
		<div className="">
			<div className="text-center text-6xl my-2 mx-20 font-bold text-gray-400 py-5">
				<h1>TODO LIST</h1>
			</div>

			<div className="flex mx-20 ">
				<input
					className="border-2 border-gray-300 rounded-[0.5vw] flex-1/6 mr-1 pl-2"
					value={job}
					onChange={(e) => setJob(e.target.value)}
				></input>
				<button
					className=" bg-blue-600 text-white rounded-[0.75vw] px-5 py-1 cursor-pointer hover:hover:bg-sky-400"
					onClick={handleSubmit}
				>
					Add Task
				</button>
			</div>
			<div className="flex flex-col px-5 pb-5 pt-3 bg-gray-200 mx-20 mt-2 rounded-[1vw]">
				{jobs.map((j, index) => (
					<TodoItem
						key={index}
						todo={j}
						handleRemove={handleRemove}
						hanndleDone={handleDone}
						handleEdit={openModal}
						open={isOpen}
					></TodoItem>
				))}
			</div>
		</div>
	);
}
