# While coding in JavaScript in XTSGAMES, the following rules should be followed:

## Basic Format
1. Do not use other languages' characters if they are not necessary (even in annotation)

## Blank lines
2. Add a new line after variant declaration group
3. Add a new line between each big code groups

## Sentences
4. If variant is used in string, use `ABC${variant}DEF` to include it instead of using "ABC" + variant + "DEF"
5. Use "A ? B : C" if possible
6. If too many similar "if"s gather together, collapse them into 1 line ("if (statement) { sentences }")
7. Remove log commands if they are not necessary before pushing to Internet

## Variants
8. Naming variants with meaning (Do not use "a", "b" or "c")
9. When the variant is used as random decision, name it as "d" means "decider"
10. Declare variants as early as possible (and gather them together, see 5.)
11. If a variant is only used in one function, declare it inside the function
12. When using many for loops, name the loop index as "i", "j", "k" ...
13. Declare variant with using less lines: "let name, sex, age;" "const [first, second, third] = array.split(".");

## Changing Variant's Type
14. Use !!variant to turn into BOOLEAN (!!"thisIsTrue") (into a negative BOOLEAN use !variant)
15. Use +variant to turn into NUMBER (+"2024") (parsing into a integer use ~~variant)
16. Use ""+variant to turn into STRING (""+[1, 2, 3])

## etc.
These rules are those that isn't prohibited in ESLint.

# Epilogue
The creation of these rules is to keep code format unified. Have fun coding in XTSGAMES!
by xtsdcb69, XTSGAMES
Created at 2024.6.27 12:28, Last modified at 2024.8.16 13:22