import globals from "globals";
import pluginJest from "eslint-plugin-jest";
import js from "@eslint/js"; 
import cypressPlugin from 'eslint-plugin-cypress';

export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.jest,
        global: true,
        node: true
      }
    },
    files: ["**/*.js"],
    rules: {
    },
    ...js.configs.recommended,
  },
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      "jest/prefer-expect-assertions": "off",
    },
  },
  {
    files: ['**/*.cy.js'],
    languageOptions: {
      globals: {
        'cypress/globals': true,
      },
    },
    plugins: {
      cypress: cypressPlugin,
    },
    rules: {
      'cypress/no-unnecessary-waiting': 'off',
      'no-unused-vars': 'off',
      'no-undef': 'off',
    },
  },
  {
    files: ['cypress.config.js', '**/*.js'],
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
    },
  }
];
