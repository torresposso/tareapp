import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { projects } from './projects';
import { users } from './users';

export const tasks = sqliteTable('tasks', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  status: text('status').default('pending').notNull(),
  projectId: text('project_id').notNull().references(() => projects.id),
  assignedTo: text('assigned_to').references(() => users.id),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});
