// INORI FUNCTIONS

/*
    Inori Function is a custom JavaScript library used in ChiwaInori.top for better coding.

    Most of the functions included are original created by ChiwaInori.top owner Chiwa Inori.
    Most of them required other Inori Functions to work. Some functions can be also used in Node.js environment.

    Index: (The "p" below means "prototype")

    Inori Basic (1): inori
    Global Usage (10):
        Parameter Judgement (2): _type, _range
        Commands (2): sleep, overload
        Website (2): seizure, copyright
        URL Params (2): getURLparam, setURLparam
        Console Log (2): log, warn
    JS Commands (11):
        Common (4): chance, Object.p.isolate, Array.p.remove, String.p.getCountOf
        Numeral (8): 
            Get Numbers (3): rand, seed, String.p.getNum
            Modify Numbers (7): Number.p.keep, Number.p.range, Number.p.percentage, Number.p.transit, Number.p.toRange, Number.p.toInt / BigInt.p.toInt, String.p.transInt
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
    if (typeof global != "undefined") { warn(`You are running Inori Functions in Node.js environment. Some functions are unavailable.`); }
}

// GLOBAL USAGE

// GLOBAL USAGE / PARAMETER JUDGEMENT

/**
 * Judge a parameter is in given type of not. If not, throw an error.
 * @param {any} param - The parameter needed to be judged
 * @param {string} type - The given type (also accepts "array"; type freely is allowed but not suggested (like "sTRinG, bOOLEANnumber"))
 * @example _type("1", "number") // Throw a TypeError
*/
function _type(param, type) {
    if (typeof type != "string") { throw new TypeError(`STRING required; received ${typeof param == "bigint" ? `${param}n` : JSON.stringify(type)}`); }
    
    type = type.toLowerCase();
    if (type.includes("any")) { return; }
    if (type.includes("array") && Array.isArray(param)) { return; }
    
    if (!type.includes(typeof param)) {
        throw new TypeError(`${type.toUpperCase()} required; received ${typeof param == "bigint" ? `${param}n` : JSON.stringify(param)}`);
    }
}

// When a number is need to be judged with a range, _type() can be omitted. Its type will be judged in _range()'s _type().

/**
 * Judge a number is in given range or not. If not, throw an error.
 * @param {number} number - The number needed to be judged
 * @param {string} range - The given range ("%1=0" means INTEGER; others like JS expressions (">= 7", "< 1", ...); combination allowed (">=1 | <= 2"))
 * @example _range(0, ">= 1") // Throw a RangeError
 */
function _range(number, range) {
    _type(number, "number | bigint");
    _type(range, "string");

    const requirements = range.split(" | ");

    requirements.forEach(requirement => { 
        if (requirement == "%1=0") {
            if (typeof number == "number" && number % 1 != 0) {
                throw new RangeError(`%1=0 required; received ${number}`);
            }
            if (typeof number == "bigint" && number % 1n != 0n) {
                throw new RangeError(`%1=0 required; received ${number}`);
            }
            return;
        }
        
        if (requirement.includes("== ") && number != requirement.split(" ")[1]) { throw new RangeError(`==${requirement.split(" ")[1]} required; received ${number}`); }
        if (requirement.includes("!= ") && number == requirement.split(" ")[1]) { throw new RangeError(`!=${requirement.split(" ")[1]} required; received ${number}`); }
        if (requirement.includes(">= ") && number < requirement.split(" ")[1]) { throw new RangeError(`>=${requirement.split(" ")[1]} required; received ${number}`); }
        if (requirement.includes("> ") && number <= requirement.split(" ")[1]) { throw new RangeError(`>${requirement.split(" ")[1]} required; received ${number}`); }
        if (requirement.includes("<= ") && number > requirement.split(" ")[1]) { throw new RangeError(`<=${requirement.split(" ")[1]} required; received ${number}`); }
        if (requirement.includes("< ") && number >= requirement.split(" ")[1]) { throw new RangeError(`<${requirement.split(" ")[1]} required; received ${number}`); }
    });
}

// GLOBAL USAGE / COMMANDS

/**
 * Sleep a moment then execute following commands.
 * @param {number} time - (>= 0) Sleep time in milliseconds
 * @returns {Promise} A setTimeout promise
 * @example await sleep(1000) // Pause your commands for 1s (also: sleep(1000).then(() => { ... }))
 */
function sleep(time) {
    _range(time, ">= 0");
    if (time == 0) { return; }

    return new Promise(resolve => setTimeout(resolve, time));
}

/**
 * Overload CPU to temporarily stop code for test. (Not recommended unless doing stress test)
 * @param {number} time - (>= 0) Overload time in milliseconds
 * @example overload(1000) // Overload CPU for 1s (Most of codes will be paused)
 */
function overload(time) {
    _range(time, ">= 0");
    if (time == 0) { return; }

    const startTime = Date.now();
    const endTime = startTime + time;

    while (Date.now() < endTime) {
        for (let i = 0; i < 1e8; i++) {
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
    _range(startYear, "%1=0");
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
    _type(name, "string");

    return new URLSearchParams(window.location.search).get(name);
}

/**
 * Set the param to URL (.../...?param1=content1&param2=content2).
 * @param {string} name - The param name from URL
 * @param {any} value - The param value being set
 * @example setURLparam("result", "abcdef") // Redirect to .../...?result=abcdef
 */
function setURLparam(name, value = null) {
    _type(name, "string");

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
    console.log(...args);
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
    _type(percent, "number");

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
 * Return an array with the nth specified target removed.
 * @param {any} target - The target to remove
 * @param {number} nth - (%1=0 | >= 1) The nth specified target to remove
 * @returns {any[]} The array without (one of) the target(s)
 * @example [1, 2, 3, 4, 3].remove(3, 2) // [1, 2, 3, 4]
 */
Array.prototype.remove = function (target, nth = 1) {
    _range(nth, "%1=0 | >= 1");
    
    let n = 0;
    let index;
    for (let i = 0; i < this.length; i++) {
        if (this[i] == target) {
            n++;
        }
        if (n == nth) {
            index = i;
            break;
        }
        if (i == this.length - 1 && n < nth) {
            return this.isolate();
        }
    }

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
/* Hint: These functions aren't affected by precision loss of JavaScript.
    seed
    BigInt.p.toBase
    String.p.transBase
*/

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
    _range(min, `<= ${max}`);
    _range(max, `>= ${min}`);
    _type(keepFloat, "boolean");

    let range;

    if (keepFloat) {
        range = max - min;
        return Math.random() * range + min;
    }

    range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

/**
 * Return a seeded random number.
 * @param {any} value - The seed of random number
 * @param {number[]} key - The key to generate a random number
 * @returns {number} A seeded random number ranged in [0, 1)
 * @example seed("Hello", [2, 3, 5, 7]) // 0.19005963127801806 (A seeded random number)
 */
function seed(value, key = [18.9321, 45.8102, 33.9644, 13.5316, 26.0933, 36.2477, 10.3852, 34.6451, 35.6494, 15.1388, 13.6445, 21.7268, 41.8944, 12.3794, 15.0947, 26.2843]) {
    _type(key, "array");
    if (key.length == 0) { throw new TypeError(`key must be NOT EMPTY`); }
    key.forEach(element => { _type(element, "number"); });

    const seedValue = JSON.stringify(value);

    let number = 0;
    for (let i = 0; i < seedValue.length; i++) {
        number += seedValue.charCodeAt(i) * key[i % key.length];
        if (number > Number.MAX_SAFE_INTEGER / Math.E || number < Number.MIN_SAFE_INTEGER / Math.E) { number = key[0]; }
    }

    return Math.abs(number * Math.E % 1);
}

/**
 * Return a selected number in a string.
 * @param {number} order - (%1=0 | >= 1) Which part of number you want (start from 1)
 * @returns {number | null} The number from specified string in specified order
 * @example "589brg13d7.4gh,-2.6eru".getNum(3) // 7.4 (It'll collect ["589", "13", "7.4", "-2.6"])
 */
String.prototype.getNum = function (order = 1) {
    _range(order, "%1=0 | >= 1");

    const numbersList = this.match(/-?[0-9]+(\.[0-9]+)?/g);

    return numbersList ? Number(numbersList[order - 1]) : null;
};

// JS COMMANDS / NUMERAL / MODIFY NUMBERS

/**
 * Keep a specified decimal place(s) to a number.
 * @param {number} digit - (%1=0) How many decimal places to keep (0 to parseInt, negative to keep at the left of decimal point)
 * @returns {number} The number kept specified decimal place(s)
 * @example (123.456).keep(2) // 123.46
 */
Number.prototype.keep = function (digit = 0) {
    _range(digit, "%1=0");

    return Math.round(this * 10 ** digit) / 10 ** digit;
};

/**
 * Check the number is in given interval or not
 * @param {number} min - (<= max) The minimum value of interval
 * @param {number} min - (>= min) The maximum value of interval
 * @param {boolean} minType - The left border of interval (true: closed; false: open)
 * @param {boolean} minType - The right border of interval (true: closed; false: open)
 * @returns {boolean} Is the number in the given interval
 * @example (5).range[0, 5, true, false) // false (not in [0, 5) range)
 */
Number.prototype.range = function (min, max, minType = true, maxType = true) {
    _range(min, `<= ${max}`);
    _range(max, `>= ${min}`);
    _type(minType, "boolean");
    _type(maxType, "boolean");

    return (minType ? this >= min : this > min) && (maxType ? this <= max : this < max);
};

/**
 * Scale a number to a percentage in given range. (The reverse function of Number.transit)
 * @param {number} from - The number where scales from
 * @param {number} to - The number where scales to
 * @param {boolean} disableRange - Should the function don't keep the percentage in [0, 1]
 * @returns {number} A percentage in range and specified number
 * @example (6).percentage(0, 10) // 0.6 (6 is the 60% in [0, 10])
 */
Number.prototype.percentage = function (from, to, disableRange = false) {
    _type(from, "number");
    _type(to, "number");
    _type(disableRange, "boolean");

    const range = to - from;

    return disableRange ? (this - from) / range : ((this - from) / range).toRange(0, 1);
};

/**
 * Scale a percentage to given range. (The reverse function of Number.percentage)
 * @param {number} from - The number where scales from
 * @param {number} to - The number where scales to
 * @param {boolean} disableRange - Should the function don't keep the percentage in [0, 1]
 * @returns {number} A number in range and specified percentage
 * @example (0.6).transit(0, 10) // 6 (The 60% of  [0, 10] is 6)
 */
Number.prototype.transit = function (from, to, disableRange = false) {
    _type(from, "number");
    _type(to, "number");
    _type(disableRange, "boolean");

    const range = to - from;

    return disableRange ? this * range + from : this.toRange(0, 1) * range + from;
};

/**
 * Return a number within given range.
 * If the number is out of range, a warning message can be provided.
 * @param {number} minBoundary - (<= maxBoundary) The boundary of minimum
 * @param {number} maxBoundary - (>= minBoundary) The boundary of maximum
 * @param {boolean} warnIfWorked - Should the function warn in console if itself worked
 * @returns {number} The number been parsed into range
 * @example (120).toRange(0, 100) // 100 (120 is out of [0, 100], so output 100)
 */
Number.prototype.toRange = function (minBoundary, maxBoundary, warnIfWorked = false) {
    _range(minBoundary, `<= ${maxBoundary}`);
    _range(maxBoundary, `>= ${minBoundary}`);
    _type(warnIfWorked, "boolean");

    if (warnIfWorked && (this < minBoundary || this > maxBoundary)) { warn(`Given number isn't between ${minBoundary} and ${maxBoundary} (received ${this}). Parsing it into given range.`); }

    return Math.min(Math.max(this, minBoundary), maxBoundary);
};

/**
 * Parse a non-negative integer string from a base into another base. (BigInt used: no precision loss)
 * @param {number} fromBase - (%1=0 | >= 2 | <= 36) The original base
 * @param {number} toBase - (%1=0 | >= 2 | <= 36) The target base
 * @returns {string} The number string parsed into another base
 * @example "CHIWACHIRASE".transBase(36, 10) // "1643534305147807070"
*/
String.prototype.transBase = function (fromBase, toBase) {
    if (toBase == undefined) { throw new TypeError("When using String.p.transBase, the ORIGINAL base MUST be declared."); }
    if (this.match(/\.[0-9]/g)) { throw new RangeError(`%1=0 required; received ${this}`); }
    if (this.match(/-[^0]/g)) { throw new RangeError(`>= 0 required; received ${this}`); }
    _range(fromBase, "%1=0 | >= 2 | <= 36");
    _range(toBase, "%1=0 | >= 2 | <= 36");
    
    const numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    if (fromBase == 10) {
        const firstAlphabet = this.match(/[A-Za-z]/g) ? this.match(/[A-Za-z]/g)[0] : null;
        if (firstAlphabet) { throw new RangeError(`Received number ${firstAlphabet} (${numberList.indexOf(firstAlphabet)}) when parsing from base 10`); }

        const modList = [];
        let nowRemaining = BigInt(this.replaceAll(".", ""));
        
        while (nowRemaining != 0n) {
            modList.push(String(nowRemaining % BigInt(toBase)));
            nowRemaining /= BigInt(toBase);
        }
        if (!modList[0]) { modList.push(0); }
    
        modList.reverse();
        modList.forEach((number, index) => {
            modList[index] = numberList[number];
        });
    
        return modList.join("");
    } else if (toBase == 10) {
        const digits = this.replaceAll(".", "").split("");
        const equalDigits = [];
        const digitWeight = [];
        
        digits.forEach(digit => {
            const equalValue = BigInt(numberList.indexOf(digit));
            try { _range(equalValue, `< ${fromBase}`); } catch (e) { throw new RangeError(`Received number ${digit}${numberList.indexOf(digit) >= 10 ? ` (${equalValue})` : ""} when parsing from base ${fromBase}`); }
            
            equalDigits.push(equalValue);
        });
        for (let i = 0; i < this.length; i++) {
            digitWeight.unshift(BigInt(fromBase) ** BigInt(i));
        }
        
        let result = 0n;
        for (let i = 0; i < this.length; i++) {
            result += equalDigits[i] * digitWeight[i];
        }
        
        return String(result);
    }
    return this.valueOf().transBase(fromBase, 10).transBase(10, toBase);
};

/**
 * Parse a non-negative decimal integer into another base. (To prevent precision loss for large number, input BigInt)
 * This is actually a String.p.transBase, but simplified for Number and BigInt.
 * @param {number} int - (%1=0 | >= 2 | <= 36) The target base
 * @param {undefined} _ - The param position to prevent mistyping
 * @returns {string} The number string parsed into another base
 * @example (601).toBase(16) // "259" (turned 601 into 0x259)
 */
Number.prototype.toBase = function (base, _) {
    if (_ != undefined) { throw new TypeError("When using Number.p.toBase, the ORIGINAL base MUSTN'T be declared (it can only be decimal)."); }
    _range(this.valueOf(), "%1=0 | >= 0");
    _range(base, "%1=0 | >= 2 | <= 36");

    if (this > Number.MAX_SAFE_INTEGER || this < Number.MIN_SAFE_INTEGER) { warn(`${this} reaches the safe integer, which may cause precision loss. If available, use BigInt or String instead.`); }

    return String(this).transBase(10, base);
};
BigInt.prototype.toBase = function (base, _) {
    if (_ != undefined) { throw new TypeError("When using BigInt.p.toBase, the ORIGINAL base MUSTN'T be declared (it can only be decimal)."); }
    _range(this.valueOf(), "%1=0 | >= 0");
    _range(base, "%1=0 | >= 2 | <= 36");

    return String(this).transBase(10, base);
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
    _type(element, "string");

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
    _type(element, "string");

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
    _type(element, "string");
    
    return target(element).innerHTML;
}

/**
 * Copy the value of an input.
 * @param {string} element - The id of target input
 * @returns {string} The value of the element
 * @example copyValue("range") // Return the value of #range
*/
function copyValue(element) {
    _type(element, "string");
    
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
    _type(element, "string");
    
    target(element).innerHTML = content;
}

/**
 * Add something to an element's innerHTML.
 * @param {string} element - The id of target element
 * @param {any} content - The content to add to the element
 * @example addTo("p1", "Hello") // Add "Hello" to #p1
*/
function addTo(element, content) {
    _type(element, "string");
    
    target(element).innerHTML += content;
}

/**
 * Set a value of an input.
 * @param {string} element - The id of target input
 * @param {any} content - The value to be set
 * @example setValue("name", "David") // Set the value of #name to "David"
*/
function setValue(element, content) {
    _type(element, "string");
    
    target(element).value = content;
}

/**
 * Apply modifications to all queried element(s). It has same actions to query(element).forEach.
 * @param {string} element - The query input of target element
 * @param {function} callback - What should all queried elements do
 * @example applyAll("p", (element, index) => { element.innerHTML = `${index + 1}. ${element.innerHTML}`; }) // Add a index number to all p
 */
function applyAll(element, callback) {
    _type(element, "string");
    _type(callback, "function");

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
    _type(element, "string");
    _type(style, "string");
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
    _type(element, "string");
    _type(color, "string");
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
    _type(element, "string");
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
    _type(element, "string");
    _type(display, "string");
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
    _type(element, "string");

    return target(element).style.display == "none" || target(element).style.opacity === "0" || Boolean(query(`#${element}[hide]`)[0]) && target(element).style.display == "";
}

// HTML ELEMENTS / CSS MODIFICATIONS / TRANSITIONS

/**
 * Turn an element's current color to another in transition.
 * @param {string} element - The id of target element
 * @param {string} color - The target color of transition
 * @param {number} time -（>= 0) The time length of transition in milliseconds
 * @param {"id" | "class" | "query"} method - The method of getting elements. If "query" is used, type element like CSS (for example, "#target *")
 * @example transColor("title", "#00dd00") // Turn the color of title to green in transition.
 */
async function transColor(element, color, time = 100, method = "id") {
    _type(element, "string");
    _type(color, "string");
    _range(time, ">= 0");
    if (method != "id" && method != "class" && method != "query") { throw new TypeError(`method must be "id" or "class" or "query"`); }

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
 * @param {number} time - (>= 0) The time length of fade out
 * @example fadeOut("title", false, 200) // Fade out #title in 0.2s.
 */
async function fadeOut(element, doNotHide = false, time = 100) {
    _type(element, "string");
    _type(doNotHide, "boolean");
    _range(time, ">= 0");

    if (time == 0) {
        hide(element);
        return;
    }

    let nowOpacity;

    if (target(element).style.opacity != "") {
        nowOpacity = Number(target(element).style.opacity);
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
 * @param {number} time - (>= 0) The time length of fade in
 * @example fadeIn("title", 200) // Fade in #title in 0.2s.
 */
async function fadeIn(element, time = 100) {
    _type(element, "string");
    _range(time, ">= 0");

    if (time == 0) {
        unhide(element);
        return;
    }

    let nowOpacity;

    if (target(element).style.display == "none" || query(`${element}[hide]`)) {
        unhide(element); target(element).style.opacity = 0;
    }
    
    if (target(element).style.opacity != "") {
        nowOpacity = Number(target(element).style.opacity);
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
 * @param {number} time - (>= 0) The total time length of whole change session
 * @example fadeChange("title", "secondTitle", 500) // Fade out #title in 0.25s and fade in #secondTitle in 0.25s.
 */
async function fadeChange(outElement, inElement, time = 200) {
    _type(outElement, "string");
    _type(inElement, "string");
    _range(time, ">= 0");

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
    _type(fileName, "string");

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
    _type(inputId, "string");
    _type(element, "string");

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
    _type(inputId, "string");

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