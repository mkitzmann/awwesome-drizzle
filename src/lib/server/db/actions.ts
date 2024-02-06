import {db} from "./index";
import {projects} from "./schema";
import {Project} from "../../types";

export const addProjectAction = async (projectsInsert: Project[]) => {
	db.insert(projects).values(projectsInsert)
};
