import { pgTable, unique, text, timestamp, boolean } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const userProfiles = pgTable("user_profiles", {
    id: text().default(').primaryKey().notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
    firstName: text("first_name").default(').notNull(),
    lastName: text("last_name").default(').notNull(),
    username: text().default(').notNull(),
    emailAddress: text("email_address").default(').notNull(),
    mobilePhoneNumber: text("mobile_phone_number").default(').notNull(),
    cprNumber: text("cpr_number").default(').notNull(),
    userImage: text("user_image").default(').notNull(),
    agreeToTerms: boolean("agree_to_terms").default(false).notNull(),
    termsAgreedAt: timestamp("terms_agreed_at", { withTimezone: true, mode: 'string' }).default(sql`(now() AT TIME ZONE 'utc'::text)`).notNull(),
    role: text().default('user').notNull(),
}, (table) => [
    unique("user_profiles_username_key").on(table.username),
    unique("user_profiles_email_address_key").on(table.emailAddress),
    unique("user_profiles_mobile_phone_number_key").on(table.mobilePhoneNumber),
    unique("user_profiles_cpr_number_key").on(table.cprNumber),
]);
