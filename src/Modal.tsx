// import Todo from "./Todo";

type typeModal = {
	toggle: () => void;
	t: string;
	isOpen: boolean;
};
export default function Modal({ toggle, t, isOpen }: typeModal) {
	return (
		<>
			{isOpen && (
				<div className="bg-blue-200 absolute top-0 bottom-0 left-0 right-0">
					<button
						className="bg-gray-300 p-3 cursor-pointer"
						onClick={toggle}
					>
						Exit {t}
					</button>
					<input></input>
				</div>
			)}
		</>
	);
}
