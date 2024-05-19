// XTS FUNCTIONS

/**
 * @param {string} command
 */
function xts(command) {
    if (command == undefined) {
        console.log("XTS Functions are available in current session.\nUse xts(\"command\") to get help.");
    } else {
        var success = 0;
        if (command == "xts") {
            var success = 1;
            console.log(
                `XTS Functions: xts(command)`
                + `\nCheck if XTS Functions are available.`
                + `\ncommand : (string) : Input a command in XTS Functions to get help`
                + `\n[EXAMPLE] xts("rand") :: Get help of rand().`
            );
        }
        if (command == "sleep") {
            var success = 1;
            console.log(
                `XTS Functions: sleep(time)`
                + `\nSleep a moment then execute following commands.`
                + `\ntime : (number >= 1) : Sleep time in milliseconds`
                + `\n[EXAMPLE] sleep(1000) :: Wait 1s, the continue following commands.`
                + `\n%c[ASYNC] Only available in async functions. Use this function like:`
                + `\nasync function fName() { await sleep(time); }`, "color: #dd0000;"
            );
        }
        if (command == "copyright") {
            var success = 1;
            console.log(
                `XTS Functions: copyright(startYear, signature)`
                + `\nCreate a copyright text.`
                + `\nstartYear : (number) : The year that copyright starts`
                + `\nsignature : (string, OPTIONAL ("xtsdcb69")) : Who own the copyright`
                + `\n[EXAMPLE] copyright(2021, "Hacker") :: It'll shown "Copyright © 2021-2024 Hacker. All Rights Reserved." in "copyright"`
            );
        }
        if (command == "rand") {
            var success = 1;
            console.log(
                `XTS Functions: rand(min, max)`
                + `\nRETURN a random integer.`
                + `\nmin : (number <= max) : The minimum value of the random integer`
                + `\nmax : (number >= min) : The maximum value of the random integer`
                + `\n[EXAMPLE] rand(1, 10) :: It might return 6`
            );
        }
        if (command == "getNum") {
            var success = 1;
            console.log(
                `XTS Functions: getNum(text, order)`
                + `\nRETURN a selected integer in a string.`
                + `\ntext : (string) : The text that gets number from it`
                + `\norder : (number >= 1) : Which part of number you want`
                + `\n[EXAMPLE] getNum("487brg13d74gh,-2",3) :: Return 74`
            );
        }
        if (command == "logVar") {
            var success = 1;
            console.log(
                `XTS Functions: logVar(variant, name)`
                + `\nLog a variant in console.`
                + `\nvariant : (any) : The variant of log output`
                + `\nname : (string, OPTIONAL ("logVar")) : The name of variant`
                + `\n[EXAMPLE] logVar(score, "score") :: Output "score: 128"`
            );
        }
        if (command == "target") {
            var success = 1;
            console.log(
                `XTS Functions: target(element)`
                + `\nRETURN an element in HTML.`
                + `\nelement : (string) : The id of target element`
                + `\n[EXAMPLE] target("title").innerText :: Equals to document.getElementById("title").innerText`
            );
        }
        if (command == "copyFrom") {
            var success = 1;
            console.log(
                `XTS Functions: copyFrom(element)`
                + `\nRETURN an element's innerHTML.`
                + `\nelement : (string) : The id of target element`
                + `\n[EXAMPLE] copyFrom("p1") :: Equals to document.getElementById("p1").innerHTML`
            );
        }
        if (command == "copyTo") {
            var success = 1;
            console.log(
                `XTS Functions: copyTo(element, content)`
                + `\nCopy something to an element's innerHTML.`
                + `\nelement : (string) : The id of target element`
                + `\ncontent : (string) : The content to copy to the element`
                + `\n[EXAMPLE] copyTo("p1", "Hello") :: Equals to document.getElementById("p1").innerHTML = "Hello"`
            );
        }
        if (command == "styleTo") {
            var success = 1;
            console.log(
                `XTS Functions: styleTo(element, style, method)`
                + `\nApply styles to an element.`
                + `\nelement : (string) : The id of target element`
                + `\nstyle : (string) : The style to apply to the element`
                + `\nmethod : (string, OPTIONAL ("id")) [Choose from id | class | query] : The method of getting elements. If "query" is used, type element like CSS (for example, "#tar *")`
                + `\n[EXAMPLE] styleTo("title", "margin-left: 64px;") :: Equals to document.getElementById("title").style = "margin-left: 64px;"`
            );
        }
        if (command == "colorTo") {
            var success = 1;
            console.log(
                `XTS Functions: colorTo(element, content, method)`
                + `\nChange the color of an element.`
                + `\nelement : (string) : The id of target element`
                + `\ncolor : (string) : The color to apply to the element`
                + `\nmethod : (string, OPTIONAL ("id")) [Choose from id | class | query] : The method of getting elements. If "query" is used, type element like CSS (for example, "#tar *")`
                + `\n[EXAMPLE] colorTo("title", "#ff0000") :: Equals to document.getElementById("title").style.color = "#ff0000"`
            );
        }
        if (command == "hide") {
            var success = 1;
            console.log(
                `XTS Functions: hide(element, method)`
                + `\nHide an element.`
                + `\nelement : (string) : The id of target element`
                + `\nmethod : (string, OPTIONAL ("id")) [Choose from id | class | query] : The method of getting elements. If "query" is used, type element like CSS (for example, "#tar *")`
                + `\n[EXAMPLE] hide("title") :: Equals to document.getElementById("title").style.display = "none"`
            );
        }
        if (command == "unhide") {
            var success = 1;
            console.log(
                `XTS Functions: unhide(element, display, method)`
                + `\nShow an element with expected format.`
                + `\nelement : (string) : The id of target element`
                + `\ndisplay : (string, OPTIONAL ("block")) : The type of display`
                + `\nmethod : (string, OPTIONAL ("id")) [Choose from id | class | query] : The method of getting elements. If "query" is used, type element like CSS (for example, "#tar *")`
                + `\n[EXAMPLE] unhide("title", "inline-block") :: Equals to document.getElementById("title").style.display = "inline-block"`
            );
        }
        if (command == "transColor") {
            var success = 1;
            console.log(
                `XTS Functions: transColor(element, toColor, time)`
                + `\nTurn an element's current color to another in transition.`
                + `\nelement : (string) : The id of target element`
                + `\ntoColor : (string) : The target color of transition`
                + `\ntime : (number >= 1) : The time length of transition`
                + `\n[EXAMPLE] transColor("title", "#00dd00") :: Turn the color of title to green in transition.`
            );
        }
        if (command == "fadeOut") {
            var success = 1;
            console.log(
                `XTS Functions: fadeOut(element, time)`
                + `\nFade out an element.`
                + `\nelement : (string) : The id of target element`
                + `\ntime : (number >= 1, OPTIONAL (100)) : The time length of fade out`
                + `\n[EXAMPLE] fadeOut("title", 200) :: Fade out title in 0.2s.`
            );
        }
        if (command == "fadeIn") {
            var success = 1;
            console.log(
                `XTS Functions: fadeIn(element, time)`
                + `\nFade in an element.`
                + `\nelement : (string) : The id of target element`
                + `\ntime : (number >= 1, OPTIONAL (100)) : The time length of fade in`
                + `\n[EXAMPLE] fadeIn("title", 200) :: Fade in title in 0.2s.`
            );
        }
        if (command == "fadeChange") {
            var success = 1;
            console.log(
                `XTS Functions: fadeChange(outElement, inElement, time)`
                + `\nFade out an element and fade in another element.`
                + `\noutElement : (string) : The id of target element to fade out`
                + `\ninElement : (string) : The id of target element to fade in`
                + `\ntime : (number >= 1, OPTIONAL (200)) : The total time length of whole change session`
                + `\n[EXAMPLE] fadeChange("title", "secondTitle", 500) :: Fade out title in 0.25s and fade in secondTitle in 0.25s.`
            );
        }
        if (command == "save") {
            var success = 1;
            console.log(
                `XTS Functions: save(fileName, content)`
                + `\nDownload a file with expected content.`
                + `\nfileName : (string) : The name of the file to be downloaded`
                + `\ncontent : (string) : The content of the file`
                + `\n[EXAMPLE] save("readme.txt", "Please read this file.") :: It'll download a file named readme.txt with "Please read this file."`
            );
        }
        if (command == "load") {
            var success = 1;
            console.log(
                `XTS Functions: load(inputId, element)`
                + `\nKeeps copy the content from file in <input id="inputId" /> to an expected position.`
                + `\ninputId : (string) : The id of input where the file receives`
                + `\nelement : (string, OPTIONAL ("file-content")) : The place to copy the file content`
                + `\n[EXAMPLE] load("top-file", "fileInfo") :: When a file is selected in <input id="top-file" />, its content will be copied to "fileInfo".`
            );
        }

        if (success == 0) {
            console.log("Unknown command in XTS Functions.\nCheck typing then try again.");
        }
    }
}

// GLOBAL USAGE

/**
 * @param {number} time
 */
function sleep(time) {
    if (time < 1) { throw new Error("Cannot sleep less than 1 milliseconds"); }
    return new Promise(resolve => setTimeout(resolve, time));
}

/**
 * @param {number} startYear
 * @param {string} signature
 */
function copyright(startYear, signature = "xtsdcb69") {
    var date = new Date();
    var thisYear = date.getFullYear();
    if (thisYear < parseInt(startYear)) { throw new Error("Cannot set a copyright starting from future"); }
    if (thisYear == parseInt(startYear)) {
        copyTo("copyright", `Copyright &copy; ${startYear} ${signature}. All Rights Reserved.`);
    } else {
        copyTo("copyright", `Copyright &copy; ${startYear}-${thisYear} ${signature}. All Rights Reserved.`);
    }
}

// NUMERAL COMMANDS

/**
 * @param {number} min
 * @param {number} max
 */
function rand(min, max) {
    if (min > max) { throw new Error(`Invalid minimum / maximum integer; minimum (${min}) should be less than maximum (${max})`); }
    var range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

/**
 * @param {string} string
 * @param {number} order
 */
function getNum(string, order = 1) {
    if (order <= 0) { throw new Error("Order cannot less than 1"); }
    return parseInt(string.match(/\d+(\.\d+)?/g)[order - 1]);
}

// CONSOLE LOG

/**
 * @param {any} variant
 * @param {string} name
 */
function logVar(variant, name = "logVar") {
    console.log(`${name}: ${variant}`);
}

// HTML ELEMENTS

/**
 * @param {string} element
 */
function target(element) {
    if (document.getElementById(element) == undefined) { throw new ReferenceError(`${element} is not defined`); }
    return document.getElementById(element);
}

/**
 * @param {string} element
 */
function copyFrom(element) {
    return target(element).innerHTML;
}

/**
 * @param {string} element
 * @param {string} content
 */
function copyTo(element, content) {
    target(element).innerHTML = content;
}

/**
 * @param {string} element
 * @param {string} style
 * @param {"id" | "class" | "query"} method
 */
function styleTo(element, style, method = "id") {
    if (method != "id" && method != "class" && method != "query") { throw new Error(`Invalid method "${method}"`); }
    if (method == "id") {
        target(element).style = style;
    }
    if (method == "class") {
        for (i = 0; i < document.getElementsByClassName(element).length; i++) {
            document.getElementsByClassName(element)[i].style = style;
        }
    }
    if (method == "query") {
        for (i = 0; i < document.querySelectorAll(element).length; i++) {
            document.querySelectorAll(element)[i].style = style;
        }
    }
}

/**
 * @param {string} element
 * @param {string} color
 * @param {"id" | "class" | "query"} method
 */
function colorTo(element, color, method = "id") {
    if (method != "id" && method != "class" && method != "query") { throw new Error(`Invalid method "${method}"`); }
    if (method == "id") {
        target(element).style.color = color;
    }
    if (method == "class") {
        for (i = 0; i < document.getElementsByClassName(element).length; i++) {
            document.getElementsByClassName(element)[i].style.color = color;
        }
    }
    if (method == "query") {
        for (i = 0; i < document.querySelectorAll(element).length; i++) {
            document.querySelectorAll(element)[i].style.color = color;
        }
    }
}

/**
 * @param {string} element
 * @param {"id" | "class" | "query"} method
 */
function hide(element, method = "id") {
    if (method != "id" && method != "class" && method != "query") { throw new Error(`Invalid method "${method}"`); }
    if (method == "id") {
        target(element).style.display = "none";
    }
    if (method == "class") {
        for (i = 0; i < document.getElementsByClassName(element).length; i++) {
            document.getElementsByClassName(element)[i].style.display = "none";
        }
    }
    if (method == "query") {
        for (i = 0; i < document.querySelectorAll(element).length; i++) {
            document.querySelectorAll(element)[i].style.display = "none";
        }
    }
}

/**
 * @param {string} element
 * @param {string} display
 * @param {"id" | "class" | "query"} method
 */
function unhide(element, display = "block", method = "id") {
    if (method != "id" && method != "class" && method != "query") { throw new Error(`Invalid method "${method}"`); }
    if (method == "id") {
        target(element).style.display = display;
    }
    if (method == "class") {
        for (i = 0; i < document.getElementsByClassName(element).length; i++) {
            document.getElementsByClassName(element)[i].style.display = display;
        }
    }
    if (method == "query") {
        for (i = 0; i < document.querySelectorAll(element).length; i++) {
            document.querySelectorAll(element)[i].style.display = display;
        }
    }
}

/**
 * @param {string} element
 * @param {string} toColor
 * @param {number} time
 */
async function transColor(element, toColor, time = 100) {
    if (time < 1) { throw new Error("Cannot change color in less than 1 milliseconds"); }
    var presetR = 102;
    var presetG = 102;
    var presetB = 102;

    if (target(element).style.color != "") {
        var fromColorR = getNum(target(element).style.color, 1);
        var fromColorG = getNum(target(element).style.color, 2);
        var fromColorB = getNum(target(element).style.color, 3);
    } else {
        var fromColorR = presetR;
        var fromColorG = presetG;
        var fromColorB = presetB;
    }

    if (toColor.indexOf("#") >= 0) {
        var toColorR = parseInt(toColor.split("")[1] + toColor.split("")[2], 16);
        var toColorG = parseInt(toColor.split("")[3] + toColor.split("")[4], 16);
        var toColorB = parseInt(toColor.split("")[5] + toColor.split("")[6], 16);
    }
    if (toColor.indexOf("rgb(") >= 0) {
        var toColorR = getNum(toColor, 1);
        var toColorG = getNum(toColor, 2);
        var toColorB = getNum(toColor, 3);
    }

    var diffR = (toColorR - fromColorR) / 20;
    var diffG = (toColorG - fromColorG) / 20;
    var diffB = (toColorB - fromColorB) / 20;

    for (i = 1; i <= 21; i++) {
        if (target(element).style.color != "") {
            var nowColorR = getNum(target(element).style.color, 1);
            var nowColorG = getNum(target(element).style.color, 2);
            var nowColorB = getNum(target(element).style.color, 3);
        } else {
            var nowColorR = presetR;
            var nowColorG = presetG;
            var nowColorB = presetB;
        }
        if (i <= 20) {
            var nowToColorR = nowColorR + diffR;
            var nowToColorG = nowColorG + diffG;
            var nowToColorB = nowColorB + diffB;
            colorTo(element, `rgb(${nowToColorR}, ${nowToColorG}, ${nowToColorB})`);
            await sleep(time / 20);
        } else {
            colorTo(element, toColor);
        }
    }
}

/**
 * @param {string} element
 * @param {number} time
 */
async function fadeOut(element, time = 100) {
    if (time < 1) { throw new Error("Cannot fade out in less than 1 milliseconds"); }
    if (target(element).style.opacity != "") {
        var nowOpacity = parseFloat(target(element).style.opacity);
    } else {
        var nowOpacity = 1;
    }
    while (nowOpacity > 0) {
        var nowOpacity = nowOpacity - 0.05;
        target(element).style.opacity = nowOpacity;
        await sleep(time / 20);
    }
    if (nowOpacity <= 0) {
        hide(element);
        target(element).style.opacity = 0;
    }
}

/**
 * @param {string} element
 * @param {number} time
 */
async function fadeIn(element, time = 100) {
    if (time < 1) { throw new Error("Cannot fade in in less than 1 milliseconds"); }
    unhide(element);
    if (target(element).style.opacity != "") {
        var nowOpacity = parseFloat(target(element).style.opacity);
    } else {
        var nowOpacity = 0;
    }
    while (nowOpacity < 1) {
        var nowOpacity = nowOpacity + 0.05;
        target(element).style.opacity = nowOpacity;
        await sleep(time / 20);
    }
}

/**
 * @param {string} outElement
 * @param {string} inElement
 * @param {number} time
 */
async function fadeChange(outElement, inElement, time = 200) {
    if (time < 1) { throw new Error("Cannot fade change in than 1 milliseconds"); }
    fadeOut(outElement, time / 2);
    await sleep(time / 2 + 20);
    fadeIn(inElement, time / 2);
}

// SAVE & LOAD

/**
 * @param {string} fileName
 * @param {string} content
 */
function save(fileName, content) {
    var blob = new Blob([content], { type: "text/plain" });
    var a = document.createElement("a");
    a.style.display = "none";
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

/**
 * @param {string} inputId
 * @param {string} element
 */
function load(inputId, element = "file-content") {
    document.getElementById(inputId).addEventListener('change', function (event) {
        const fileInput = event.target;
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                var fileContent = event.target.result;
                target(element).textContent = fileContent;
            };
            reader.readAsText(file);
        }
    });
}