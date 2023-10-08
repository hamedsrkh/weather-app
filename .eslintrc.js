module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'standard',
    'standard-react',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/no-unused-prop-types': [2],
    'react/jsx-handler-names': [
      'warn',
      {
        eventHandlerPropPrefix: 'on|do',
      },
    ],
    'no-shadow': 0,
    // custom additions
    curly: 'error',
    'object-curly-spacing': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'rest-spread-spacing': ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    eqeqeq: ['error', 'always'],
    'no-restricted-imports': ['error', 'react-i18next'],
    'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
    'no-restricted-syntax': [
      'error',
      {
        selector:
          'CallExpression[callee.object.name="console"][callee.property.name="log"]',
        message:
          'Unexpected console.log(). Use a different console method instead.',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        'no-use-before-define': 'off',
        'no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
      },
    },
  ],
}
