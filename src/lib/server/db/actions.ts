import {db} from "./index";
import {projects} from "./schema";
import * as crypto from "crypto";
import {Project} from "../../types";



export const addProjectAction = async (projectsInsert: Project[]) => {
	db.insert(projects)
		.values(projectsInsert)
		.run();
};
