const { resolveAlias } = require("./.resolveAlias");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["google", "plugin:prettier/recommended", "plugin:react/recommended"],
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["import", "react", "react-hooks", "preferred-import"],
  rules: {
    "require-jsdoc": "off",

    // import
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
        groups: ["builtin", "external", "internal", "unknown", ["parent", "sibling", "index"]],
        pathGroups: [
          {
            pattern: "{assets,components,pages,services}/**",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],

    "preferred-import/js-imports": [
      "error",
      {
        resolveAlias,
      },
    ],
  },
};
