import { useState } from "react";
import TodoItem from "./TodoItem";
import Todo from "./Todo";

export default function TodoList() {
	const [job, setJob] = useState("");
	const [jobs, setJobs] = useState<Todo[]>([]);

	const handleSubmit = function () {
		const j = new Todo(job);
		console.log(job);
		setJobs((prev) => [...prev, j]);
		setJob("");
	};

	const handleRemove = function (index: number) {
		const newJobs = jobs.filter((_value, i) => i !== index);
		setJobs(newJobs);
	};

	const handleDone = function (index: number) {
		jobs[index].finished = !jobs[index].finished;
		setJobs(jobs);
	};
	return (
		<>
			<div className="text-center text-4xl my-2 mx-20 font-bold text-gray-400">
				<h1>TODO LIST</h1>
			</div>

			<div className="flex mx-20 ">
				<input
					className="rounded-[0.5vw] flex-1/6 mr-1 pl-2"
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
			<div className="flex p-5 bg-gray-200 mx-20 mt-2 rounded-[1vw]">
				<ul className="flex-auto  -my-3">
					{jobs.map((job, index) => (
						<li className="bg-white my-3 p-3" key={index}>
							<div className="flex justify-between">
								<div className="flex-0 ">
									<input
										onChange={() => handleDone(index)}
										type="checkbox"
										className=" size-5 checked:bg-blue-500 mr-2 text-blue-800"
									></input>
								</div>
								<div
									className={`flex-2 ${
										job.finished
											? "line-through"
											: "font-bold"
									}
										`}
								>
									{job.title}
								</div>
								<div className="flex-none">
									<button
										onClick={() => handleRemove(index)}
										className=" cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-[0.5vw]"
									>
										Remove
									</button>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
