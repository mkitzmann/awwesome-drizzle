import { db } from './index';
import { projects } from './schema';
import { Project } from '../../types';

export const addProjectsAction = async (projectsInsert: Project[]) => {
	await db.insert(projects).values(projectsInsert).onConflictDoNothing();
};
