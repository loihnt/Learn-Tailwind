import { useState } from "react";
import TodoItem from "./TodoItem";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
//honguyentailoi
export default function TodoList() {
	const [job, setJob] = useState("");
	const [jobs, setJobs] = useState<Todo[]>([]);

	const handleSubmit = function () {
		const id = uuidv4();
		const j = new Todo(job, false, id);
		setJobs((prev) => [...prev, j]);
		setJob("");
	};

	const handleRemove = function (id: string) {
		setJobs(jobs.filter((job) => job.id !== id));
	};

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
					></TodoItem>
				))}
			</div>
		</div>
	);
}
