// INORI FUNCTIONS

/*
    Inori Function is a custom JavaScript library used in ChiwaInori.top for better coding.

    Most of the functions included are original created by ChiwaInori.top owner Chiwa Inori.
    Most of them required other Inori Functions to work. Some functions can be also used in node environment.

    Index:

    Inori Basic (1): inori
    Global Usage (8):
        Commands (1): sleep, overload
        Website (2): seizure, copyright
        URL Params (2): getURLparam, setURLparam
        Console Log (2): log, warn
    JS Commands (10):
        Common (4): chance, Array.isolate, Array.remove, String.getCountOf
        Numeral (6): 
            Get Numbers (2): rand, String.getNum
            Modify Numbers (3): Number.keep, Number.range, Number.transit, Number.toRange
    HTML Elements (17):
        Target Elements (2): target, query
        Interacts (6):
            Input (2): copyFrom, copyValue
            Output (4): copyTo, addTo, setValue, applyAll
        CSS Modifications (9):
            Applications (4): styleTo, colorTo, hide, unhide
            Confirmations (1): isHidden
            Transitions (4): transColor, fadeOut, fadeIn, fadeChange
    Save & Load (3): save, load, loadJSON
*/

/* eslint no-shadow: "off" */

// INORI BASIC

/**
 * Check if Inori Functions are available.
 * @example inori() // If Inori Functions are available, get a log in console.
 */
function inori() {
    log(`Inori Functions are available in current session.`);
}

// GLOBAL USAGE

// GLOBAL USAGE / COMMANDS

/**
 * Sleep a moment then execute following commands.
 * @param {number} time - (>= 0) Sleep time in milliseconds
 * @returns {Promise} A setTimeout promise
 * @example await sleep(1000) // Pause your commands for 1s (also: sleep(1000).then(() => { ... }))
 */
function sleep(time) {
    if (typeof time != "number") { throw new TypeError(`time must be a NUMBER`); }
    if (time < 0) { throw new RangeError(`time required (>= 0), received ${time}`); }

    return new Promise(resolve => setTimeout(resolve, time));
}

/**
 * Overload CPU to temporarily stop code for test.
 * @param {number} time - (> 0) Overload time in milliseconds
 * @example overload(1000) // Overload CPU for 1s (Most of codes will be paused)
 */
function overload(time) {
    if (typeof time != "number") { throw new TypeError(`time must be a NUMBER`); }
    if (time <= 0) { throw new RangeError(`time required (> 0), received ${time}`); }

    const startTime = Date.now();
    const endTime = startTime + time;

    while (Date.now() < endTime) {
        for (let i = 0; i < 10 ** 8; i++) {
            Math.sqrt(i);
        }
    }
}

// GLOBAL USAGE / WEBSITE

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

    if (cnText == "_toCN") {
        target("cnSeizure").showModal();
        target("enSeizure").close();
    }
    if (cnText == "_toEN") {
        target("cnSeizure").close();
        target("enSeizure").showModal();
    }
    if (cnText == "_close") {
        target("cnSeizure").close();
        target("enSeizure").close();

        document.body.style.overflow = "";
        window.removeEventListener("scroll", preventScroll);

        query(".mainBody")[0].style.filter = "brightness(1)";
    }
    if (cnText[0] == "_") { return; }

    query("body")[0].innerHTML += 
        `<dialog id="cnSeizure" class="SEIZURE">
            <h3 style="color: var(--red);">! 光敏性癫痫警告 !</h3>
            <p>${cnText}</p>
            <p>极小部分人可能会在本页面上看到特定视觉图像（包括闪烁效果或图案）时<strong>出现癫痫症状</strong>。</p>
            <p>如果你的家人或任何家庭成员曾出现过类似症状，请在本页面进行操作前咨询你的医生。</p>
            <p>如果你出现<strong>头晕目眩、视力模糊、眼睛或面部抽搐、四肢抽搐、迷失方向感、精神错乱或短暂的意识丧失</strong>等症状，请<strong>立即停止浏览本页面并咨询医生</strong>。</p>
            <p style="text-align: right;"><strong>中文 | <span class="LNK" onclick="seizure('_toEN')">EN</span></strong></p>
            <p style="text-align: right;"><strong><span class="LNK" onclick="seizure('_close')">[继续]</span></strong></p>
        </dialog>
        <dialog id="enSeizure" class="SEIZURE">
            <h3 style="color: var(--red);">! PHOTOSENSITIVE EPILEPSY WARNING !</h3>
            <p>${enText}</p>
            <p>A very small number of people may <strong>experience epilepsy symptoms</strong> when they see specific visual images (including flickering effects or patterns) on this page.</p>
            <p>If your family or any family member has experienced similar symptoms, please consult your doctor before proceeding with this page.</p>
            <p>If you experience symptoms such as <strong>dizziness, blurred vision, eye or facial twitching, limb twitching, disorientation, mental confusion, or brief loss of consciousness</strong>, please <strong>stop browsing this page IMMEDIATELY and consult a doctor</strong>.</p>
            <p style="text-align: right;"><strong><span class="LNK" onclick="seizure('_toCN')">中文</span> | EN</strong></p>
            <p style="text-align: right;"><strong><span class="LNK" onclick="seizure('_close')">[CONTINUE]</span></strong></p>
        </dialog>`;
    
    document.body.style.overflow = "hidden";
    window.addEventListener("scroll", preventScroll, { passive: false });
    query(".mainBody")[0].style.filter = "brightness(0.7)";

    seizure("_toCN");
}

/**
 * Create a copyright text in #copyright.
 * @param {number} startYear - (<= new Date().getFullYear()) The year that copyright starts
 * @param {any} signature - Who owns the copyright
 * @example copyright(2021, "Anonymous") // Create a copyright owned by Anonymous, starting from 2021
 */
function copyright(startYear, signature = "<ruby>千和<rt>ちわ</rt></ruby> いのり") {
    if (typeof startYear != "number") { throw new TypeError(`startYear must be a NUMBER`); }
    if (!target("copyright")) { throw new ReferenceError("Cannot set a copyright without #copyright element"); }

    const thisYear = new Date().getFullYear();
    if (startYear > thisYear) { throw new RangeError(`startYear required (<= ${thisYear}), received ${startYear}`); }

    if (startYear == thisYear) {
        copyTo("copyright", `Copyright &copy; ${startYear} ${signature}. All Rights Reserved.`);
    } else {
        copyTo("copyright", `Copyright &copy; ${startYear}-${thisYear} ${signature}. All Rights Reserved.`);
    }
}

// GLOBAL USAGE / URL PARAMS

/**
 * Get the param from URL (.../...?param1=content1&param2=content2).
 * @param {string} name - The param name to get from URL
 * @returns {string | null} The value of the param
 * @example getURLparam("userID") // Return the value of ?userID=...
 */
function getURLparam(name) {
    if (typeof name != "string") { throw new TypeError(`name must be a STRING`); }

    return new URLSearchParams(window.location.search).get(name);
}

/**
 * Set the param to URL (.../...?param1=content1&param2=content2).
 * @param {string} name - The param name from URL
 * @param {any} value - The param value being set
 * @example setURLparam("result", "abcdef") // Redirect to .../...?result=abcdef
 */
function setURLparam(name, value = null) {
    if (typeof name != "string") { throw new TypeError(`name must be a STRING`); }

    if (!window.location.href.match(/\?/g)) {
        window.location.href += `?${name}=${value}`;
    } else {
        window.location.href += `&${name}=${value}`;
    }
}

// GLOBAL USAGE / CONSOLE LOG

/**
 * Log variants in console by using less characters.
 * @param {any} args - The variant to output in console
 * @example log(score1, score2) // Output score1 and score2
 */
function log(...args) {
    console.log(args.length == 1 ? args[0] : args);
}

/**
 * Output a warn with stack information.
 * @param {any} message - The content of warn message
 * @example warn("Dangerous variant.") // Output a warn with stack.
 */
function warn(message) {
    try {
        throw new Error();
    } catch (e) {
        console.warn(e.stack.replaceAll(/Error/g, `Warn: ${message}`)
            .replaceAll(/\n {4}at warn \(.*\)/g, "")
            .replaceAll(/https?:\/\/.*\//g, ""));
    }
}

// JS COMMANDS / COMMON

/**
 * Return true in a specified chance.
 * @param {number} percent - The chance of returning true
 * @returns {boolean} true or false in specified chance
 * @example chance(0.6) // It has 60% chance to return true
 */
function chance(percent) {
    if (typeof percent != "number") { throw new TypeError(`percent must be a NUMBER`); }

    return rand(0, 1, true) <= percent;
}

/**
 * Deep clone (isolate) an array / object.
 * @returns {object} The deep clone result
 * @example [1, 2, [3, {id: 4}, 5]].isolate() // [1, 2, [3, {id: 4}, 5]]
 */
Object.prototype.isolate = function () {
    const obj = this.valueOf();

    if (obj === null || typeof obj != "object") { // Neither an array nor an object
        return obj;
    }

    if (Array.isArray(obj)) { // Is an array
        const arrIsolated = [];
        obj.forEach((item, index) => {
            arrIsolated[index] = item.isolate();
        });
        return arrIsolated;
    }

    const objIsolated = {}; // Is an object
    Object.keys(obj).forEach(key => {
        objIsolated[key] = obj[key].isolate();
    });
    return objIsolated;
};

/**
 * Remove ONLY ONE (the first one) specified target from an array.
 * @param {any} target - The target to remove
 * @returns {object} The array without (one of) the target(s)
 * @example [1, 2, 3].remove(2) // [1, 3]
 */
Array.prototype.remove = function (target) {
    const index = this.indexOf(target); // The (FIRST) target is this[index]
    const returnArray = [];

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
 * @example "Hello, World".getCountOf("l") // 3
 */
String.prototype.getCountOf = function (target) {
    const splitString = this.split(target);

    return splitString.length - 1;
};

// JS COMMANDS / NUMERAL

// JS COMMANDS / NUMERAL / GET NUMBERS

/**
 * Return a random number.
 * @param {number} min - (<= max) The minimum value of the random integer
 * @param {number} max - (>= min) The maximum value of the random integer
 * @param {boolean} keepFloat - Keep the decimal point or not
 * @returns {number} The result of randomized number
 * @example rand(1, 10, true) // Generate a random number (including fractions) in [1, 10]
 */
function rand(min, max, keepFloat = false) {
    if (typeof min != "number") { throw new TypeError(`min must be a NUMBER`); }
    if (typeof max != "number") { throw new TypeError(`max must be a NUMBER`); }
    if (typeof keepFloat != "boolean") { throw new TypeError(`keepFloat must be a BOOLEAN`); }
    if (min > max) { throw new RangeError(`min required (<= ${max}), received ${min}`); }

    let range;

    if (keepFloat) {
        range = max - min;
        return Math.random() * range + min;
    }

    range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

/**
 * Return a selected number in a string.
 * @param {number} order - (%1=0, >= 1) Which part of number you want (start from 1)
 * @returns {number | null} The number from specified string in specified order
 * @example "589brg13d7.4gh,-2.6eru".getNum(3) // 7.4 (It'll collect ["589", "13", "7.4", "-2.6"])
 */
String.prototype.getNum = function (order = 1) {
    if (typeof order != "number") { throw new TypeError(`order must be a NUMBER`); }
    if (order % 1 != 0) { throw new RangeError(`order required INTEGER (%1=0), received ${order}`); }
    if (order < 1) { throw new RangeError(`order required (>= 1), received ${order}`); }

    const numbersList = this.match(/-?[0-9]+(\.[0-9]+)?/g);

    return numbersList ? +numbersList[order - 1] : null;
};

// JS COMMANDS / NUMERAL / MODIFY NUMBERS

/**
 * Keep a specified decimal place(s) to a number.
 * @param {number} digit - (%1=0) How many decimal places to keep (0 to parseInt, negative to keep at the left of decimal point)
 * @returns {number} The number kept specified decimal place(s)
 * @example (123.456).keep(2) // 123.46
 */
Number.prototype.keep = function (digit = 0) {
    if (typeof digit != "number") { throw new TypeError(`digit must be a NUMBER`); }
    if (digit % 1 != 0) { throw new RangeError(`digit required INTEGER (%1=0), received ${digit}`); }

    return Math.round(this * 10 ** digit) / 10 ** digit;
};

/**
 * Check the number is in given interval or not
 * @param {number} min - The minimum value of interval
 * @param {number} max - The maximum value of interval
 * @param {"CC" | "CO" | "OC" | "OO"} method - The border type of interval (Close [a, b] or Open (a, b))
 * @returns {boolean} Is the number in the given range
 * @example (5),range(0, 5, "OO") // false (not in (0, 5) range)
 */
Number.prototype.range = function (min, max, method = "CC") {
    if (min > max) { throw new RangeError(`min required (<= ${max}), received ${min}`); }
    if (method != "CC" && method != "CO" && method != "OC" && method != "OO") { throw new TypeError(`method must be "CC" or "CO" or "OC" or "OO"`); }

    if (method == "CC") { return this >= min && this <= max; }
    if (method == "CO") { return this >= min && this < max; }
    if (method == "OC") { return this > min && this <= max; }
    if (method == "OO") { return this > min && this < max; }
};

/**
 * Scale a number to given range.
 * @param {number} from - The number where scales from
 * @param {number} to - The number where scales to
 * @param {boolean} disableRange - Should the function don't keep the percentage in [0, 1]
 * @returns {number} A number in range and specified percentage
 * @example (0.6).transit(0, 10) // 6 (The number in [0, 10] and 60% of its range is 6)
 */
Number.prototype.transit = function (from, to, disableRange = false) {
    if (typeof from != "number") { throw new TypeError(`from must be a NUMBER`); }
    if (typeof to != "number") { throw new TypeError(`to must be a NUMBER`); }
    if (typeof disableRange != "boolean") { throw new TypeError(`disableRange must be a BOOLEAN`); }

    const range = to - from;

    return disableRange ? this * range + from : this.toRange(0, 1) * range + from;
};

/**
 * Return a number within given range.
 * If the number is out of range, a warning message will be provided.
 * @param {number} minBoundary - (<= maxBoundary) The boundary of minimum
 * @param {number} maxBoundary - (>= minBoundary) The boundary of maximum
 * @param {boolean} warnIfWorked - Should the function warn in console if itself worked
 * @returns {number} The number been parsed into range
 * @example (120).toRange(0, 100) // 100 (120 is out of [0, 100], so output 100)
 */
Number.prototype.toRange = function (minBoundary, maxBoundary, warnIfWorked = false) {
    if (typeof minBoundary != "number") { throw new TypeError(`minBoundary must be a NUMBER`); }
    if (typeof maxBoundary != "number") { throw new TypeError(`maxBoundary must be a NUMBER`); }
    if (typeof warnIfWorked != "boolean") { throw new TypeError(`warnIfWorked must be a BOOLEAN`); }
    if (minBoundary > maxBoundary) { throw new RangeError(`minBoundary required (<= ${maxBoundary}), received ${minBoundary}`); }

    if (warnIfWorked && (this < minBoundary || this > maxBoundary)) { warn(`Given number isn't between ${minBoundary} and ${maxBoundary} (received ${this}). Parsing it into given range.`); }

    return Math.min(Math.max(this, minBoundary), maxBoundary);
};

// HTML ELEMENTS

// HTML ELEMENTS / TARGET ELEMENTS

/**
 * Return an element in HTML.
 * @param {string} element - The id of target element
 * @returns {HTMLElement | null} The element in HTML
 * @example target("title").addEventListener(...) // Add an event listener to #title
 */
function target(element) {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }

    return document.getElementById(element);
}

/**
 * Return queried element(s) in HTML.
 * Do not forget to add [x] to get specified element because it returns a NodeList.
 * @param {string} element - The query input of target element
 * @returns {NodeList} The element(s) in HTML
 * @example query(".paragraph") // List out all elements of .paragraph
 */
function query(element) {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }

    return document.querySelectorAll(element);
}

// HTML ELEMENTS / INTERACTS

// HTML ELEMENTS / INTERACTS / INPUT

/**
 * Copy something from an element's innerHTML.
 * @param {string} element - The id of target element
 * @returns {string} The innerHTML of the element
 * @example copyFrom("title") // Return the innerHTML of #title
*/
function copyFrom(element) {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }
    
    return target(element).innerHTML;
}

/**
 * Copy the value of an input.
 * @param {string} element - The id of target input
 * @returns {string} The value of the element
 * @example copyValue("range") // Return the value of #range
*/
function copyValue(element) {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }
    
    return target(element).value;
}

// HTML ELEMENTS / INTERACTS / OUTPUT

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
 * Set a value of an input.
 * @param {string} element - The id of target input
 * @param {any} content - The value to be set
 * @example setValue("name", "David") // Set the value of #name to "David"
*/
function setValue(element, content) {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }
    
    target(element).value = content;
}

/**
 * Apply modifications to all queried element(s). It has same actions to query(element).forEach.
 * @param {string} element - The query input of target element
 * @param {function} callback - What should all queried elements do
 * @example applyAll("p", (element, index) => { element.innerHTML = `${index + 1}. ${element.innerHTML}`; }) // Add a index number to all p
 */
function applyAll(element, callback) {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }
    if (typeof callback != "function") { throw new TypeError(`callback must be a FUNCTION`); }

    const queried = query(element);
    const length = queried.length;

    for (let i = 0; i < length; i++) {
        callback(queried[i], i);
    }
}

// HTML ELEMENTS / CSS MODIFICATIONS

// HTML ELEMENTS / CSS MODIFICATIONS / APPLICATIONS

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
        applyAll(`.${element}`, target => {
            target.style = style;
        });
    }
    if (method == "query") {
        applyAll(element, target => {
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
        applyAll(`.${element}`, target => {
            target.style.color = color;
        });
    }
    if (method == "query") {
        applyAll(element, target => {
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
        applyAll(`.${element}`, target => {
            target.style.display = "none";
            target.style.opacity = 1;
        });
    }
    if (method == "query") {
        applyAll(element, target => {
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
        applyAll(`.${element}`, target => {
            target.style.display = display;
            target.style.opacity = 1;
        });
    }
    if (method == "query") {
        applyAll(element, target => {
            target.style.display = display;
            target.style.opacity = 1;
        });
    }
}

// HTML ELEMENTS / CSS MODIFICATIONS / CONFIRMATIONS

/**
 * Check a element is hidden or not.
 * @param {string} element - The id of target element
 * @returns {boolean} The element is hidden or not
 * @example isHidden("title") // If #title is hidden, return true
 */
function isHidden(element) {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }

    return target(element).style.display == "none" || target(element).style.opacity === "0" || !!query(`#${element}[hide]`)[0] && target(element).style.display == "";
}

// HTML ELEMENTS / CSS MODIFICATIONS / TRANSITIONS

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
    if (time < 0) { throw new RangeError(`time required (>= 0), received ${time}`); }

    if (time == 0) {
        colorTo(element, color);
        return;
    }

    let id = 1;
    while (target(`style#temp${id}`)) {
        id++;
    }
    const styleElement = document.createElement("style");
    styleElement.textContent = `.tempTransColor${id} { transition: color ${time / 1000}s var(--transit); }`;
    document.head.appendChild(styleElement);

    if (method == "id") {
        target(element).classList.add(`tempTransColor${id}`);
    }
    if (method == "class") {
        applyAll(`.${element}`, target => {
            target.classList.add(`tempTransColor${id}`);
        });
    }
    if (method == "query") {
        applyAll(element, target => {
            target.classList.add(`tempTransColor${id}`);
        });
    }

    colorTo(element, color, method);

    await sleep(time);

    if (method == "id") {
        target(element).classList.remove(`tempTransColor${id}`);
    }
    if (method == "class") {
        applyAll(`.${element}`, target => {
            target.classList.remove(`tempTransColor${id}`);
        });
    }
    if (method == "query") {
        applyAll(element, target => {
            target.classList.remove(`tempTransColor${id}`);
        });
    }
    
    document.head.removeChild(styleElement);
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
    if (time < 0) { throw new RangeError(`time required (>= 0), received ${time}`); }

    if (time == 0) {
        hide(element);
        return;
    }

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
 * @param {number} time - (>= 1) The time length of fade in
 * @example fadeOut("title", 200) // Fade in #title in 0.2s.
 */
async function fadeIn(element, time = 100) {
    if (typeof element != "string") { throw new TypeError(`element must be a STRING`); }
    if (typeof time != "number") { throw new TypeError(`time must be a NUMBER`); }
    if (time < 1) { throw new RangeError(`time required (>= 0), received ${time}`); }

    if (time == 0) {
        unhide(element);
        return;
    }

    let nowOpacity;

    if (target(element).style.display == "none" || query(`${element}[hide]`)) {
        unhide(element); target(element).style.opacity = 0;
    }
    
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
    if (time < 1) { throw new RangeError(`time required (>= 0), received ${time}`); }

    if (time == 0) {
        hide(outElement);
        unhide(inElement);
        return;
    }

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

    target(inputId).addEventListener("change", event => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (event) {
                target(element).textContent = event.target.result;
            };
            reader.readAsText(file);
        } else {
            target(element).textContent = "";
        }
    });
}

/**
 * Load a JSON file from input and return an object.
 * [WARNING] Don't forget to sleep(50) after loadJSON because load file needs time.
 * @param {string} inputId - The id of input where the file receives
 * @returns {Promise} The promise included JSON
 * @example loadJSON("fileInput").then(json => content = json).catch(e => { if (e.message.includes("Invalid") { ... } }) // Load JSON from #fileInput and copy the JSON object to content, and catch error from loadJSON
 */
function loadJSON(inputId) {
    if (typeof inputId != "string") { throw new TypeError(`inputId must be a STRING`); }

    return new Promise((resolve, reject) => {
        const fileInput = target(inputId);
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (event) {
                try {
                    resolve(JSON.parse(event.target.result));
                } catch (e) {
                    reject(new ReferenceError(`Invalid JSON file was selected in #${inputId}: ${e}`));
                }
            };
            reader.readAsText(file);
        } else {
            reject(new ReferenceError(`No file was selected in #${inputId}.`));
        }
    });
}