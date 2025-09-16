import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { teams } from './teams';

export const projects = sqliteTable('projects', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  teamId: text('team_id').notNull().references(() => teams.id),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});
