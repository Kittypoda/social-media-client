import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser, // Adding browser-specific globals like "window", "document", etc.
    },
    rules: {
      // Add any additional rules for regular JavaScript files here
    },
  },
  {
    files: ["**/*.test.js"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,  // Keeping browser globals
        ...globals.jest,     // Adding Jest globals like "describe", "it", "expect", etc.
      },
    },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      "jest/prefer-expect-assertions": "off", // Example rule for Jest tests
    },
  },
  pluginJs.configs.recommended,  // Include the recommended config from @eslint/js plugin
];
