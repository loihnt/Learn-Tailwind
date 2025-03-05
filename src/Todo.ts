export default class Todo {
	title: string = "";
	finished: boolean = false;
	constructor(title: string, finished: boolean = false) {
		this.title = title;
		this.finished = finished;
	}
}
