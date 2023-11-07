module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y", "@typescript-eslint"],
  rules: {
    semi: 0,
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        singleQuote: false,
        arrowParens: "always",
      },
    ],
    "no-unused-vars": "off",
    "import/no-unresolved": "off",
    "import/no-absolute-path": "off",

    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/self-closing-comp": "error",
    "react/no-unknown-property": "error",
    "react/jsx-no-target-blank": "warn",

    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",

    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
  },
  ignorePatterns: ["node_modules"],
};
