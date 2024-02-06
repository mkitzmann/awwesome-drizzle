import { getProjectsFromSources } from './lib/server/crawler';
import { Project } from './lib/types';
import { CronJob } from 'cron';
import { addProjectsAction } from './lib/server/db/actions';

const crawlerPrefix = '\x1B[34m[crawler] ';

export const addProjects = async (projectsInsert: Project[]) => {
	const start = Date.now();
	await addProjectsAction(projectsInsert);
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
	await addProjects(projectsInsert);
};

const crawlerJob = CronJob.from({
	cronTime: '*/1 * * * *',
	onTick: crawlTask,
	start: true
});

await crawlTask();
