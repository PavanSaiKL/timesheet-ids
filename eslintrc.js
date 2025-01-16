module.exports = {
    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          ecmaVersion: 2021,
          sourceType: 'module',
        },
        plugins: ['@typescript-eslint'],
        rules: {
          '@typescript-eslint/no-unused-vars': 'error',
          '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
          '@typescript-eslint/no-explicit-any': 'error',
          'no-console': 'warn',
          'indent': ['error', 2],
          'linebreak-style': ['error', 'unix'],
          'quotes': ['error', 'single'],
          'semi': ['error', 'always'],
          'comma-dangle': ['error', 'always-multiline'],
          'max-len': ['error', { code: 120 }],
        },
      },
    ],
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  