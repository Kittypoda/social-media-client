import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser, 
    },
    rules: {
    
    },
  },
  {
    files: ["**/*.test.js"], 
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", 
      globals: {
        ...globals.browser, 
        ...globals.jest,
        global: true    
      },
    },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      "jest/prefer-expect-assertions": "off",
    },
  },
  pluginJs.configs.recommended,
];

