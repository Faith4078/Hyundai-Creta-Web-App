-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "user_profiles" (
	"id" text PRIMARY KEY DEFAULT '' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"first_name" text DEFAULT '' NOT NULL,
	"last_name" text DEFAULT '' NOT NULL,
	"username" text DEFAULT '' NOT NULL,
	"email_address" text DEFAULT '' NOT NULL,
	"mobile_phone_number" text DEFAULT '' NOT NULL,
	"cpr_number" text DEFAULT '' NOT NULL,
	"user_image" text DEFAULT '' NOT NULL,
	"agree_to_terms" boolean DEFAULT false NOT NULL,
	"terms_agreed_at" timestamp with time zone DEFAULT (now() AT TIME ZONE 'utc'::text) NOT NULL,
	"role" text DEFAULT 'user' NOT NULL,
	CONSTRAINT "user_profiles_username_key" UNIQUE("username"),
	CONSTRAINT "user_profiles_email_address_key" UNIQUE("email_address"),
	CONSTRAINT "user_profiles_mobile_phone_number_key" UNIQUE("mobile_phone_number"),
	CONSTRAINT "user_profiles_cpr_number_key" UNIQUE("cpr_number")
);
--> statement-breakpoint
ALTER TABLE "user_profiles" ENABLE ROW LEVEL SECURITY;
*/