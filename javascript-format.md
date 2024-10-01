# While coding in JavaScript in ChiwaInori.top, the following rules should be followed:

## Basic Format
1. Do not use other languages' characters if they are not necessary (even in annotation)

## Blank lines
2. Add a new line after variant declaration group
3. Add a new line between each big code groups

## Sentences
4. Use "A ? B : C" if possible
5. Remove log commands if they are not necessary before pushing to Internet

## Variants
6. Naming variants with meaning (Do not use "a", "b" or "c")
7. When the variant is used as random decision, name it as "d" means "decider"
8. Declare variants as early as possible (and gather them together, see 3.)
9. If a variant is only used in one function, declare it inside the function
10. Declare variant with using less lines: "let name, sex, age;" "const [first, second, third] = array.split(".");

## Changing Variant's Type
11. Use !!variant to turn into BOOLEAN (!!"thisIsTrue") (into a negative BOOLEAN use !variant)
12. Use +variant to turn into NUMBER (+"2024")
13. Use template string to turn into STRING (`${[1, 2, 3]}`)

## etc.
These rules are those that isn't restricted in ESLint.

# Epilogue
The creation of these rules is to keep code format unified. Have fun coding in ChiwaInori.top!
by Chiwa Inori (xtsdcb69), ChiwaInori.top
Created at 2024.6.27 12:28, Last modified at 2024.9.18 11:47