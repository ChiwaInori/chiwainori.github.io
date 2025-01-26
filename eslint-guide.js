// This file shows all ChiwaInori.top JavaScript format rules that is used ESLint.
// Remember that ESLint errors / warns will be only shown if there's not fatal errors exist (like missing quotes or what).
// To fix ESLint errors / warns automatically, use "npx eslint (FILE-NAME) --fix". Fixable errors / warns will be fixed.

// Remember all codes listed below are those that you SHOULDN'T DO in ChiwaInori.top.

// Error: accessor-pairs
class A {
    set value(value) { }
}

// Error: constructor-super
class B extends A {
    constructor() { }
}

// Error: default-param-last
const func1 = (a = 1, b) => { console.log(a, b); }

// Error: for-direction
for (let i = 0; i < 5; i--) {
    console.log(true);
}

// Error: getter-return
Object.defineProperty(B.prototype, "value", {
    get: () => { this.value = value; }
});

// Error: implicit-arrow-linebreak
const linebreakArrow = value =>
    value;

// Error: new-parens
const string = new String; // Has the same function with "new String()"

// Error: no-bitwise
let a = 1 | 2;

// Error: no-class-assign
A = 0;

// Error: no-cond-assign
if (a = 1) {
    console.log(true);
}

// Error: no-const-assign
const constant = 1;
constant = 6;

// Error: no-constant-binary-expression
a = Number(a) ?? null;

// Error: no-constructor-return
class C {
    constructor(value) {
        return { value };
    }
}

// Warn: no-debugger
debugger;

// Error: no-delete-var
delete bitwise;

// Error: no-dupe-args
function dupe(a, b, a) {
    console.log(a, b);
}

// Error: no-dupe-class-members
class D {
    fun = () => { console.log(1); };
    fun = () => { console.log(2); };
}

// Error: no-dupe-else-if
if (a) {
    console.log(1);
} else if (a) {
    console.log(1);
}

// Error: no-dupe-keys
a = {
    value: 1,
    value: 2
};

// Error: no-empty-character-class
"abcdef".match(/abc[]/); // Returns null

// Error: no-empty-pattern
const { b: { } } = a; // No variants created

// Error: no-ex-assign
try {
    throw "Error";
} catch (e) {
    e = null;
}

// Error: no-func-assign
function hey() {
    hey = 1;
}

// Error: no-invalid-regexp
let reg = new RegExp("[");

// Error: no-loss-of-precision
a = 0x20000000000001;

// Error: no-misleading-character-class
"👍 good".match(/[👍]/);
"👍 good".match(/[👍]/u); // Surrogate pair is OK if with u flag

// Error: no-mixed-spaces-and-tabs
if (a) {
    if (a) {
	    console.log(a);
    }
}

// Error: no-new-symbol
a = new BigInt("1");

// Error: no-obj-calls
Math();

// Error: no-octal
const octalNum = 061; // 49

// Error: no-regex-spaces
reg = new RegExp("a  b");

// Error: no-self-assign
a = a;

// Error: no-self-compare
if (a == a) {
    console.log(true);
}

// Error: no-sequences
// eslint-disable-next-line no-unused-expressions
a, a + 1;

// Error: no-setter-return
Object.defineProperty(A.prototype, "value", {
    set: () => { return 1; }
});

// Error: no-shadow
for (let i = 0; i < 5; i++) {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// Error: no-shadow-restricted-names
function NaN() {
    console.log(NaN);
}

// Error: no-sparse-arrays
const arrSparse = [1, , 2];

// Error: no-template-curly-in-string
const doubleStr = "Hello, ${name}!";

// Error: no-this-before-super
class E extends A {
    constructor(value) {
        this.value = value;
        super();
    }
}

// Error: no-unreachable-loop
for (let i = 0; i < 2; i++) {
    break;
}

// Error: no-unmodified-loop-condition
while (a > 1) {
    console.log(true);
}

// Error: no-unreachable
function example() {
    return;
    console.log(true);
}

// Error: no-unsafe-negation
a = !key in a; // Should be "!(key in a)"

// Error: no-unused-expressions
a + 1; // Maybe the coder wants "a += 1"

// Error: no-unused-private-class-members
class F {
    #private = 1;
}

// Error: no-useless-escape
"abc".match(/\a/g);

// Error: no-void
console.log(void 0);

// Error: nonblock-statement-body-position
if (a)
    a = 1;

// Error: prefer-template
const notTemplate = "Hello, " + a + "!";

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
const func2 = (e) => { return e; };

// Warn: arrow-spacing
const func3 = e=>{ return e; };

// Warn: block-spacing
if (a > 0) {console.log(a);}

// Warn: brace-style
if (a > 0)
{
    console.log(true);
}

// Warn: camelcase
const a_variant = 1;

// Warn: capitalized-comments
// this is a line that doesn't start from capitalized characters

// Warn: comma-dangle
const list1 = {
    count: 5,
};

// Warn: comma-spacing
console.log(a,bitwise);

// Warn: comma-style
const list2 = {
    json: true
    , yaml: false
};

// Warn: curly
if (a > 0) console.log(true);

// Warn: computed-property-spacing
console.log(a[ 1 ]);

// Warn: dot-location
a = a.
    valueOf;

// Warn: dot-notation
a = a["value"];

// Warn: function-call-argument-newline
a = Array(
    1,
    2
);

// Warn: func-call-spacing
console.log (a);

// Warn: func-names
const func4 = function func4() { };

// Warn: generator-star-spacing
function *generator() { }

// Warn: indent
if (a > 0) {
  console.log(true);
}

// Warn: key-spacing
a = { value:1 };

// Warn: keyword-spacing
if(a > 0) { console.log(true); }

// Warn: linebreak-style
// You should use CRLF instead of LF

// Warn: no-compare-neg-zero
if (a > -0) { console.log(true); }

// Warn: no-constant-condition
if (true) {
    console.log(true);
}

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
if (Boolean(a)) {
    console.log(true);
}

// Warn: no-extra-parens
a = (1 + 2);

// Warn: no-extra-semi
console.log(true);;

// Warn: no-implicit-coercion
console.log(!!a);
console.log(+a);
console.log(a += "");

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

// Warn: no-trailing-spaces
a = 1; 

// Warn: no-unexpected-multiline
a = function () { }
`hello`;

// Warn: no-unneeded-ternary
const judge = a == 1 ? true : false;

// Warn: no-useless-catch
try {
    a++;
} catch (e) {
    throw e;
}

// Warn: no-useless-concat
const uselessConcat = "Hello, " + "World!";

// Warn: no-var
var c = 5;

// Warn: object-curly-spacing
const obj = {name: "John"};

// Warn: operator-assignment
a = a + 1;

// Warn: operator-linebreak
a = a
    + 1
    + 2;

// Warn: padded-blocks
if (a) {

    console.log(a);

}

// Warn: prefer-arrow-callback
window.addEventListener("keydown", function (event) { return event; });

// Warn: prefer-const
let notChanged = 7;

// Warn: quotes
const str = 'single quotes';

// Warn: rest-spread-spacing
function restSpread(... args) {
    console.log(args);
}

// Warn: semi
a = 9

// Warn: semi-spacing
a = 10 ; 

// Warn: semi-style
a = 11
;

// Warn: space-before-blocks
if (a){ console.log(1); }

// Warn: space-before-function-paren
function named () { };
const arrow = async() => { };
const anonymous = function() { };

// Warn: space-in-parens
a = ( 1 + 2 ) / 3;

// Warn: space-unary-ops
a ++;

// Warn: spaced-comment
//No spaces after //

// Warn: template-curly-spacing
const numLine = `The number is ${ a }`;

// Warn: wrap-regex
a = /regex/.test("regex");

// Warn: yoda
if (1 < a) {
    console.log(a);
}

// Some rules are ignored (but also shouldn't do):

// Ignored: no-undef
imNotDefined = 6;

// Ignored: no-unused
const imUnused = 1;

// Ignored: no-use-before-define
console.log(b);
const b = 2;

// Detail reasons are in eslint.config.mjs