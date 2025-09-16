import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

export const db = drizzle(process.env.LIBSQL_URL!, { schema });
