CREATE TABLE `project` (
	`id` text PRIMARY KEY NOT NULL,
	`website_url` text NOT NULL,
	`licenses` text,
	`platforms` text,
	`tags` text,
	`source_code_url` text,
	`stargazers_count` integer,
	`created_at` integer,
	`updated_at` integer
);
