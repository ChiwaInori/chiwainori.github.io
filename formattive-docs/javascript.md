# While coding in JavaScript in XTSGAMES, the following rules should be followed:

## Basic Format
1. 4 spaces for each indentation
2. Use 1 space everywhere (Do not appear "if(a>1){}")
3. Use semicolons ";" after each statement ("if" excluded)
4. Do not use other languages' characters if they are not necessary (even in annotation)

## Blank lines
5. Add a new line after variant declaration group
6. Add a new line between each big code groups

## Sentences
7. When using quotation marks, use "" as first priority
8. If variant is used in string, use `ABC${variant}DEF` to include it instead of using "ABC" + variant + "DEF"
9. Do not use single quotation marks '' unless you are required to use quotes inside ""
10. When you need to use quotation marks inside quotation, follow this order: 1.`;  2.";  3.';  4.\";  5.\';  6.\\\";  ...
11. Use "A ? B : C" if possible
12. use "if (!judge)" without "== false" if judging boolean
13. If too many similar "if"s (or "case"s) gather together, collapse them into 1 line ("if (statement) { sentences }")
14. Remove log commands if they are not necessary before pushing to Internet

## Variants
15. Do not use "var"
16. Use "const" if a variant is never changed (and it shouldn't be changed even in future update)
17. When coding, use "const" first, then if found the value should be changed, turn into "let"
18. Name variants using lowerCamelCase instead of UpperCamelCase, snake_case or kebab-case
19. Naming variants with meaning (Do not use "a" "b" "c")
20. Declare variants as early as possible (and gather them together, see 5.)

## etc.
No ESLint is used because some ....ing problems

# Epilogue
The creation of these rules is to keep code format unified. Have fun coding in XTSGAMES!
by xtsdcb69, XTSGAMES
Created at 2024.6.27 12:28, Last modified at 2024.7.12 14:31