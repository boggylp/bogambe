module.exports = {
    env: {
        browser: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "solid"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:solid/typescript",
        "plugin:prettier/recommended"
    ],
    ignorePatterns: ["dist/*", "node_modules/*", ".eslintrc.js"],
    rules: {
        // Runs Prettier as an ESLint rule and reports differences as individual ESLint issues {@link https://github.com/prettier/eslint-plugin-prettier}
        'prettier/prettier': ['error', { endOfLine: 'auto', singleQuote: true, trailingComma: 'all', semi: true, printWidth: 120 }]
    }
}
