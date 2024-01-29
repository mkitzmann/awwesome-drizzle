import {db} from "../lib/server/db";
import {project} from "../lib/server/db/schema";

export async function load({params}) {
	const projects = db.select().from(project)
	return {...await projects};
}
