import {text, integer, sqliteTable, primaryKey} from "drizzle-orm/sqlite-core";
import {relations} from "drizzle-orm";

export const projects = sqliteTable("projects", {
	primary_url: text("primary_url").primaryKey(),
	name: text("name"),
	source_url: text("source_url"),
	demo_url: text("demo_url"),
	description: text("description"),
	license: text("license", { mode: 'json' }),
	stack: text("stack"),
	// categories: text("category"),
	stars: integer("stars"),
	avatar_url: text("avatar_url"),
	// topics: text("topics", { mode: 'json' }),
	commit_history: text("commit_history", { mode: 'json' }),
	pushedAt: integer("pushed_at", {mode: 'timestamp'}),
	firstAdded: integer("first_added", {mode: 'timestamp'}),
	createdAt: integer("created_at", {mode: 'timestamp'}),
});

// export const projectRelations = relations(projects, ({ one, many }) => ({
// 	categories: many(categories),
	// commitCounts: many(commitCount, {
	// 	fields: [project.name],
	// 	references: [commitCount.project_id],
	// }),
	// topics: many(topic, {
	// 	// via: 'project_topics', // Intermediate table
	// 	fields: [project.name],
	// 	references: [topic.name],
	// }),
// }));

export const commitCount = sqliteTable("commit_count", {
	project_id: text("project_id"),
	date: text("date"),
	count: integer("count"),
});

// export const commitCountRelations = relations(commitCount, ({ one }) => ({
// 	project: one(project, {
// 		fields: [commitCount.project_id],
// 		references: [project.name],
// 	}),
// }));
//
export const categories = sqliteTable("categories", {
	slug: text("slug").primaryKey(),
	name: text("name"),
	parent_slug: text("parent_slug"),
});

// export const categoriesRelations = relations(categories, ({ many }) => ({
// 	projects: many(projects),
// }));
//
export const projectsOnCategories = sqliteTable('projects_categories', {
		projectPrimaryUrl: text('project_primary_url').notNull().references(() => projects.primary_url),
		categoriesSlug: text('categories_slug').notNull().references(() => categories.slug),
	}
);


export const topic = sqliteTable("topic", {
	name: text("name").primaryKey(),
});
