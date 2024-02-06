CREATE TABLE IF NOT EXISTS "projects" (
	"primary_url" integer PRIMARY KEY NOT NULL,
	"name" text,
	"source_url" text,
	"demo_url" text,
	"description" text,
	"license" json,
	"stack" text,
	"stars" integer,
	"avatar_url" text,
	"commit_history" json,
	"pushed_at" date,
	"first_added" date,
	"created_at" date
);
