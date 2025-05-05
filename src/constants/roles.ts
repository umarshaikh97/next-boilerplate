// Role type constants
export const ROLES = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  MANAGER: 'MANAGER',
  VIEWER: 'VIEWER',
  EDITOR: 'EDITOR',
};

// Role permissions mapping
export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: [
    'create',
    'read',
    'update',
    'delete',
    'manage_users',
    'manage_roles',
  ],
  [ROLES.MANAGER]: ['create', 'read', 'update', 'delete', 'manage_users'],
  [ROLES.EDITOR]: ['create', 'read', 'update'],
  [ROLES.USER]: ['create', 'read'],
  [ROLES.VIEWER]: ['read'],
};

// Role display names
export const ROLE_DISPLAY_NAMES = {
  [ROLES.ADMIN]: 'Administrator',
  [ROLES.MANAGER]: 'Manager',
  [ROLES.EDITOR]: 'Editor',
  [ROLES.USER]: 'Regular User',
  [ROLES.VIEWER]: 'View Only',
};
