// XTS FUNCTIONS

/**
 * @param {string} command
 */
function xts(command = "") {
    if (command == "") {
        console.log("XTS Functions are available in current session.\nUse xts(\"command\") to get help.");
    } else {
        if (command == "xts") {
            console.log(
                `XTS Functions: xts(command)`
                + `\nCheck if XTS Functions are available.`
                + `\ncommand : (string) : Input a command in XTS Functions to get help`
                + `\n[EXAMPLE] xts("rand") :: Get help of rand().`
            );
        } else if (command == "sleep") {
            console.log(
                `XTS Functions: sleep(time)`
                + `\nSleep a moment then execute following commands.`
                + `\ntime : (number >= 1) : Sleep time in milliseconds`
                + `\n[EXAMPLE] sleep(1000) :: Wait 1s, the continue following commands.`
                + `\n%c[ASYNC] Only available in async functions. Use this function like:`
                + `\nasync function fName() { await sleep(time); }`, "color: #dd0000;"
            );
        } else if (command == "copyright") {
            console.log(
                `XTS Functions: copyright(startYear, signature)`
                + `\nCreate a copyright text.`
                + `\nstartYear : (number) : The year that copyright starts`
                + `\nsignature : (string, OPTIONAL ("xtsdcb69")) : Who own the copyright`
                + `\n[EXAMPLE] copyright(2021, "Hacker") :: It'll shown "Copyright © 2021-2024 Hacker. All Rights Reserved." in "copyright"`
            );
        } else if (command == "rand") {
            console.log(
                `XTS Functions: rand(min, max, keepFloat)`
                + `\n[RETURN NUMBER]: Return a random integer.`
                + `\nmin : (number <= max) : The minimum value of the random integer`
                + `\nmax : (number >= min) : The maximum value of the random integer`
                + `\nkeepFloat : (boolean, OPTIONAL (false)) : If true, it'll keep the decimal point.`
                + `\n[EXAMPLE] rand(1, 10) :: It might return 6`
            );
        } else if (command == "getNum") {
            console.log(
                `XTS Functions: getNum(text, order)`
                + `\n[RETURN NUMBER]: Return a selected number in a string.`
                + `\ntext : (string) : The text that gets number from it`
                + `\norder : (number >= 1) : Which part of number you want`
                + `\n[EXAMPLE] getNum("589brg13d7.4gh,-2.6eru", 3) :: Return 7.4 (It'll collect ["589", "13", "7.4", "-2.6")`
            );
        } else if (command == "transit") {
            console.log(
                `XTS Functions: transit(from, to, percentage)`
                + `\n[RETURN NUMBER]: Return a number within given range and percentage.`
                + `\nfrom : (number) : The number where calculates from`
                + `\nto : (number) : The number where calculates to`
                + `\npercentage : (0 <= number <= 1) : The percentage of number of transit`
                + `\n[EXAMPLE] transit(0, 10, 0.6) :: Return 6 (The number in [0, 10] and 60% of its range is 6)`
            );
        } else if (command == "logVar") {
            console.log(
                `XTS Functions: logVar(variant, name)`
                + `\nLog a variant in console.`
                + `\nvariant : (any) : The variant of log output`
                + `\nname : (string, OPTIONAL ("logVar")) : The name of variant`
                + `\n[EXAMPLE] logVar(score, "score") :: Output "score: 128"`
            );
        } else if (command == "target") {
            console.log(
                `XTS Functions: target(element)`
                + `\n[RETURN ELEMENT]: Return an element in HTML.`
                + `\nelement : (string) : The id of target element`
                + `\n[EXAMPLE] target("title").innerText :: Equals to document.getElementById("title").innerText`
            );
        } else if (command == "copyFrom") {
            console.log(
                `XTS Functions: copyFrom(element)`
                + `\n[RETURN STRING]: Return an element's innerHTML.`
                + `\nelement : (string) : The id of target element`
                + `\n[EXAMPLE] copyFrom("p1") :: Equals to document.getElementById("p1").innerHTML`
            );
        } else if (command == "copyTo") {
            console.log(
                `XTS Functions: copyTo(element, content)`
                + `\nCopy something to an element's innerHTML.`
                + `\nelement : (string) : The id of target element`
                + `\ncontent : (string) : The content to copy to the element`
                + `\n[EXAMPLE] copyTo("p1", "Hello") :: Equals to document.getElementById("p1").innerHTML = "Hello"`
            );
        } else if (command == "styleTo") {
            console.log(
                `XTS Functions: styleTo(element, style, method)`
                + `\nApply styles to an element.`
                + `\nelement : (string) : The id of target element`
                + `\nstyle : (string) : The style to apply to the element`
                + `\nmethod : (string, OPTIONAL ("id")) [Choose from "id" | "class" | "query"] : The method of getting elements. If "query" is used, type element like CSS (for example, "#tar *")`
                + `\n[EXAMPLE] styleTo("title", "margin-left: 64px;") :: Equals to document.getElementById("title").style = "margin-left: 64px;"`
            );
        } else if (command == "colorTo") {
            console.log(
                `XTS Functions: colorTo(element, content, method)`
                + `\nChange the color of an element.`
                + `\nelement : (string) : The id of target element`
                + `\ncolor : (string) : The color to apply to the element`
                + `\nmethod : (string, OPTIONAL ("id")) [Choose from "id" | "class" | "query"] : The method of getting elements. If "query" is used, type element like CSS (for example, "#tar *")`
                + `\n[EXAMPLE] colorTo("title", "#ff0000") :: Equals to document.getElementById("title").style.color = "#ff0000"`
            );
        } else if (command == "hide") {
            console.log(
                `XTS Functions: hide(element, method)`
                + `\nHide an element.`
                + `\nelement : (string) : The id of target element`
                + `\nmethod : (string, OPTIONAL ("id")) [Choose from "id" | "class" | "query"] : The method of getting elements. If "query" is used, type element like CSS (for example, "#tar *")`
                + `\n[EXAMPLE] hide("title") :: Equals to document.getElementById("title").style.display = "none"`
            );
        } else if (command == "unhide") {
            console.log(
                `XTS Functions: unhide(element, display, method)`
                + `\nShow an element with expected format.`
                + `\nelement : (string) : The id of target element`
                + `\ndisplay : (string, OPTIONAL ("block")) : The type of display`
                + `\nmethod : (string, OPTIONAL ("id")) [Choose from "id" | "class" | "query"] : The method of getting elements. If "query" is used, type element like CSS (for example, "#tar *")`
                + `\n[EXAMPLE] unhide("title", "inline-block") :: Equals to document.getElementById("title").style.display = "inline-block"`
            );
        } else if (command == "transColor") {
            console.log(
                `XTS Functions: transColor(element, toColor, time)`
                + `\nTurn an element's current color to another in transition.`
                + `\nelement : (string) : The id of target element`
                + `\ntoColor : (string) : The target color of transition`
                + `\ntime : (number >= 1) : The time length of transition`
                + `\n[EXAMPLE] transColor("title", "#00dd00") :: Turn the color of title to green in transition.`
            );
        } else if (command == "fadeOut") {
            console.log(
                `XTS Functions: fadeOut(element, time)`
                + `\nFade out an element.`
                + `\nelement : (string) : The id of target element`
                + `\ntime : (number >= 1, OPTIONAL (100)) : The time length of fade out`
                + `\n[EXAMPLE] fadeOut("title", 200) :: Fade out title in 0.2s.`
            );
        } else if (command == "fadeIn") {
            console.log(
                `XTS Functions: fadeIn(element, time)`
                + `\nFade in an element.`
                + `\nelement : (string) : The id of target element`
                + `\ntime : (number >= 1, OPTIONAL (100)) : The time length of fade in`
                + `\n[EXAMPLE] fadeIn("title", 200) :: Fade in title in 0.2s.`
            );
        } else if (command == "fadeChange") {
            console.log(
                `XTS Functions: fadeChange(outElement, inElement, time)`
                + `\nFade out an element and fade in another element.`
                + `\noutElement : (string) : The id of target element to fade out`
                + `\ninElement : (string) : The id of target element to fade in`
                + `\ntime : (number >= 1, OPTIONAL (200)) : The total time length of whole change session`
                + `\n[EXAMPLE] fadeChange("title", "secondTitle", 500) :: Fade out title in 0.25s and fade in secondTitle in 0.25s.`
            );
        } else if (command == "save") {
            console.log(
                `XTS Functions: save(fileName, content)`
                + `\nDownload a file with expected content.`
                + `\nfileName : (string) : The name of the file to be downloaded`
                + `\ncontent : (string) : The content of the file`
                + `\n[EXAMPLE] save("readme.txt", "Please read this file.") :: It'll download a file named readme.txt with "Please read this file."`
            );
        } else if (command == "load") {
            console.log(
                `XTS Functions: load(inputId, element)`
                + `\nKeeps copy the content from file in <input id="inputId" /> to an expected position.`
                + `\ninputId : (string) : The id of input where the file receives`
                + `\nelement : (string, OPTIONAL ("file-content")) : The place to copy the file content`
                + `\n[EXAMPLE] load("top-file", "fileInfo") :: When a file is selected in <input id="top-file" />, its content will be copied to "fileInfo".`
            );
        } else {
            console.log("Unknown command in XTS Functions.\nCheck typing then try again.");
        }
    }
}

// GLOBAL USAGE

/**
 * @param {number} time
 */
function sleep(time) {
    if (typeof time != "number") { throw new Error(`time must be a NUMBER`); }
    if (time < 1) { throw new Error("Cannot sleep less than 1 milliseconds"); }

    return new Promise(resolve => setTimeout(resolve, time));
}

/**
 * @param {number} startYear
 * @param {string} signature
 */
function copyright(startYear, signature = "xtsdcb69") {
    if (typeof startYear != "number") { throw new Error(`startYear must be a NUMBER`); }
    if (typeof signature != "string") { throw new Error(`signature must be a STRING`); }
    if (document.getElementById(element) == null) { throw new Error("Cannot set a copyright without #copyright element"); }

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
 * @param {boolean} keepFloat
 */
function rand(min, max, keepFloat = false) {
    if (typeof min != "number") { throw new Error(`min must be a NUMBER`); }
    if (typeof max != "number") { throw new Error(`max must be a NUMBER`); }
    if (typeof keepFloat != "boolean") { throw new Error(`keepFloat must be a BOOLEAN`); }
    if (min > max) { throw new Error(`Invalid minimum / maximum integer; minimum (${min}) should be less than maximum (${max})`); }

    var range = max - min + 1;
    if (keepFloat == false) {
        return Math.floor(Math.random() * range) + min;
    } else {
        return Math.random() * range + min;
    }
}

/**
 * @param {string} string
 * @param {number} order
 */
function getNum(string, order = 1) {
    if (typeof string != "string") { throw new Error(`string must be a STRING`); }
    if (typeof order != "number") { throw new Error(`order must be a NUMBER`); }
    if (order <= 0) { throw new Error("Order cannot less than 1"); }

    return parseFloat(string.match(/-?[0-9]+\.?[0-9]*/g)[order - 1]);
}

/**
 * @param {number} from
 * @param {number} to
 * @param {number} percentage
 */
function transit(from, to, percentage) {
    if (typeof from != "number") { throw new Error(`from must be a NUMBER`); }
    if (typeof to != "number") { throw new Error(`to must be a NUMBER`); }
    if (typeof percentage != "number") { throw new Error(`percentage must be a NUMBER`); }
    if (percentage > 1 || percentage < 0) { throw new Error("Percentage must between 0 and 1"); }

    var range = to - from;
    return percentage * range + from;
}

// CONSOLE LOG

/**
 * @param {any} variant
 * @param {string} name
 */
function logVar(variant, name = "logVar") {
    if (typeof name != "string") { throw new Error(`name must be a STRING`); }

    console.log(`${name}: ${variant}`);
}

// HTML ELEMENTS

/**
 * @param {string} element
 */
function target(element) {
    if (typeof element != "string") { throw new Error(`element must be a STRING`); }
    if (document.getElementById(element) == null) { throw new ReferenceError(`${element} is not defined`); }

    return document.getElementById(element);
}

/**
 * @param {string} element
 */
function copyFrom(element) {
    if (typeof element != "string") { throw new Error(`element must be a STRING`); }

    return target(element).innerHTML;
}

/**
 * @param {string} element
 * @param {string} content
 */
function copyTo(element, content) {
    if (typeof element != "string") { throw new Error(`element must be a STRING`); }
    if (typeof content != "string") { throw new Error(`content must be a STRING`); }

    target(element).innerHTML = content;
}

/**
 * @param {string} element
 * @param {string} style
 * @param {"id" | "class" | "query"} method
 */
function styleTo(element, style, method = "id") {
    if (typeof element != "string") { throw new Error(`element must be a STRING`); }
    if (typeof style != "string") { throw new Error(`style must be a STRING`); }
    if (method != "id" && method != "class" && method != "query") { throw new Error(`method must be "id" or "class" or "query"`); }

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
    if (typeof element != "string") { throw new Error(`element must be a STRING`); }
    if (typeof color != "string") { throw new Error(`color must be a STRING`); }
    if (method != "id" && method != "class" && method != "query") { throw new Error(`method must be "id" or "class" or "query"`); }

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
    if (typeof element != "string") { throw new Error(`element must be a STRING`); }
    if (method != "id" && method != "class" && method != "query") { throw new Error(`method must be "id" or "class" or "query"`); }

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
    if (typeof element != "string") { throw new Error(`element must be a STRING`); }
    if (typeof display != "string") { throw new Error(`display must be a STRING`); }
    if (method != "id" && method != "class" && method != "query") { throw new Error(`method must be "id" or "class" or "query"`); }

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
    if (typeof element != "string") { throw new Error(`element must be a STRING`); }
    if (typeof toColor != "string") { throw new Error(`toColor must be a STRING`); }
    if (typeof time != "number") { throw new Error(`time must be a NUMBER`); }
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
    if (typeof element != "string") { throw new Error(`element must be a STRING`); }
    if (typeof time != "number") { throw new Error(`time must be a NUMBER`); }
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
    if (typeof element != "string") { throw new Error(`element must be a STRING`); }
    if (typeof time != "number") { throw new Error(`time must be a NUMBER`); }
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
    if (typeof element != "string") { throw new Error(`element must be a STRING`); }
    if (typeof time != "number") { throw new Error(`time must be a NUMBER`); }
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
    if (typeof fileName != "string") { throw new Error(`fileName must be a STRING`); }
    if (typeof content != "string") { throw new Error(`content must be a STRING`); }

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
    if (typeof inputId != "string") { throw new Error(`inputId must be a STRING`); }
    if (typeof element != "string") { throw new Error(`element must be a STRING`); }

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