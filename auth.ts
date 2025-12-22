import { db } from '@/db';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { admin, username } from 'better-auth/plugins';
import * as schema from './db/schema/app-schema';
import { ac, user, admin as adminRole } from './lib/better-auth/permissions';
export const auth = betterAuth({
  trustedOrigins: [
    'http://localhost:3000',
    'https://creta-treasure-hunting.vercel.app',
  ],
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    autoSignIn: true,
  },
  plugins: [
    admin({
      ac,
      roles: {
        user,
        admin: adminRole,
      },
      defaultRole: 'user',
    }),

    username(),
  ],
  user: {
    modelName: 'users', // Custom table name
    fields: {
      name: 'full_name',
      email: 'email_address',
      image: 'user_image',
    },
    additionalFields: {
      first_name: {
        type: 'string',
        required: true,
        defaultValue: '',
        input: true,
      },
      last_name: {
        type: 'string',
        required: true,
        defaultValue: '',
        input: true,
      },
      role: {
        type: 'string',
        required: false,
        defaultValue: 'user',
        input: false,
      },
      cpr_number: {
        type: 'string',
        required: true,
        defaultValue: '',
        input: true,
        unique: true,
      },
      mobile_phone_number: {
        type: 'string',
        required: true,
        defaultValue: '',
        input: true,
        unique: true,
      },
      agreed_to_terms: {
        type: 'boolean',
        required: true,
        defaultValue: false,
        input: true,
      },
    },
  },
  session: {
    modelName: 'user_sessions',
    fields: {
      userId: 'user_id',
    },
  },
  account: {
    modelName: 'accounts', // Custom table name
    fields: {
      userId: 'user_id',
      accountId: 'account_id',
      providerId: 'provider_id',
      accessToken: 'access_token',
      refreshToken: 'refresh_token',
    },
  },
  verification: {
    modelName: 'verifications', // Custom table name
    fields: {
      identifier: 'email_identifier',
      value: 'verification_value',
      expiresAt: 'expires_at',
    },
  },

  secret: process.env.BETTER_AUTH_SECRET!,
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_URL
      : process.env.BETTER_AUTH_URL || 'http://localhost:3000',
  basePath: '/api/auth',
});

export type Session = typeof auth.$Infer.Session.session;
export type User = typeof auth.$Infer.Session.user;
