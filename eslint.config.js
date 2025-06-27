import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      ecmaVersion: 2022,
      sourceType: 'module'
    },
    rules: {
      'eqeqeq': 'error',
      'comma-dangle': ['error', 'never'],
      'consistent-return': 'error',
      'no-unused-vars': 'off',
      'quotes': ['error', 'single'],
      'semi': ['error', 'always']
    }
  },
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  }
];
