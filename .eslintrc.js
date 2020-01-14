module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    // Uses the recommended rules from @eslint-plugin-react
    "plugin:react/recommended",

    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended",

    // Uses eslint-config-prettier to disable ESLint rules from
    // @typescript-eslint/eslint-plugin that would conflict with prettier
    "prettier/@typescript-eslint",

    // Enables eslint-plugin-prettier and eslint-config-prettier. This will
    // display prettier errors as ESLint errors. Make sure this is always
    // the last configuration in the extends array.
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules
    // specified from the extended configs

    // Tell the linter that it's OK to use apostrophes in our code.
    "react/no-unescaped-entities": "off",

    // We're using TypeScript, so prop-tpes aren't so interesting
    "react/prop-types": "off",

    // In an ideal world, we'd never have to use @ts-ignore, but that's not
    // possible right now.
    "@typescript-eslint/ban-ts-ignore": "off",

    // Again, in theory this is a good rule, but it can cause a bit of
    // unhelpful noise.
    "@typescript-eslint/explicit-function-return-type": "off",

    // Another theoretically good rule, but sometimes we know better than
    // the linter.
    "@typescript-eslint/no-non-null-assertion": "off",
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of
      // React to use
      version: "detect"
    }
  }
};
