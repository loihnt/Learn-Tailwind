import { v4 as uuidv4 } from "uuid";
export default class Todo {
	id: string;
	title: string = "";
	finished: boolean = false;
	constructor(title: string) {
		this.title = title;
		this.id = uuidv4();
	}
}
