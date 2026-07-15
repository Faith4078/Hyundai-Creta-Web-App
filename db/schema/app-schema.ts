import { relations } from 'drizzle-orm';
import {
  pgTable,
  text,
  timestamp,
  boolean,
  index,
  integer,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: text('id').primaryKey(),
  full_name: text('full_name').notNull(),
  email_address: text('email_address').notNull().unique(),
  emailVerified: boolean('email_verified').default(false).notNull(),
  user_image: text('user_image'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
  role: text('role').default('user'),
  banned: boolean('banned').default(false),
  banReason: text('ban_reason'),
  banExpires: timestamp('ban_expires'),
  username: text('username').unique(),
  displayUsername: text('display_username'),
  first_name: text('first_name').default('').notNull(),
  last_name: text('last_name').default('').notNull(),
  cpr_number: text('cpr_number').default('').notNull().unique(),
  mobile_phone_number: text('mobile_phone_number')
    .default('')
    .notNull()
    .unique(),
  agreed_to_terms: boolean('agreed_to_terms').default(false).notNull(),
  // Challenge progress (0-10), maintained by the hunt flow via Supabase.
  days: integer('days'),
});

export const user_sessions = pgTable(
  'user_sessions',
  {
    id: text('id').primaryKey(),
    expiresAt: timestamp('expires_at').notNull(),
    token: text('token').notNull().unique(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
    ipAddress: text('ip_address'),
    userAgent: text('user_agent'),
    user_id: text('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    impersonatedBy: text('impersonated_by'),
  },
  (table) => [index('user_sessions_user_id_idx').on(table.user_id)]
);

export const accounts = pgTable(
  'accounts',
  {
    id: text('id').primaryKey(),
    account_id: text('account_id').notNull(),
    provider_id: text('provider_id').notNull(),
    user_id: text('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    access_token: text('access_token'),
    refresh_token: text('refresh_token'),
    idToken: text('id_token'),
    accessTokenExpiresAt: timestamp('access_token_expires_at'),
    refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
    scope: text('scope'),
    password: text('password'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index('accounts_user_id_idx').on(table.user_id)]
);

export const verifications = pgTable(
  'verifications',
  {
    id: text('id').primaryKey(),
    email_identifier: text('email_identifier').notNull(),
    verification_value: text('verification_value').notNull(),
    expires_at: timestamp('expires_at').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .defaultNow()
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [
    index('verifications_email_identifier_idx').on(table.email_identifier),
  ]
);

export const leads = pgTable(
  'leads',
  {
    id: text('id')
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    full_name: text('full_name').notNull(),
    email_address: text('email_address').notNull(),
    phone_number: text('phone_number').notNull(),
    // CRM sync state: 'pending' | 'synced' | 'failed'
    sync_status: text('sync_status').default('pending').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .defaultNow()
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index('leads_sync_status_idx').on(table.sync_status)]
);

export const usersRelations = relations(users, ({ many }) => ({
  user_sessionss: many(user_sessions),
  accountss: many(accounts),
}));

export const user_sessionsRelations = relations(user_sessions, ({ one }) => ({
  users: one(users, {
    fields: [user_sessions.user_id],
    references: [users.id],
  }),
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
  users: one(users, {
    fields: [accounts.user_id],
    references: [users.id],
  }),
}));
