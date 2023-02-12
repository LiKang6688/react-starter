module.exports = {
  extends: ["airbnb", "airbnb-typescript", "airbnb/hooks", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "import/no-extraneous-dependencies": 0,
    "react/react-in-jsx-scope": 0,
  },
  overrides: [
    {
      // Now we enable eslint-plugin-testing-library rules or preset only for matching testing files!
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react", "plugin:jest-dom/recommended"],
    },
    {
      // Now we enable eslint-plugin-playwright only for matching e2e testing files!
      files: ["**/e2e/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:playwright/playwright-test"],
    },
  ],
};
