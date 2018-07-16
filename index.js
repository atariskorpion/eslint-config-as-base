module.exports = {
  extends: [
    './rules/syntax-preferences',
    './rules/spacing-details',
    './rules/file-whitespace',
    './rules/syntax-preferences'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    strict: 'error',
  },
};
