import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './app/db/schema/index.ts',
  out: './app/db/migrations',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.LIBSQL_URL!,
  },
  verbose: true,
  strict: true,
});
