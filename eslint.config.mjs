import globals from "globals";
import html from "eslint-plugin-html";

const ruleList = {
    "for-direction": "error",
    "no-bitwise": "error",
    "no-cond-assign": "error",
    "no-dupe-args": "error",
    "no-func-assign": "error",
    "no-invalid-regexp": "error",
    "no-misleading-character-class": "error",
    "no-octal": "error",
    "no-regex-spaces": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-sparse-arrays": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable": "error",
    "no-unused-expressions": "error",
    "space-infix-ops": "error",
    "use-isnan": "error",
    "valid-typeof": "error",

    "array-bracket-spacing": ["warn", "never"],
    "arrow-parens": ["warn", "as-needed"],
    "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
    "camelcase": ["warn", { "properties": "always" }],
    "capitalized-comments": "warn",
    "comma-dangle": ["warn", "never"],
    "curly": "warn",
    "indent": ["warn", 4],
    "keyword-spacing": "warn",
    "no-compare-neg-zero": "warn",
    "no-constant-condition": "warn",
    "no-debugger": "warn",
    "no-empty": "warn",
    "no-else-return": "warn",
    "no-extra-boolean-cast": "warn",
    "no-extra-parens": ["warn", "all"],
    "no-extra-semi": "warn",
    "no-lonely-if": "warn",
    "no-multi-spaces": "warn",
    "no-multiple-empty-lines": ["warn", { "max": 1 }],
    "no-restricted-syntax": ["warn", { "selector": "SwitchStatement", "message": "Switch statements are not allowed." }],
    "no-unexpected-multiline": "warn",
    "no-unneeded-ternary": "warn",
    "no-var": "warn",
    "operator-assignment": "warn",
    "prefer-const": "warn",
    "quotes": ["warn", "double", { "allowTemplateLiterals": true }],
    "semi": "warn",
    "space-in-parens": "warn",
    "spaced-comment": "warn"
}
/*
    We use these methods to identify "error" or "warn":
        "error": Some formats that will cause errors, or make codes very confused
        "warn": Other formats that isn't too dangerous, but not good for unified format
    Doesn't use some rules:
        "no-undef": some are defined in inori-functions.js
        "no-unused": some are used in <button onclick="..."></button>
    For examples, see /eslint-guide.js
*/

const languageOptionList = {
    sourceType: "script",
    globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
    }
};

export default [
    {
        files: ["**/*.js"],
        languageOptions: languageOptionList,
        rules: ruleList,
    },
    {
        languageOptions: {
            globals: globals.browser,
        },
    },
    {
        files: ["**/*.html"],
        plugins: { html },
        languageOptions: languageOptionList,
        rules: ruleList,
    },
];