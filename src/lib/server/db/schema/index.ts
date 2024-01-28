import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const event = sqliteTable("event", {
	id: text("id").primaryKey(),
	admin: text("admin_id"),
	title: text("title").notNull(),
	description: text("description"),
});
