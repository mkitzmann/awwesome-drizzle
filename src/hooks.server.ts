import schedule from "node-schedule"
import {addProjectAction} from "./lib/server/db/actions";
import {getProjectsFromSources} from "./lib/server/crawler";

const crawlerJob = schedule.scheduleJob('*/1 * * * *', async function () {
	console.log('\x1B[34m[crawler] started')
	const start = performance.now();
	const projects = await getProjectsFromSources()
	await addProjectAction(projects)
	const end = performance.now();
	console.log(
		`\x1B[34m[crawler] loaded ${projects.length} projects in ${end - start}ms`
	);
})
