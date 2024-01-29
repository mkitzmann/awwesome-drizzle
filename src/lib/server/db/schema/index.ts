import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const project = sqliteTable("project", {
	id: text("id").primaryKey(),
	websiteUrl: text("website_url").notNull(),
	licenses: text("licenses"),
	platforms: text("platforms"),
	tags: text("tags"),
	sourceCodeUrl: text("source_code_url"),
	stargazersCount: integer("stargazers_count"),
	createdAt: integer("created_at", {mode: 'timestamp'}),
	updatedAt: integer("updated_at", {mode: 'timestamp'}),
});
