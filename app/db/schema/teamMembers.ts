import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { users } from './users';
import { teams } from './teams';

export const teamMembers = sqliteTable('team_members', {
  userId: text('user_id').notNull().references(() => users.id),
  teamId: text('team_id').notNull().references(() => teams.id),
});
