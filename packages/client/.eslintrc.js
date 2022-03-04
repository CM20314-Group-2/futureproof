module.exports = {
  ignorePatterns: ['**/node_modules/**/*', '**/dist/**/*'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', '@typescript-eslint'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    eqeqeq: ['error', 'smart'],
    'space-infix-ops': [
      'error',
      {
        int32Hint: false,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'react-native/no-inline-styles': 2,
    'react-native/sort-styles': 1,
    'react-native/no-unused-styles': 1,
    'eol-last': [
      'error',
      'always'
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
