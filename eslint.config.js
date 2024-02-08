const typescript_plugin = require('@typescript-eslint/eslint-plugin')
const typescript_parser = require('@typescript-eslint/parser')

module.exports = [
  {
    plugins: {
      typescript_plugin
    },
    languageOptions: {
      parser: typescript_parser
    },
    ignores: [],
    rules: {}
  },
  // extends ...
  typescript_plugin.configs.eslint_recommended
]
