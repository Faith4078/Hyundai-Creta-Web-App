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
    'https://creta-omega.vercel.app',
  ],
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    autoSignIn: true,
    passwordOnUser: false, // Matches app-schema.ts where password is in accounts table
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
    modelName: 'users',
    fields: {
      name: 'full_name',
      email: 'email_address',
      image: 'user_image',
      emailVerified: 'email_verified',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
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
      banReason: {
        type: 'string',
        fieldName: 'ban_reason',
      },
      banExpires: {
        type: 'date',
        fieldName: 'ban_expires',
      },
    },
  },
  session: {
    modelName: 'user_sessions',
    fields: {
      userId: 'user_id',
      expiresAt: 'expires_at',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      ipAddress: 'ip_address',
      userAgent: 'user_agent',
    },
  },
  account: {
    modelName: 'accounts',
    fields: {
      userId: 'user_id',
      accountId: 'account_id',
      providerId: 'provider_id',
      accessToken: 'access_token',
      refreshToken: 'refresh_token',
      idToken: 'id_token',
      accessTokenExpiresAt: 'access_token_expires_at',
      refreshTokenExpiresAt: 'refresh_token_expires_at',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
  verification: {
    modelName: 'verifications',
    fields: {
      identifier: 'email_identifier',
      value: 'verification_value',
      expiresAt: 'expires_at',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },

  secret: process.env.BETTER_AUTH_SECRET!,
  baseURL: process.env.BETTER_AUTH_URL || (process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL : (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000')),
  basePath: '/api/auth',
});

export type Session = typeof auth.$Infer.Session.session;
export type User = typeof auth.$Infer.Session.user;
