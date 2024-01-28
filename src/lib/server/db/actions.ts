import {db} from "./index";
import {event} from "./schema";

export const addEventAction = async () => {
	// const description = formData.get("description") as string;
	// const title = formData.get("title") as string;

	db.insert(event)
		.values({
			description:'description',
			id: 4,
			admin: 2,
			title: 'title',
		})
		.run();
};
