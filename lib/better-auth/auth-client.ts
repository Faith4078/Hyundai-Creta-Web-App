// lib/auth-client.ts
import { createAuthClient } from 'better-auth/react';
import { adminClient } from 'better-auth/client/plugins';
import { ac, user, admin } from './permissions';
import { usernameClient } from 'better-auth/client/plugins';
import { inferAdditionalFields } from 'better-auth/client/plugins';
import type { auth } from '../../auth';
export const authClient = createAuthClient({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_URL
      : process.env.BETTER_AUTH_URL || 'http://localhost:3000',
  plugins: [
    adminClient({
      ac,
      roles: {
        user,
        admin,
      },
    }),
    usernameClient(),
    inferAdditionalFields<typeof auth>(),
  ],
});

export const { signIn, signUp, signOut, useSession } = authClient;
