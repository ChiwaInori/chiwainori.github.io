import globals from "globals";
import html from "eslint-plugin-html";

const ruleList = {
    "for-direction": "error",
    "implicit-arrow-linebreak": "error",
    "no-bitwise": "error",
    "no-cond-assign": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-func-assign": "error",
    "no-invalid-regexp": "error",
    "no-misleading-character-class": "error",
    "no-octal": "error",
    "no-regex-spaces": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable": "error",
    "no-unused-expressions": "error",
    "no-useless-escape": "error",
    "no-void": "error",
    "prefer-template": "error",
    "space-infix-ops": "error",
    "use-isnan": "error",
    "valid-typeof": "error",
    "yoda": "error",

    "array-bracket-spacing": ["warn", "never"],
    "arrow-parens": ["warn", "as-needed"],
    "arrow-spacing": "warn",
    "block-spacing": "warn",
    "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
    "camelcase": ["warn", { "properties": "always" }],
    "capitalized-comments": "warn",
    "comma-dangle": ["warn", "never"],
    "computed-property-spacing": "warn",
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
    "no-restricted-syntax": ["warn", { "selector": "SwitchStatement", "message": "Switch statements are not allowed. Use if-else instead." }],
    "no-unexpected-multiline": "warn",
    "no-unneeded-ternary": "warn",
    "no-useless-catch": "warn",
    "no-useless-concat": "warn",
    "no-var": "warn",
    "object-curly-spacing": ["warn", "always"],
    "operator-assignment": "warn",
    "padded-blocks": ["warn", "never"],
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "quotes": ["warn", "double", { "allowTemplateLiterals": true }],
    "rest-spread-spacing": "warn",
    "semi": "warn",
    "semi-spacing": ["warn", { "before": false, "after": true }],
    "semi-style": "warn",
    "space-before-function-paren": ["warn", { "named": "never", "anonymous": "always", "asyncArrow": "always" }],
    "space-in-parens": "warn",
    "space-unary-ops": "warn",
    "spaced-comment": "warn",
    "template-curly-spacing": "warn"
};
/*
    We use these methods to identify "error" or "warn":
        "error": Some formats that will cause errors, make codes very confused, or might be an typing error
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