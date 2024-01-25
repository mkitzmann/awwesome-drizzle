import type { Config } from 'drizzle-kit';
// import dotenv from 'dotenv';

// dotenv.config();

// We need to make sure the in the tsconfig.json file, we need to change the target at least to 'ES6'
export default {
	schema: './src/lib/server/db/schema/index.ts',
	out: './drizzle',
	driver: 'better-sqlite',
	dbCredentials: {
		url: 'awwesome.db'
		// url: process.env.DB_URL!,
	}
} satisfies Config;
