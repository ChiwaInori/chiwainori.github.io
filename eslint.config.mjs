import globals from "globals";
import html from "eslint-plugin-html";

const ruleList = {
    "accessor-pairs": "error",
    "constructor-super": "error",
    "default-param-last": "error",
    "for-direction": "error",
    "getter-return": "error",
    "implicit-arrow-linebreak": "error",
    "new-parens": "error",
    "no-bitwise": "error",
    "no-class-assign": "error",
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-constant-binary-expression": "error",
    "no-constructor-return": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-ex-assign": "error",
    "no-func-assign": "error",
    "no-invalid-regexp": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-new-native-nonconstructor": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-regex-spaces": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-setter-return": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-negation": "error",
    "no-unused-expressions": "error",
    "no-unused-private-class-members": "error",
    "no-useless-escape": "error",
    "no-void": "error",
    "nonblock-statement-body-position": "error",
    "prefer-template": "error",
    "space-infix-ops": "error",
    "use-isnan": "error",
    "valid-typeof": "error",
    
    "array-bracket-spacing": ["warn", "never"],
    "arrow-parens": ["warn", "as-needed"],
    "arrow-spacing": "warn",
    "block-spacing": "warn",
    "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
    "camelcase": ["warn", { "properties": "always" }],
    "capitalized-comments": "warn",
    "comma-dangle": ["warn", "never"],
    "comma-spacing": "warn",
    "comma-style": "warn",
    "computed-property-spacing": "warn",
    "curly": "warn",
    "dot-location": ["warn", "property"],
    "dot-notation": "warn",
    "function-call-argument-newline": ["warn", "never"],
    "func-call-spacing": "warn",
    "func-names": ["warn", "never"],
    "generator-star-spacing": ["warn", { "before": false, "after": true }],
    "indent": ["warn", 4],
    "key-spacing": "warn",
    "keyword-spacing": "warn",
    "linebreak-style": ["warn", "windows"],
    "no-compare-neg-zero": "warn",
    "no-constant-condition": "warn",
    "no-empty": "warn",
    "no-else-return": "warn",
    "no-extra-boolean-cast": "warn",
    "no-extra-parens": ["warn", "all"],
    "no-extra-semi": "warn",
    "no-implicit-coercion": "warn",
    "no-lonely-if": "warn",
    "no-multi-spaces": "warn",
    "no-multiple-empty-lines": ["warn", { "max": 1 }],
    "no-restricted-syntax": ["warn", { "selector": "SwitchStatement", "message": "Switch statements are not allowed. Use if-else instead." }],
    "no-trailing-spaces": ["warn", { "skipBlankLines": true }],
    "no-unexpected-multiline": "warn",
    "no-unneeded-ternary": "warn",
    "no-useless-catch": "warn",
    "no-useless-concat": "warn",
    "no-var": "warn",
    "object-curly-spacing": ["warn", "always"],
    "operator-assignment": "warn",
    "operator-linebreak": ["warn", "after"],
    "padded-blocks": ["warn", "never"],
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "quotes": ["warn", "double", { "allowTemplateLiterals": true }],
    "rest-spread-spacing": "warn",
    "semi": "warn",
    "semi-spacing": ["warn", { "before": false, "after": true }],
    "semi-style": "warn",
    "space-before-blocks": "warn",
    "space-before-function-paren": ["warn", { "named": "never", "anonymous": "always", "asyncArrow": "always" }],
    "space-in-parens": "warn",
    "space-unary-ops": "warn",
    "spaced-comment": "warn",
    "template-curly-spacing": "warn",
    "wrap-iife": "warn",
    "wrap-regex": "warn",
    "yoda": "warn"
};
/*
We use these methods to identify "error" or "warn":
"error":
            1. will cause errors;
            2. make codes don't match the expectations;
            3. very confused;
            4. might be an typing error
        "warn": It can be used, but not good for unified format or I don't want to see it
    Doesn't use some rules (but also shouldn't do):
        "no-undef": some are defined in inori-functions.js
        "no-unused-var": some are used in <button onclick="..."></button>
        "no-use-before-define": some are const defined functions
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