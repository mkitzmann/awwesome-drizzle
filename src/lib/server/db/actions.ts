import {db} from "./index";
import {project} from "./schema";
import * as crypto from "crypto";
import {Project} from "../../types";

export const addProjectAction = async (projects: Project[]) => {
	db.insert(project)
		.values({
			id: crypto.randomUUID(),
			websiteUrl: projects[0].primary_url
		})
		.run();
};
