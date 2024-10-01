# While creating a TOP (chiwainori-) file / code in XTSGAMES, the following rules should be followed:

## Creation
1. Basic format: SIGNATURE.VERSION.INFO. (including dots)
2. SIGNATURE: chiwainori-siteName
3. VERSION: 3 digits. Name version as you like
4. INFO: The saved contents

## Verification
5. Check SIGNATURE:
    if (INPUTTED-CODE.split(X, Y) != "chiwainori-siteName") { ... `错误的文件签名 (${signature})` ... }
6. Check VERSION:
    const nowVersion = ...
    if (INPUTTED-CODE.split(X, Y) != nowVersion) { ...  `错误的文件版本 (${version}, 当前 ${currentVersion}). 请在本网页的地址后面加上 /../archive_${version}.html 以尝试在其他版本中加载.` ... }
    
7. Do other optional checks:
7I. (OPTIONAL) Check Dots:
    if (INPUTTED-CODE[X] != "." && INPUTTED-CODE[Y] != "." && ...) { ... }
7II. (OPTIONAL) Check availability of INFO if necessary (To verify it's user-made or not)
    if (INPUTTED-CODE[X] <= numberRange) { ... }