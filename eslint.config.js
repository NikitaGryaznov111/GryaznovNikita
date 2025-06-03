import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginJs from '@eslint/js'

export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        browser: true,
        es2021: true,
        node: true,
      },
    },
  },

  pluginJs.configs.recommended,

  ...tseslint.configs.recommended,

  eslintConfigPrettier,
]
