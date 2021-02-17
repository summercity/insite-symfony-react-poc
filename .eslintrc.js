module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'eslint-config-prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'eslint-plugin-prettier'],
  ignorePatterns: ['assets/controllers/**', '/build/**', 'bootstrap.js'],
  rules: {
    'no-unused-vars': [
      'warn',
      { args: 'none', argsIgnorePattern: 'req|res|next|val' },
    ],
    'prettier/prettier': ['error'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
