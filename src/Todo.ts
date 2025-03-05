export default class Todo {
	id: number;
	title: string = "";
	finished: boolean = false;
	constructor(title: string, finished: boolean = false, id: number) {
		this.title = title;
		this.finished = finished;
		this.id = id;
	}
}
