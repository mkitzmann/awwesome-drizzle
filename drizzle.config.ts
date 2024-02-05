import type { Config } from 'drizzle-kit';
const { DATABASE_URL } = process.env;
if (!DATABASE_URL) {
	throw new Error('No url');
}
// dotenv.config();

// We need to make sure the in the tsconfig.json file, we need to change the target at least to 'ES6'
export default {
	schema: './src/lib/server/db/schema/index.ts',
	out: './drizzle',
	driver: 'pg',
	dbCredentials: {
		connectionString: DATABASE_URL
	}
} satisfies Config;
