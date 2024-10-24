import globals from "globals";
import pluginJest from "eslint-plugin-jest";
import js from "@eslint/js"; 

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
      "jest/prefer-expect-assertions": "off"
    }
  }
];
