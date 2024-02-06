import schedule from "node-schedule"
import {addProjectAction} from "./lib/server/db/actions";
import {getProjectsFromSources} from "./lib/server/crawler";
import {db} from "./lib/server/db";
import {projects} from "./lib/server/db/schema";

// const crawlerJob = schedule.scheduleJob('*/1 * * * *', async function () {
	console.log('\x1B[34m[crawler] started')
	const start = Date.now();
	const projectsInsert = await getProjectsFromSources()
	// const projects = []
await db.insert(projects).values(projectsInsert).onConflictDoNothing()
	// await addProjectAction(projectsInsert)
	const end = Date.now();
	console.log(
		`\x1B[34m[crawler] found ${projectsInsert.length} projects in ${end - start}ms`
	);
// })
