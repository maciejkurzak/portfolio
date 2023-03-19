module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
    "plugin:react/recommended",
    "plugin:astro/recommended",
    "tslint:latest",
    "tslint-config-prettier",
  ],
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
  },
  env: {
    es6: true,
  },
  ignorePatterns: [
    'node_modules',
    '.eslintrc.cjs'
  ],
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "camelcase": "error",
    "spaced-comment": "error",
    "quotes": ["error", "single"],
    "no-duplicate-imports": "error"
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // override/add rules settings here, such as:
        "astro/no-set-html-directive": "error",
        "import/prefer-default-export": "off",
      },
    },
  ],
}
