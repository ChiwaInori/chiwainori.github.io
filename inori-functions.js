// INORI FUNCTIONS

/*
    Inori Function is a custom JavaScript library used in XTSGAMES.TOP for better coding.
    Most of the functions included are original created by XTSGAMES owner Chiwa Inori.
    Inori Function is updating every time. You can use inori() to check current version.

    Index:
    Global Usage (8): sleep, seizure, copyright, paramURL, chance, Array.isolate, Array.remove, String.getCountOf
    Numeral Commands (4): rand, String.getNum, Number.transit, Number.toRange
    Console Log (1): log
    HTML Elements (15): target, query, copyFrom, copyValue, copyTo, addTo, styleTo, colorTo, hide, unhide, isHidden, transColor, fadeOut, fadeIn, fadeChange
    Save & Load (2): save, load
*/

/**
 * Check if Inori Functions are available and get current version.
 * Use inori("next") to get the number of next bug fix version.
 */
function inori(usage) {
    const version = [
        1, // Usually doesn't change
        5, // Major updates
        1, // Minor updates
        21031 // Bug fixes, start from 10000, last + rand(1000, 6000)
    ];

    if (usage == "next") { return version[3] + rand(1000, 6000); }

    log(`Inori Functions are available in current session.\nVersion: ${version[0]}.${version[1]}.${version[2]}.${version[3]}`);
}

// GLOBAL USAGE

/**
 * Sleep a moment then execute following commands.
 * [ASYNC] Only available in async functions.
 * @param {number} time - (>= 0) Sleep time in milliseconds
 * @example sleep(1000) // Pause your commands for 1s
 */
function sleep(time) {
    if (typeof time != "number") { throw new TypeError(`time must be a NUMBER`); }
    if (time < 0) { throw new RangeError("Cannot sleep less than 0 milliseconds"); }

    if (time != 0) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
}

/**
 * Pop up a seizure warning in page.
 * @param {any} cnText - The custom text for Chinese
 * @param {any} enText - The custom text for English
 * @example seizure("本页面包含闪烁内容。", "This page includes flashing content.") // Create a seizure warning in specified text.
 */
function seizure(cnText = "本页面包含可能会引起<strong>光敏性癫痫</strong>的内容。", enText = "This page include content that might cause <strong>photosensitive epilepsy.</strong>") {
    function preventScroll(event) {
        event.preventDefault();
    }
    
    if (cnText != "toCN" && cnText != "toEN" && cnText != "close") {
        document.querySelector("body").innerHTML += 
            `<dialog id="cnSeizure" class="SEIZURE">
                <h3 style="color: var(--red);">! 光敏性癫痫警告 !</h3>
                <p>${cnText}</p>
                <p>极小部分人可能会在本页面上看到特定视觉图像（包括闪烁效果或图案）时<strong>出现癫痫症状</strong>。</p>
                <p>如果你的家人或任何家庭成员曾出现过类似症状，请在本页面进行操作前咨询你的医生。</p>
                <p>如果你出现<strong>头晕目眩、视力模糊、眼睛或面部抽搐、四肢抽搐、迷失方向感、精神错乱或短暂的意识丧失</strong>等症状，请<strong>立即停止浏览本页面并咨询医生</strong>。</p>
                <p style="text-align: right;"><strong>中文 | <span class="LNK" onclick="seizure('toEN')">EN</span></strong></p>
                <p style="text-align: right;"><strong><span class="LNK" onclick="seizure('close')">[继续]</span></strong></p>
            </dialog>
            <dialog id="enSeizure" class="SEIZURE">
                <h3 style="color: var(--red);">! PHOTOSENSITIVE EPILEPSY WARNING !</h3>
                <p>${enText}</p>
                <p>A very small number of people may <strong>experience epilepsy symptoms</strong> when they see specific visual images (including flickering effects or patterns) on this page.</p>
                <p>If your family or any family member has experienced similar symptoms, please consult your doctor before proceeding with this page.</p>
                <p>If you experience symptoms such as <strong>dizziness, blurred vision, eye or facial twitching, limb twitching, disorientation, mental confusion, or brief loss of consciousness</strong>, please <strong>stop browsing this page IMMEDIATELY and consult a doctor</strong>.</p>
                <p style="text-align: right;"><strong><span class="LNK" onclick="seizure('toCN')">中文</span> | EN</strong></p>
                <p style="text-align: right;"><strong><span class="LNK" onclick="seizure('close')">[CONTINUE]</span></strong></p>
            </dialog>`;

        document.body.style.overflow = "hidden";
        window.addEventListener("scroll", preventScroll, { passive: false });

        document.querySelector("body *:not(.SEIZURE)").style.filter = "brightness(0.7)";

        seizure("toCN");
    }
    if (cnText == "toCN") {
        target("cnSeizure").showModal();
        target("enSeizure").close();
    } else if (cnText == "toEN") {
        target("cnSeizure").close();
        target("enSeizure").showModal();
    } else if (cnText == "close") {
        target("cnSeizure").close();
        target("enSeizure").close();

        document.body.style.overflow = "";
        window.removeEventListener("scroll", preventScroll, { passive: false });

        document.querySelector("body *").style.filter = "brightness(1)";
    }
}

/**
 * Create a copyright text in #copyright.
 * @param {number} startYear - (>= thisYear) The year that copyright starts
 * @param {string} signature - Who own the copyright
 * @example copyright(2021, "Anonymous") // Create a copyright owned by Anonymous, starting from 2024
 */
function copyright(startYear, signature = "千和 いのり") {
    if (typeof startYear != "number") { throw new TypeError(`startYear must be a NUMBER`); }
    if (typeof signature != "string") { throw new TypeError(`signature must be a STRING`); }
    if (document.getElementById("copyright") == null) { throw new ReferenceError("Cannot set a copyright without #copyright element"); }

    const thisYear = new Date().getFullYear();
    if (thisYear < +startYear) { throw new Error("Cannot set a copyright starting from future"); }

    if (thisYear == +startYear) {
        copyTo("copyright", `Copyright &copy; ${startYear} ${signature}. All Rights Reserved.`);
    } else {
        copyTo("copyright", `Copyright &copy; ${startYear}-${thisYear} ${signature}. All Rights Reserved.`);
    }
}

/**
 * Get or set the param from URL (.../...?param1=content1&param2=content2).
 * @param {"get" | "set"} method - Are you getting or setting a param?
 * @param {string} name - The param name from URL
 * @param {any} value - The param value being set (only when using "set")
 * @return {string | null} The value of the param (only when using "get")
 * @example paramURL("get", "userID") // Return the value of ?userID=...
 */
function paramURL(method, name, value = null) {
    if (method != "get" && method != "set") { throw new TypeError(`method must be "get" or "set"`); }
    if (typeof name != "string") { throw new TypeError(`name must be a STRING`); }

    if (method == "get") {
        return new URLSearchParams(window.location.search).get(name);
    }
    if (method == "set") {
        if (!window.location.href.match(/\?/g)) {
            window.location.href += `?${name}=${value}`;
        } else {
            window.location.href += `&${name}=${value}`;
        }
    }
}

/**
 * Return true in a specified chance.
 * @param {number} percent - [0, 1] The chance of returning true
 * @returns {boolean} true or false in specified chance
 * @example chance(0.6) // It has 60% chance to return true
 */
function chance(percent) {
    if (typeof percent != "number") { throw new TypeError(`percent must be a NUMBER`); }

    return rand(0, 1, true) <= percent;
}

/**
 * Deep clone (isolate) an array.
 * @returns {array} The deep clone result
 * @example [1, 2, [3, 4]].isolate() // [1, 2, [3, 4]]
 */
Array.prototype.isolate = function () {
    let newArray = [];

    this.forEach(arg => {
        if (typeof arg == "object") { // Still an array
            newArray.push(arg.isolate()); // Loop
        } else {
            newArray.push(arg);
        }
    });

    return newArray;
}

/**
 * Remove ONLY ONE specified target from an array.
 * @param {any} target - The target to remove
 * @returns {array} The array without (one of) the target(s)
 * @example [1, 2, 3].remove(2) // [1, 3]
 */
Array.prototype.remove = function (target) {
    const index = this.indexOf(target); // this[index] is the (FIRST) target
    let returnArray = [];

    for (let i = 0; i < index; i++) { // Push value that is before index
        returnArray.push(this[i]);
    }
    for (let i = index + 1; i < this.length; i++) { // Push value that is after index
        returnArray.push(this[i]);
    }

    return returnArray;
};

/**
 * Get the count of specified string in a string
 * @param {any} target - The target to count
 * @returns {number} How many targets are in the string
 * @example "HelloWorld".getCountOf("l") // 3
 */
String.prototype.getCountOf = function (target) {
    const splitString = this.split(target);

    return splitString.length - 1;
};

// NUMERAL COMMANDS

/**
 * Return a random number.
 * @param {number} min - (<= max) The minimum value of the random integer
 * @param {number} max - (>= min) The maximum value of the random integer
 * @param {boolean} keepFloat - Keep the decimal point or not
 * @return {number} The result of randomized number
 * @example rand(1, 10, true) // Generate a random number (including fractions) in [1, 10]
 */
function rand(min, max, keepFloat = false) {
    if (typeof min != "number") { throw new TypeError(`min must be a NUMBER`); }
    if (typeof max != "number") { throw new TypeError(`max must be a NUMBER`); }
    if (typeof keepFloat != "boolean") { throw new TypeError(`keepFloat must be a BOOLEAN`); }
    if (min > max) { throw new RangeError(`Invalid minimum / maximum integer; minimum (${min}) should be less than maximum (${max})`); }

    let range;

    if (!keepFloat) {
        range = max - min + 1;
        return Math.floor(Math.random() * range) + min;
    } else {
        range = max - min;
        return Math.random() * range + min;
    }
}

/**
 * Return a selected number in a string.
 * @param {number} order (>= 1) Which part of number you want (start from 1)
 * @return {number | null} The number from specified string in specified order
 * @example "589brg13d7.4gh,-2.6eru".getNum(3) // 7.4 (It'll collect ["589", "13", "7.4", "-2.6"])
 */
String.prototype.getNum = function (order = 1) {
    if (typeof order != "number") { throw new TypeError(`order must be a NUMBER`); }
    if (order <= 0) { throw new RangeError("Order cannot less than 1"); }

    const numbersList = this.match(/-?[0-9]+(\.[0-9]+)?/g);
    return numbersList != null ? +numbersList[order - 1] : null;
}

/**
 * Return a number within given range and percentage.
 * @param {number} from - The number where calculates from
 * @param {number} to - The number where calculates to
 * @param {boolean} disableRange - Should the function don't keep the percentage in [0, 1]
 * @return {number} A number in range and specified percentage
 * @example (0.6).transit(0, 10) // 6 (The number in [0, 10] and 60% of its range is 6)
 */
Number.prototype.transit = function (from, to, disableRange = false) {
    if (typeof from != "number") { throw new TypeError(`from must be a NUMBER`); }
    if (typeof to != "number") { throw new TypeError(`to must be a NUMBER`); }
    if (typeof disableRange != "boolean") { throw new Error(`disableRange must be a BOOLEAN`); }

    const range = to - from;

    return disableRange ? this * range + from : this.toRange(0, 1) * range + from;
}

/**
 * Return a number within given range.
 * If the number is out of range, a warning message will be provided.
 * @param {number} minBoundary - (<= maxBoundary) The boundary of minimum
 * @param {number} maxBoundary - (>= minBoundary) The boundary of maximum
 * @param {boolean} warnIfWorked - Should the function warn in console if itself worked
 * @return {number} The number been parsed into range
 * @example (120).toRange(0, 100) // 100 (120 is out of [0, 100], so output 100)
 */
Number.prototype.toRange = function (minBoundary, maxBoundary, warnIfWorked = false) {
    if (typeof minBoundary != "number") { throw new TypeError(`minBoundary must be a NUMBER`); }
    if (typeof maxBoundary != "number") { throw new Error(`maxBoundary must be a NUMBER`); }
    if (typeof warnIfWorked != "boolean") { throw new Error(`warnIfWorked must be a BOOLEAN`); }
    if (minBoundary > maxBoundary) { throw new RangeError(`Invalid minimum / maximum boundary number; minimum (${min}) should be less than maximum (${max})`); }

    if (warnIfWorked && (this < minBoundary || this > maxBoundary)) { console.warn(`Given number isn't between ${minBoundary} and ${maxBoundary} (received ${this}). Parsing it into given range.`); }

    return Math.min(Math.max(this, minBoundary), maxBoundary);
}

// CONSOLE LOG

/**
 * Log variants in console by using less characters.
 * @param {any} variant - The variant of log output
 * @example log(score1, score2) // Output score1 and score2
 */
function log(...args) {
    console.log(args.length == 1 ? args[0] : args);
}

// HTML ELEMENTS

/**
 * Return an element in HTML.
 * @param {string} element - The id of target element
 * @return {HTMLElement | null} The element in HTML
 * @example target("title").addEventListener(...) // Add an event listener to #title
 */
function target(element) {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }

    return document.getElementById(element);
}

/**
 * Return queried element(s) in HTML.
 * @param {string} element - The query input of target element
 * @return {NodeList} The element(s) in HTML
 * @example query(".paragraph") // List out all elements of .paragraph
 */
function query(element) {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }

    return document.querySelectorAll(element);
}

/**
 * Copy something from an element's innerHTML.
 * @param {string} element - The id of target element
 * @return {string} The innerHTML of the element
 * @example copyFrom("title") // Return the innerHTML of #title
 */
function copyFrom(element) {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }

    return target(element).innerHTML;
}

/**
 * Copy something from an input's value.
 * @param {string} element - The id of target input
 * @return {string} The value of the element
 * @example copyValue("range") // Return the value of #range
 */
function copyValue(element) {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }

    return target(element).value;
}

/**
 * Copy something to an element's innerHTML.
 * @param {string} element - The id of target element
 * @param {any} content - The content to copy to the element
 * @example copyTo("p1", "Hello") // Copy "Hello" to #p1
 */
function copyTo(element, content) {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }

    target(element).innerHTML = content;
}

/**
 * Add something to an element's innerHTML.
 * @param {string} element - The id of target element
 * @param {any} content - The content to add to the element
 * @example copyTo("p1", "Hello") // Add "Hello" to #p1
 */
function addTo(element, content) {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }

    target(element).innerHTML += content;
}

/**
 * Apply styles to an element.
 * @param {string} element - The id of target element
 * @param {string} style - The style to apply to the element
 * @param {"id" | "class" | "query"} method - The method of getting elements. If "query" is used, type element like CSS (for example, "#target *")
 * @example styleTo(".main title", "margin-left: 64px;", "query") // The left margin of <title> in <... class="main"> will be 64px
 */
function styleTo(element, style, method = "id") {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }
    if (typeof style != "string") { throw new TypeError(`style must be a STRING`); }
    if (method != "id" && method != "class" && method != "query") { throw new TypeError(`method must be "id" or "class" or "query"`); }

    if (method == "id") {
        target(element).style = style;
    }
    if (method == "class") {
        query(`.${element}`).forEach(target => {
            target.style = style;
        });
    }
    if (method == "query") {
        query(element).forEach(target => {
            target.style = style;
        });
    }
}

/**
 * Change the color of an element.
 * @param {string} element - The id of target element
 * @param {string} color - The color to apply to the element
 * @param {"id" | "class" | "query"} method - The method of getting elements. If "query" is used, type element like CSS (for example, "#target *")
 * @example colorTo(".main title", "#ff0000", "query") // The color of <title> in <... class="main"> will be red
 */
function colorTo(element, color, method = "id") {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }
    if (typeof color != "string") { throw new TypeError(`color must be a STRING`); }
    if (method != "id" && method != "class" && method != "query") { throw new TypeError(`method must be "id" or "class" or "query"`); }

    if (method == "id") {
        target(element).style.color = color;
    }
    if (method == "class") {
        query(`.${element}`).forEach(target => {
            target.style.color = color;
        });
    }
    if (method == "query") {
        query(element).forEach(target => {
            target.style.color = color;
        });
    }
}

/**
 * Hide an element.
 * @param {string} element - The id of target element
 * @param {"id" | "class" | "query"} method - The method of getting elements. If "query" is used, type element like CSS (for example, "#target *")
 * @example hide(".main title", "query") // <title> in <... class="main"> will be hidden
 */
function hide(element, method = "id") {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }
    if (method != "id" && method != "class" && method != "query") { throw new TypeError(`method must be "id" or "class" or "query"`); }

    if (method == "id") {
        target(element).style.display = "none";
    }
    if (method == "class") {
        query(`.${element}`).forEach(target => {
            target.style.display = "none";
            target.style.opacity = 1;
        });
    }
    if (method == "query") {
        query(element).forEach(target => {
            target.style.display = "none";
            target.style.opacity = 1;
        });
    }
}

/**
 * Show an element with expected display method.
 * @param {string} element - The id of target element
 * @param {string} display - The type of display
 * @param {"id" | "class" | "query"} method - The method of getting elements. If "query" is used, type element like CSS (for example, "#target *")
 * @example unhide(".main title", "inline-block", "query") // Show <title> in <... class="main"> in inline-block
 */
function unhide(element, display = "block", method = "id") {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }
    if (typeof display != "string") { throw new TypeError(`display must be a STRING`); }
    if (method != "id" && method != "class" && method != "query") { throw new TypeError(`method must be "id" or "class" or "query"`); }

    if (method == "id") {
        target(element).style.display = display;
        target(element).style.opacity = 1;
    }
    if (method == "class") {
        query(`.${element}`).forEach(target => {
            target.style.display = display;
            target.style.opacity = 1;
        });
    }
    if (method == "query") {
        query(element).forEach(target => {
            target.style.display = display;
            target.style.opacity = 1;
        });
    }
}

/**
 * Check a element is hidden or not.
 * @param {string} element - The id of target element
 * @return {boolean} The element is hidden or not
 * @example isHidden("title") // If #title is hidden, return true
 */
function isHidden(element) {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }

    return target(element).style.display == "none" || target(element).style.opacity === "0" || !!query(`#${element}[hide]`)[0] && target(element).style.display == "";
}

/**
 * Turn an element's current color to another in transition.
 * @param {string} element - The id of target element
 * @param {string} color - The target color of transition
 * @param {number} time - （>= 0) The time length of transition in milliseconds
 * @param {"id" | "class" | "query"} method - The method of getting elements. If "query" is used, type element like CSS (for example, "#target *")
 * @example transColor("title", "#00dd00") // Turn the color of title to green in transition.
 */
async function transColor(element, color, time = 100, method = "id") {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }
    if (typeof color != "string") { throw new TypeError(`color must be a STRING`); }
    if (typeof time != "number") { throw new TypeError(`time must be a NUMBER`); }
    if (method != "id" && method != "class" && method != "query") { throw new TypeError(`method must be "id" or "class" or "query"`); }
    if (time < 0) { throw new RangeError("Cannot change color in less than 0 milliseconds"); }

    if (time == 0) {
        colorTo(element, color);
        return;
    }

    if (method == "id") {
        target(element).classList.add("temp_transColor");
    }
    if (method == "class") {
        query(`.${element}`).forEach(target => {
            target.classList.add("temp_transColor");
        });
    }
    if (method == "query") {
        query(element).forEach(target => {
            target.classList.add("temp_transColor");
        });
    }
    document.querySelector("style").innerHTML += `.temp_transColor { transition: color ${time / 1000}s var(--transit); }`;

    colorTo(element, color, method);

    await sleep(time);

    if (method == "id") {
        target(element).classList.remove("temp_transColor");
    }
    if (method == "class") {
        query(`.${element}`).forEach(target => {
            target.classList.remove("temp_transColor");
        });
    }
    if (method == "query") {
        query(element).forEach(target => {
            target.classList.remove("temp_transColor");
        });
    }
}

/**
 * Fade out an element.
 * @param {string} element - The id of target element
 * @param {boolean} doNotHide - Do not hide the element after fading out (keep a blank space for the element)
 * @param {number} time - (>= 1) The time length of fade out
 * @example fadeOut("title", false, 200) // Fade out #title in 0.2s.
 */
async function fadeOut(element, doNotHide = false, time = 100) {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }
    if (typeof time != "number") { throw new TypeError(`time must be a NUMBER`); }
    if (time < 1) { throw new RangeError("Cannot fade out in less than 1 milliseconds"); }

    let nowOpacity;

    if (target(element).style.opacity != "") {
        nowOpacity = +target(element).style.opacity;
    } else {
        nowOpacity = 1;
    }
    while (nowOpacity > 0) {
        nowOpacity -= 0.05;
        target(element).style.opacity = nowOpacity;
        await sleep(time / 20);
    }
    if (nowOpacity <= 0) {
        if (!doNotHide) {
            hide(element);
        }
        target(element).style.opacity = 0;
    }
}

/**
 * Fade in an element.
 * @param {string} element - The id of target element
 * @param {number} time - (>= 1) The time length of fade out
 * @example fadeOut("title", 200) // Fade in #title in 0.2s.
 */
async function fadeIn(element, time = 100) {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }
    if (typeof time != "number") { throw new TypeError(`time must be a NUMBER`); }
    if (time < 1) { throw new RangeError("Cannot fade in in less than 1 milliseconds"); }

    let nowOpacity;

    unhide(element);
    if (target(element).style.opacity != "") {
        nowOpacity = +target(element).style.opacity;
    } else {
        nowOpacity = 0;
    }
    while (nowOpacity < 1) {
        nowOpacity += 0.05;
        target(element).style.opacity = nowOpacity;
        await sleep(time / 20);
    }
}

/**
 * Fade out an element and fade in another element.
 * @param {string} outElement - The id of target element to fade out
 * @param {string} inElement - The id of target element to fade in 
 * @param {number} time - (>= 1) The total time length of whole change session
 * @example fadeChange("title", "secondTitle", 500) // Fade out #title in 0.25s and fade in #secondTitle in 0.25s.
 */
async function fadeChange(outElement, inElement, time = 200) {
    if (typeof outElement != "string") { throw new TypeError(`outElement must be a STRING`); }
    if (typeof inElement != "string") { throw new TypeError(`inElement must be a STRING`); }
    if (typeof time != "number") { throw new TypeError(`time must be a NUMBER`); }
    if (time < 1) { throw new RangeError("Cannot fade change in than 1 milliseconds"); }

    fadeOut(outElement, false, time / 2);
    await sleep(time / 2 + 20);
    fadeIn(inElement, time / 2);
}

// SAVE & LOAD

/**
 * Download a file with expected content.
 * @param {string} fileName - The name of the file to be downloaded
 * @param {any} content - The content of the file
 * @example save("readme.txt", "Please read this file.") // It'll download a file named readme.txt with "Please read this file."
 */
function save(fileName, content) {
    if (typeof fileName != "string") { throw new TypeError(`fileName must be a STRING`); }

    const blob = new Blob([content], { type: "text/plain" });
    const a = document.createElement("a");
    const url = window.URL.createObjectURL(blob);

    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

/**
 * Keeps copy the content from file in <input id="inputId" /> to an expected position.
 * @param {string} inputId - The id of input where the file receives
 * @param {string} element - The place to copy the file content
 * @example load("top-file", "fileInfo") // When a file is selected in <input id="top-file" />, its content will be copied to #fileInfo.
 */
function load(inputId, element = "file-content") {
    if (typeof inputId != "string") { throw new TypeError(`inputId must be a STRING`); }
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }

    target(inputId).addEventListener("change", (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (event) {
                target(element).textContent = event.target.result;
            };
            reader.readAsText(file);
        }
    });
}