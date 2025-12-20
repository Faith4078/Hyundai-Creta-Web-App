import { createAccessControl } from 'better-auth/plugins/access';

// Define your resources and their actions
export const statement = {
  profile: ['read', 'update', 'delete'],
  settings: ['read', 'update'],
  content: ['create', 'read', 'update', 'delete'],
  admin_panel: ['access'],
} as const;

export const ac = createAccessControl(statement);

// Define roles with specific permissions
export const user = ac.newRole({
  profile: ['read', 'update'], // Users can read and update their own profile
  settings: ['read', 'update'],
  content: ['create', 'read', 'update'], // Can't delete content
});

export const admin = ac.newRole({
  profile: ['read', 'update', 'delete'], // Full profile control
  settings: ['read', 'update'],
  content: ['create', 'read', 'update', 'delete'],
  admin_panel: ['access'], // Only admins can access admin panel
});
