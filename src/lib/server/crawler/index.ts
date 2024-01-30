import {config} from "../../../../awwesome.config";
import {Project} from "../../types";
import {extractRepositories} from "./markdownParser";

export async function getProjectsFromSources(): Promise<Project[]> {
	const markdown = await combineSources(config.urls);
	const { projects } = extractRepositories(markdown);
	return projects;
}

async function combineSources(urls: string[]): Promise<string> {
	let combinedMarkdown = '';
	for (const item of urls) {
		const response = await fetch(item);
		const markdown = await response.text();
		combinedMarkdown = combinedMarkdown + markdown;
	}
	return combinedMarkdown;
}
