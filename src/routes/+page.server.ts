import {db} from "../lib/server/db";
import {projects} from "../lib/server/db/schema";

export async function load({params}) {
	// const projectsData = db.select().from(projects)
	// const projectsData = new Promise(() => {})
	// return {...await projectsData};
	return {test: 'da'}
}
