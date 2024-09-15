// This file shows all XTSGAMES JavaScript format rules that is used ESLint.

let a = 1;

// Error: for-direction
for (let i = 0; i < 5; i--) {
    console.log(true);
}

// Error: no-bitwise
const bitwise = a | 2;

// Error: no-cond-assign
if (a = 1) {
    console.log(true);
}

// Error: no-dupe-args
function dupe(a, b, a) {
    console.log(a, b);
}

// Error: no-func-assign
function hey() {
    hey = 1;
}

// Error: no-invalid-regexp
let reg = new RegExp("[");

// Error: no-misleading-character-class
"👍 good".match(/^[👍]$/);
"👍 good".match(/^[👍]$/u); // Surrogate pair is OK if with u flag

// Error: no-octal
const octalNum = 061; // 49

// Error: no-regex-spaces
reg = new RegExp("a   b");

// Warn: no-self-assign
a = a;

// Warn: no-self-compare
if (a == a) {
    console.log(true);
}

// Error: no-sequences
a, a + 1;

// Error: no-sparse-arrays
const arrSparse = [1, , 2];

// Error: no-unmodified-loop-condition
while (a > 1) {
    console.log(true);
}

// Error: no-unreachable
function example() {
    return;
    console.log(true);
}

// Error: no-unused-expressions
a + 1; // Maybe the coder wants "a += 1"

// Error: space-infix-ops
const num = a+++2;
if (a>0) { console.log(true); }

// Error: use-isnan
if (a == NaN) { // NaN compares with everything is false
    console.log(false);
}

// Error: valid-typeof
if (typeof a == "Number") { // The type of a is "number", not "Number"
    console.log(true);
}

// Warn: array-bracket-spacing
const arr = [ 1 ];

// Warn: arrow-parens
const func = (e) => { return e; };

// Warn: brace-style
if (a > 0)
{
    console.log(true);
}

// Warn: camelcase
const a_variant = 1;

// Warn: capitalized-comments
// this is a line that doesn't start from cplitalized characters

// Warn: comma-dangle
const list = {
    count: 5,
};

// Warn: curly
if (a > 0) console.log(true);

// Warn: indent
if (a > 0) {
  console.log(true);
}

// Warn: keyword-spacing
if(a > 0) { console.log(true); }

// Warn: no-compare-neg-zero
if (a > -0) { console.log(true); }

// Warn: no-constant-condition
if (true) {
    console.log(true);
}

// Warn: no-debugger
debugger;

// Warn: no-empty
if (a > 0) {
}

// Warn: no-else-return
function newFunc() {
    if (a > 0) {
        return true;
    } else {
        console.log(false);
    }
}

// Warn: no-extra-boolean-cast
if (!!a) {
    console.log(true);
}

// Warn: no-extra-parens
a = (1 + 2);

// Warn: no-extra-semi
console.log(true);;

// Warn: no-lonely-if
if (a > 0) {
    console.log(true);
} else {
    if (a > 3) {
        console.log(false);
    }
}

// Warn: no-multi-spaces
a = 1  + 2;

// Warn: no-multiple-empty-lines
console.log(true);


console.log(true);

// Warn: no-restricted-syntax (SwitchStatement)
function switches() {
    switch (a) {
        case 1: return; // Switch are disallowed because they have some problems with indent
    }
}

// Warn: no-unexpected-multiline
a = 3
(1 || 2);

// Warn: no-unneeded-ternary
const judge = a == 1 ? true : false;

// Warn: no-var
var b = 5;

// Warn: operator-assignment
a = a + 1;

// Warn: prefer-const
let notChanged = 7;

// Warn: quotes
const str = 'single quotes';

// Warn: semi
a = 9

// Warn: space-in-parens
a = ( 1 + 2 ) / 3;

// Warn: spaced-comment
//No spaces after //

// Doesn't report an error or warn (but you shouldn't):

// Ignored: no-undef
imNotDefined = 3;

// Ignored: no-unused
const imNotUsed = 6;

// Detailed reasons are in /eslint.config.mjs