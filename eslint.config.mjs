import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettier from 'eslint-config-prettier'; // Add Prettier plugin

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      // Dependencies
      'node_modules',
      '.pnp',
      '.pnp.js',

      // Build outputs
      '.next/',
      'out/',
      'build/',
      'dist/',

      // Cache
      '.npm',
      '.eslintcache',

      // Misc
      '.DS_Store',
      '*.pem',

      // Debug
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',

      // Environment Variables
      '.env',
      '.env.local',
      '.env.development.local',
      '.env.test.local',
      '.env.production.local',

      // Vercel
      '.vercel',

      // TypeScript
      '*.tsbuildinfo',
      'next-env.d.ts',

      // Coverage
      'coverage/',

      // Github Actions
      '.github/workflows/ci-cd.yml',
    ],
  },

  // Add Prettier last to override conflicting style rules
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Common rules for TypeScript and Next.js projects
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Error prevention
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-alert': 'warn',
      'no-unused-vars': 'off', // Typescript handles this
      'import/no-anonymous-default-export': 'off', // Disable anonymous default export rule

      // Style consistency - removed conflicting rules with Prettier
      // These will be managed by prettier instead

      // React specifics
      'react/prop-types': 'off', // Not needed with TypeScript
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js

      // Imports formatting
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          alphabetize: { order: 'asc' },
        },
      ],
    },
  },

  // TypeScript specific rules
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'interface', format: ['PascalCase'] },
        { selector: 'typeAlias', format: ['PascalCase'] },
        { selector: 'enum', format: ['PascalCase'] },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
    },
  },

  // Next.js specific rules
  {
    files: ['src/app/**/*.{ts,tsx}'],
    rules: {
      'import/no-default-export': 'off', // Next.js requires default exports for pages
      'react/display-name': 'off', // Next.js handles this automatically
    },
  },

  // Add Prettier config last to override any conflicting rules
  eslintPluginPrettier,
];

export default eslintConfig;
