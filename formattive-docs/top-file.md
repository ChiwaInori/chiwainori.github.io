# While creating a TOP (xtsgames-) file / code in XTSGAMES, the following rules should be followed:

## Creation
1. Basic format: SIGNATURE.VERSION.INFO. (including dots)
2. SIGNATURE: xtsgames-siteName
3. VERSION: 3 digits. Name version as you like
4. INFO: The saved contents

## Verification
5. Check SIGNATURE:
    if (INPUTTED-CODE.split(X, Y) != "xtsgames-siteName") { ... "错误的代码签名" ... }
6. Check VERSION:
    const nowVersion = ...
    if (INPUTTED-CODE.split(X, Y) != nowVersion) { ... "错误的代码版本: ${version} (目前: ${nowVersion}). 请在本页面的 URL 后加入 /../archive_${version}.html 以读取该代码" ... }
7. Check Dots:
    if (INPUTTED-CODE[X] != "." && INPUTTED-CODE[Y] != "." && ...) { ... }
8. Check availability of INFO if necessary (To verify it's user-made or not)
    if (INPUTTED-CODE[X] <= numberRange) { ... }