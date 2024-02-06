import { getProjectsFromSources } from './lib/server/crawler';
import { db } from './lib/server/db';
import { projects } from './lib/server/db/schema';
import { Project } from './lib/types';
import { CronJob } from 'cron';

const crawlerPrefix = '\x1B[34m[crawler] ';

export const addProjectAction = async (projectsInsert: Project[]) => {
	const start = Date.now();
	await db.insert(projects).values(projectsInsert).onConflictDoNothing();
	const end = Date.now();
	console.log(`${crawlerPrefix} added ${projectsInsert.length} projects to db in ${end - start}ms`);
};

export const getProjects = async () => {
	const start = Date.now();
	const projectsInsert = await getProjectsFromSources();
	const end = Date.now();
	console.log(`${crawlerPrefix} found ${projectsInsert.length} projects in ${end - start}ms`);
	return projectsInsert;
};

const crawlTask = async () => {
	console.log(`${crawlerPrefix} started at ${new Date().toISOString()}`);
	const projectsInsert = await getProjects();
	await addProjectAction(projectsInsert);
};

const crawlerJob = CronJob.from({
	cronTime: '*/1 * * * *',
	onTick: crawlTask,
	start: true
});

await crawlTask();
