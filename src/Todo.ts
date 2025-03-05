export default class Todo {
	id: string;
	title: string = "";
	finished: boolean = false;
	constructor(title: string, finished: boolean = false, id: string) {
		this.title = title;
		this.finished = finished;
		this.id = id;
	}
}
