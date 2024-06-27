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
7. Do not use single quotation marks (' ')
8. Use `ABC${variant}DEF` instead of "ABC" + variant + "DEF"
9. Use "A ? B : C" if possible
10. Use switch + case if judging some specified "if"s
11. use "if (!judge)" without "== false" if judging boolean
12. If too many similar "if"s (or "case"s) gather together, collapse them into 1 line ("if (statement) { sentences }")
13. Remove log commands if they are not necessary before pushing to Internet

## Variants
14. Do not use "var"
15. Use "const" if a variant is never changed (and it shouldn't be changed even in future update)
16. Name variants using lowerCamelCase instead of UpperCamelCase, snake_case or kebab-case
17. Naming variants with meaning (Do not use "a" "b" "c")
18. Declare variants as early as possible (and gather them together, see 4.)

## etc.
No ESLint is used because some ....ing problems

# Epilogue
The creation of these rules is to keep code format unified. Have fun coding in XTSGAMES!
by xtsdcb69, XTSGAMES
Created at 2024.6.27 12:28, Last modified at 2024.6.27 12:53