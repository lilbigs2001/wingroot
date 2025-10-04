// eslint.config.js
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const prettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig([
  expoConfig,
  prettierRecommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["dist/*", "node_modules/*"],
    rules: {},
  },
]);
