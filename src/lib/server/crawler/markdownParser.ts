import slugify from "slugify";
import {AllCategories, Category, Project} from "../../types";
import {
	extractCategory,
	extractDemoUrl,
	extractDescription,
	extractLicense,
	extractName,
	extractPrimaryUrl,
	extractSourceUrl,
	extractStack
} from "./extractors";

export interface ProjectsAndCategories {
	projects: Project[];
	categories: AllCategories;
}


function transformObjectToArray(obj): Category[] {
	const array = [];

	for (const key in obj) {
		const entry = { name: key, slug: slugify(key), children: [] };
		if (Object.keys(obj[key]).length > 0) {
			entry.children = transformObjectToArray(obj[key]);
		}
		array.push(entry);
	}

	return array;
}

export function extractRepositories(markdownText: string): ProjectsAndCategories {
	const lines = markdownText.split('\n');
	const projects: Project[] = [];

	let currentCategoryURL = '';
	const allCategoriesObject = {};

	const allCategories: AllCategories = { tree: [], names: {}, urls: new Set() };

	for (const line of lines) {
		if (line.startsWith('### ')) {
			const currentCategoryNames = extractCategory(line);
			if (currentCategoryNames[0] === 'Backup') {
				currentCategoryNames[0] = 'Backups';
			}
			currentCategoryURL = '';

			currentCategoryNames.forEach((categoryName) => {
				allCategories.names[slugify(categoryName)] = categoryName;
				currentCategoryURL = `${currentCategoryURL}/${slugify(categoryName)}`;
				allCategories.urls.add(currentCategoryURL);
			});

			[...currentCategoryNames].reduce(
				(prev, current) => (prev[current] = prev[current] ?? {}),
				allCategoriesObject
			);
			allCategories.tree = transformObjectToArray(allCategoriesObject);
			continue;
		}
		if (!line.startsWith('- [')) {
			continue;
		}
		if (!extractPrimaryUrl(line)) {
			continue;
		}

		const project: Project = {
			primaryUrl: extractPrimaryUrl(line),
			name: extractName(line),
			firstAdded: new Date(),
			description: extractDescription(line),
			stack: extractStack(line),
			license: extractLicense(line),
			source_url: extractSourceUrl(line),
			demo_url: extractDemoUrl(line),
			categories: currentCategoryURL
		};
		projects.push(project);
	}

	// allCategories.tree = allCategories.tree.sort((categoryA, categoryB) =>
	// 	categoryA.slug.localeCompare(categoryB.slug)
	// );

	return { projects, categories: allCategories };
}
