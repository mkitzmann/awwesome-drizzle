import {db} from "./index";
import {project} from "./schema";
import * as crypto from "crypto";
import {Project} from "../../types";

export const addProjectAction = async (projects: Project[]) => {
	db.insert(project)
		.values(projects.map((item) => ({
			id: crypto.randomUUID(),
			websiteUrl: item.primary_url
		})))
		.run();
};
