import { db } from '@/db';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { admin, username } from 'better-auth/plugins';
import { ac, user, admin as adminRole } from './permissions';
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  emailAndPassword: {
    enabled: true,
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
    additionalFields: {
      role: {
        type: 'string',
        required: true,

        defaultValue: 'user',
      },
      username: {
        type: 'string',
        required: true,
        unique: true,
        defaultValue: '',
      },
    },
  },
  secret: process.env.BETTER_AUTH_SECRET!,
  baseURL: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
});

export type Session = typeof auth.$Infer.Session.session;
export type User = typeof auth.$Infer.Session.user;
