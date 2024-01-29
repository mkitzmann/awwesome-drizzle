import {db} from "./index";
import {project} from "./schema";
import * as crypto from "crypto";

export const addProjectAction = async (item) => {
	// const description = formData.get("description") as string;
	// const title = formData.get("title") as string;
	db.insert(project)
		.values({
			id: crypto.randomUUID(),
			websiteUrl: item

		})
		.run();
};
