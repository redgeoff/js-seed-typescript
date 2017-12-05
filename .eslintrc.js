module.exports = {
  extends: 'standard',
  parser: 'typescript-eslint-parser',
  env: {
    mocha: true
  },
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    'max-len': [2, 100, 2]
  }
}
