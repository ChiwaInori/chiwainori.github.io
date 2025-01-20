// CHIWA FUNCTIONS

/*
    Chiwa Functions is a custom JavaScript library used in ChiwaInori.top for better coding.

    Most of the functions included are original created by ChiwaInori.top owner Chiwa Inori.
    Most of them required other Chiwa Functions to work. Some functions can be also used in Node.js environment.

    Originally called Inori Functions, its name had been changed along with a major update (2025.1.17) related to HTML Elements.

    Index: (The "p" below means "prototype")

    Chiwa Basic (1): chiwa
    Global Usage (16):
        Parameter Judgement (2): _type, _range
        Commands (3): sleep, overload, nonEnum
        Website (3): host, seizure, copyright
        URL Param (6): urlParam { setItem, getItem, getAll, removeItem, generate, clear }
        Console Log (2): log, warn
    JS Commands (14):
        Common (4): chance, Object.p.isolate, Array.p.remove, String.p.getCountOf
        Numeral (10): 
            Get Numbers (3): rand, seed, String.p.getNum
            Modify Numbers (7): Number.p.keep, Number.p.range, Number.p.percentage, Number.p.transit, Number.p.toRange, String.p.transBase, Number.p.toBase / BigInt.p.toBase
    HTML Elements (9):
        ChiwaSet (6): ChiwaSet { (accessible attributes), hide, unhide, transColor, fadeOut, fadeIn }, cws
        Accessibility (3): query, applyAll, fadeChange
    Save & Load (3): save, load, loadJSON
*/

/* eslint no-shadow: "off" */

// CHIWA BASIC

/**
 * Check if Chiwa Functions is available.
 * @example chiwa() // If Chiwa Functions is available, get a log in console.
 */
function chiwa() {
    log(`Chiwa Functions is available in current session.`);
    if (typeof document == "undefined") { warn(`You are running Chiwa Functions in Node.js environment. Some functions are unavailable.`); }
}

// GLOBAL USAGE

// GLOBAL USAGE / PARAMETER JUDGEMENT

/**
 * Judge a parameter is in given type of not. If not, throw a TypeError.
 * @param {any} param - The parameter needed to be judged
 * @param {string} type - The given type (also accepts "array"; use "number | boolean" to accept multiple types)
 * @example _type("1", "number") // Throw a TypeError
*/
function _type(param, type) {
    const isCircular = (typeof param == "object" || typeof type == "object") && (obj => { try { JSON.stringify(obj); return false; } catch (e) { return e.message.match(/(?<=')(.*)(?=' closes the circle)/g)[0]; } });

    if (typeof type != "string") { throw new TypeError(`STRING required; received target type is ${typeof param == "bigint" ? `${param}n` : isCircular(type) ? `a circular OBJECT (${isCircular(type)}↺)` : JSON.stringify(type)}`); }
    
    type = type.toLowerCase();
    if (type.includes("any")) { return; }
    if (type.includes("array") && Array.isArray(param)) { return; }
    
    if (!type.includes(typeof param)) {
        throw new TypeError(`${type.toUpperCase()} required; received ${typeof param == "bigint" ? `${param}n` : isCircular(param) ? `a circular OBJECT (${isCircular(param)}↺)` : JSON.stringify(param)}`);
    }
}

// When a number is need to be judged with a range, _type() can be omitted. Its type will be judged in _range()'s _type().

/**
 * Judge a number is in given range or not. If not, throw a RangeError.
 * @param {number} number - The number needed to be judged
 * @param {string} range - The given range ("%1=0" means INTEGER; others like JS expressions (">= 7", "< 1", ...); combination allowed (">=1 | <= 2"))
 * @example _range(0, ">= 1") // Throw a RangeError
 */
function _range(number, range) {
    _type(number, "number | bigint");
    _type(range, "string");

    const requirements = range.split(" | ");

    requirements.forEach(req => {
        if (req == "%1=0") {
            if (typeof number == "number" && number % 1 != 0) {
                throw new RangeError(`%1=0 required; received ${number}`);
            }
            if (typeof number == "bigint" && number % 1n != 0n) {
                throw new RangeError(`%1=0 required; received ${number}`);
            }
        }
        
        if (req.includes("== ") && number != req.split(" ")[1]) { throw new RangeError(`==${req.split(" ")[1]} required; received ${number}`); }
        if (req.includes("!= ") && number == req.split(" ")[1]) { throw new RangeError(`!=${req.split(" ")[1]} required; received ${number}`); }
        if (req.includes(">= ") && number < req.split(" ")[1]) { throw new RangeError(`>=${req.split(" ")[1]} required; received ${number}`); }
        if (req.includes("> ") && number <= req.split(" ")[1]) { throw new RangeError(`>${req.split(" ")[1]} required; received ${number}`); }
        if (req.includes("<= ") && number > req.split(" ")[1]) { throw new RangeError(`<=${req.split(" ")[1]} required; received ${number}`); }
        if (req.includes("< ") && number >= req.split(" ")[1]) { throw new RangeError(`<${req.split(" ")[1]} required; received ${number}`); }
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

/**
 * Add a non-enumerable property to a object
 * @param {string} key - The key of the property
 * @param {any} value - The value of the property
 * @example obj.nonEnum("func", () => {}) // Add a non-enumerable function to obj
 */
Object.defineProperty(Object.prototype, "nonEnum", {
    value: function (key, value) {
        _type(key, "string");

        Object.defineProperty(this, key, { value, enumerable: false });
    },
    enumerable: false
});

// GLOBAL USAGE / WEBSITE

/**
 * Return a string of current page's host with protocol.
 * @returns {string} The host with protocol of current page
 * @example host() // "https://chiwainori.top"
 */
function host() {
    return window.location.href.split("/").slice(0, 3).join("/");
}

/**
 * Return a string of current page's site directory.
 * @returns {string} The site directory with "_" of current page
 * @example siteId() // "mc_opc_xts" if in https://chiwainori.top/mc/opc/xts/
 */
function siteId() {
    return window.location.href.split("/").slice(3).join("_").replaceAll(/html$/g, "").slice(0, -1);
}

/* Auto Navigation Bar (Unconfirmed)
function navigate() {
    const dict = {
        mc: "Minecraft",
        opc: "Old Players Club"
    };

    const urlSplit = window.location.href.split("/").slice(3, -1);
    if (!urlSplit[0] || !cws(".navigation").el) { return; }

    let string = cws(".title h1").el.innerHTML;

    for (let i = urlSplit.length - 1; i >= 0; i--) {
        string = `${i == 0 ? "" : " &gt; "}${i == urlSplit.length - 1 ? "" : `<a href="${"../".repeat(urlSplit.length - i - 1)}">${dict[urlSplit[i]] || dict[`_${urlSplit[i]}`] || urlSplit[i]}</a>`}${string}`;
    }
    string = `<a href="${host()}">ChiwaInori.top</a> &gt; ${string}`;

    cws(".navigation h6").el.innerHTML = string;
}
window.addEventListener("load", navigate);
*/

/**
 * Pop up a seizure warning in page.
 * @param {any} cnText - The custom text for Chinese
 * @param {any} enText - The custom text for English
 * @example seizure("本页面包含闪烁内容。", "This page includes flashing content.") // Create a seizure warning in specified text.
 */
async function seizure(cnText = "本页面包含可能会引起<strong>光敏性癫痫</strong>的内容。", enText = "This page include content that might cause <strong>photosensitive epilepsy.</strong>", jpText = "このページには、<strong>光感性てんかん</strong>を引き起こす可能性のある内容が含まれてるかも！") {
    const visited = localStorage.getItem(`${siteId()}_seizure`);
    function preventScroll(event) {
        event.preventDefault();
    }

    if (cnText[0] == "_") {
        applyAll(".SEIZURE", el => cws(el).el.close());
        if (cnText != "_close") {
            cws(`#${cnText.slice(3).toLowerCase()}Seizure`).el.showModal();
            if (!visited) { localStorage.setItem(`${siteId()}_seizure`, "1"); }
        } else {
            document.body.style.overflow = "";
            window.removeEventListener("scroll", preventScroll);
            cws(".mainBody").style.filter = "brightness(1)";
        }
        return;
    }

    cws("body").html += 
        `<dialog id="cnSeizure" class="SEIZURE">
            <h3 style="color: var(--red);">! 光敏性癫痫警告 !</h3>
            <p>${cnText}</p>
            <p>极小部分人可能会在本页面上看到特定视觉图像（包括闪烁效果或图案）时<strong>出现癫痫症状</strong>。</p>
            <p>如果你的家人或任何家庭成员曾出现过类似症状，请在本页面进行操作前咨询你的医生。</p>
            <p>如果你出现<strong>头晕目眩、视力模糊、眼睛或面部抽搐、四肢抽搐、迷失方向感、精神错乱或短暂的意识丧失</strong>等症状，请<strong>立即停止浏览本页面并咨询医生</strong>。</p>
            <p style="text-align: right;"><strong>中文 | <span class="LNK" onclick="seizure('_toEN')">EN</span> | <span class="LNK" onclick="seizure('_toJP')">日本語</span></strong></p>
            <p style="text-align: right;"><strong><span class="LNK" onclick="seizure('_close')">[${visited ? "2s 后关闭" : "继续"}]</span></strong></p>
        </dialog>
        <dialog id="enSeizure" class="SEIZURE">
            <h3 style="color: var(--red);">! PHOTOSENSITIVE EPILEPSY WARNING !</h3>
            <p>${enText}</p>
            <p>A very small number of people may <strong>experience epilepsy symptoms</strong> when they see specific visual images (including flickering effects or patterns) on this page.</p>
            <p>If your family or any family member has experienced similar symptoms, please consult your doctor before proceeding with this page.</p>
            <p>If you experience symptoms such as <strong>dizziness, blurred vision, eye or facial twitching, limb twitching, disorientation, mental confusion, or brief loss of consciousness</strong>, please <strong>stop browsing this page IMMEDIATELY and consult a doctor</strong>.</p>
            <p style="text-align: right;"><strong><span class="LNK" onclick="seizure('_toCN')">中文</span> | EN | <span class="LNK" onclick="seizure('_toJP')">日本語</span></strong></p>
            <p style="text-align: right;"><strong><span class="LNK" onclick="seizure('_close')">[${visited ? "Close in 2s" : "CONTINUE"}]</span></strong></p>
        </dialog>
        <dialog id="jpSeizure" class="SEIZURE">
            <h3 style="color: var(--red);">! 光感性てんかん注意 !</h3>
            <p>${jpText}</p>
            <p>ほんの一部の人が、特定のビジュアル（例えばピカピカした光や模様）を見たときに、<strong>てんかん症状が出ちゃう</strong>ことがあるんだ…。</p>
            <p>もし家族や身近な人に、似た症状が出たことがある人がいたら、このページを操作する前にお医者さんに相談してね！</p>
            <p>それから、自分で<strong>見ていてめまい、視界がぼやける、目や顔がピクピクする、手足がけいれんする、方向感覚がなくなる、混乱しちゃう、意識がなくなっちゃう…</strong>なんてことがあったら、<strong>すぐに閲覧をやめて、お医者さんに相談しようね</strong>！</p>
            <p>安全第一だよ、おにいちゃん (おねえちゃん)！<strong>(´；ω；\`)</strong></p>
            <p style="text-align: right;"><strong><span class="LNK" onclick="seizure('_toCN')">中文</span> | <span class="LNK" onclick="seizure('_toEN')">EN</span> | 日本語</strong></p>
            <p style="text-align: right;"><strong><span class="LNK" onclick="seizure('_close')">[${visited ? "2s 後で閉じる" : "進む"}]</span></strong></p>
        </dialog>`;
    
    window.addEventListener("scroll", preventScroll, { passive: false });
    cws("body").style.overflow = "hidden";
    cws(".mainBody").style.filter = "brightness(0.7)";

    seizure("_toCN");

    if (visited) {
        await sleep(2000);
        seizure("_close");
    }
}

/**
 * Create a copyright text in #copyright.
 * @param {number} startYear - (%1=0 | <= new Date().getFullYear()) The year that copyright starts
 * @param {any} signature - Who owns the copyright
 * @example copyright(2021, "Anonymous") // Create a copyright owned by Anonymous, starting from 2021
 */
function copyright(startYear, signature = "<ruby>千和<rt>ちわ</rt></ruby> いのり") {
    _range(startYear, "%1=0");
    if (!cws("#copyright").el) { throw new ReferenceError("Cannot set a copyright without #copyright element"); }

    const thisYear = new Date().getFullYear();
    _range(startYear, `%1=0 | <= ${thisYear}`);

    cws("#copyright").html = `Copyright © ${startYear}${startYear == thisYear ? "" : `-${thisYear}`} ${signature}. All Rights Reserved.`;
}

// GLOBAL USAGE / URL PARAM

const urlParam = new function urlParam() {
    /**
     * Set the param to URL (.../...?key1=value1&key2=value2).
     * @param {string} name - The key of param
     * @param {any} value - The value being set
     * @example urlParam.setItem("result", "abcdef") // Update URL bar to .../...?result=abcdef
     */
    this.nonEnum("setItem", (key, value = null) => {
        _type(key, "string");

        history.replaceState(null, "", `${window.location.href.split("/").slice(3).join("/")}${window.location.href.match(/\?/g) ? "&" : "?"}${key}=${value}`);
    });

    /**
     * Get the param from URL (.../...?key1=value1&key2=value2).
     * @param {string} key - The param key to get from URL
     * @returns {string | null} The value of the param
     * @example urlParam.getItem("userID") // Return the value of ?userID=...
     */
    this.nonEnum("getItem", key => {
        _type(key, "string");

        return new URLSearchParams(window.location.search).get(key);
    });

    /**
     * Get all param from URL (.../...?key1=value1&key2=value2).
     * @returns {object} A object with all params
     * @example urlParam.getAll() // Return a object with all params
     */
    this.nonEnum("getAll", () => {
        const obj = {};

        if (window.location.href.includes("?")) {
            const paramList = window.location.href.split("?")[1].split("&");

            for (const keyValue of paramList) {
                obj[keyValue.split("=")[0]] = keyValue.split("=")[1];
            }
        }

        return obj;
    });

    /**
     * Remove a param from URL (.../...?key1=value1&key2=value2).
     * @param {string} key - The param key to remove from URL
     * @example urlParam.removeItem("result") // Update URL bar without "result" param
     */
    this.nonEnum("removeItem", key => {
        _type(key, "string");

        const searchParams = new URLSearchParams(window.location.search);
        searchParams.delete(key);

        history.replaceState(null, "", `${window.location.href.split("/").slice(3).join("/").split("?")[0]}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`);
    });

    /**
     * Generate a string of current URL and values in obj.
     * @param {object} obj  - The params to be added to URL
     * @returns {string} A string with current URL added with values in obj
     * @example urlParam.generate({ result: "ok" }) // Return "https://chiwainori.top/?result=ok"
     */
    this.nonEnum("generate", obj => {
        let url = window.location.href;

        for (const keyValue in obj) {
            url += `${url.includes("?") ? "&" : "?"}${keyValue}=${obj[keyValue]}`;
        }

        return url;
    });

    /**
     * Clear all param from URL.
     * @example urlParam.clear() // All characters after "?" in URL bar will be removed
     */
    this.nonEnum("clear", () => {
        history.replaceState(null, "", `${window.location.href.split("/").slice(3).join("/").split("?")[0]}`);
    });
};

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
Object.prototype.nonEnum("isolate", function () {
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
});

/**
 * Return an array with the nth specified target removed.
 * @param {any} target - The target to remove
 * @param {number} nth - (%1=0 | >= 1) The nth specified target to remove
 * @returns {any[]} The array without (one of) the target(s)
 * @example [1, 2, 3, 4, 3].remove(3, 2) // [1, 2, 3, 4]
 */
Array.prototype.nonEnum("remove", function (target, nth = 1) {
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
});

/**
 * Get the count of specified string in a string
 * @param {any} target - The target to count
 * @returns {number} How many targets are in the string
 * @example "Hello, World".getCountOf("l") // 3
 */
String.prototype.nonEnum("getCountOf", function (target) {
    const splitString = this.split(target);

    return splitString.length - 1;
});

// JS COMMANDS / NUMERAL
/* Hint: In Chiwa Functions, these functions aren't affected by precision loss of JavaScript.
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
 * @param {boolean} doNotNumber - Should the function return string array instead of number array (to avoid precision loss)
 * @returns {number[] | string[] | null} The number array from specified string
 * @example "589brg13d7.4gh,-2.6eru".getNum()[3] // 7.4 (It'll collect [589, 13, 7.4, -2.6])
 */
String.prototype.nonEnum("getNum", function (doNotNumber = false) {
    _type(doNotNumber, "boolean");

    const numbersList = this.match(/-?[0-9]+(\.[0-9]+)?/g);

    return numbersList && (doNotNumber ? numbersList : numbersList.map(Number));
});

// JS COMMANDS / NUMERAL / MODIFY NUMBERS

/**
 * Keep a specified decimal place(s) to a number.
 * @param {number} digit - (%1=0) How many decimal places to keep (0 to parseInt, negative to keep at the left of decimal point)
 * @returns {number} The number kept specified decimal place(s)
 * @example (123.456).keep(2) // 123.46
 */
Number.prototype.nonEnum("keep", function (digit = 0) {
    _range(digit, "%1=0");
    
    if (!Math.abs(this).range(1e-6, 1e21)) {
        const [mantissa, exponent] = String(this).getNum();

        return Number(`${mantissa.keep(digit)}e${exponent}`);
    }

    return Math.round(this * 10 ** digit) / 10 ** digit;
});

/**
 * Check the number is in given interval or not
 * @param {number} min - (<= max) The minimum value of interval
 * @param {number} min - (>= min) The maximum value of interval
 * @param {boolean} minType - The left border of interval (true: closed; false: open)
 * @param {boolean} minType - The right border of interval (true: closed; false: open)
 * @returns {boolean} Is the number in the given interval
 * @example (5).range(0, 5, true, false) // false (not in [0, 5) range)
 */
Number.prototype.nonEnum("range", function (min, max, minType = true, maxType = true) {
    _range(min, `<= ${max}`);
    _range(max, `>= ${min}`);
    _type(minType, "boolean");
    _type(maxType, "boolean");

    return (minType ? this >= min : this > min) && (maxType ? this <= max : this < max);
});

/**
 * Scale a number to a percentage in given range. (The reverse function of Number.transit)
 * @param {number} from - The number where scales from
 * @param {number} to - The number where scales to
 * @param {boolean} disableRange - Should the function don't keep the percentage in [0, 1]
 * @returns {number} A percentage in range and specified number
 * @example (6).percentage(0, 10) // 0.6 (6 is the 60% in [0, 10])
 */
Number.prototype.nonEnum("percentage", function (from, to, disableRange = false) {
    _type(from, "number");
    _type(to, "number");
    _type(disableRange, "boolean");

    const range = to - from;

    return disableRange ? (this - from) / range : ((this - from) / range).toRange(0, 1);
});

/**
 * Scale a percentage to given range. (The reverse function of Number.percentage)
 * @param {number} from - The number where scales from
 * @param {number} to - The number where scales to
 * @param {boolean} disableRange - Should the function don't keep the percentage in [0, 1]
 * @returns {number} A number in range and specified percentage
 * @example (0.6).transit(0, 10) // 6 (The 60% of  [0, 10] is 6)
 */
Number.prototype.nonEnum("transit", function (from, to, disableRange = false) {
    _type(from, "number");
    _type(to, "number");
    _type(disableRange, "boolean");

    const range = to - from;

    return disableRange ? this * range + from : this.toRange(0, 1) * range + from;
});

/**
 * Return a number within given range.
 * If the number is out of range, a warning message can be provided.
 * @param {number} minBoundary - (<= maxBoundary) The boundary of minimum
 * @param {number} maxBoundary - (>= minBoundary) The boundary of maximum
 * @param {boolean} warnIfWorked - Should the function warn in console if itself worked
 * @returns {number} The number been parsed into range
 * @example (120).toRange(0, 100) // 100 (120 is out of [0, 100], so output 100)
 */
Number.prototype.nonEnum("toRange", function (minBoundary, maxBoundary, warnIfWorked = false) {
    _range(minBoundary, `<= ${maxBoundary}`);
    _range(maxBoundary, `>= ${minBoundary}`);
    _type(warnIfWorked, "boolean");
    
    if (warnIfWorked && (this < minBoundary || this > maxBoundary)) { warn(`Given number isn't between ${minBoundary} and ${maxBoundary} (received ${this}). Parsing it into given range.`); }
    
    return Math.min(Math.max(this, minBoundary), maxBoundary);
});

/**
 * Parse a non-negative integer string from a base into another base. (BigInt used: no precision loss)
 * @param {number} fromBase - (%1=0 | >= 2 | <= 36) The original base
 * @param {number} toBase - (%1=0 | >= 2 | <= 36) The target base
 * @returns {string} The number string parsed into another base
 * @example "CHIWACHIRASE".transBase(36, 10) // "1643534305147807070"
*/
String.prototype.nonEnum("transBase", function (fromBase, toBase) {
    if (toBase == undefined) { throw new TypeError("When using String.p.transBase, the ORIGINAL base MUST be declared."); }
    if (this.match(/\.[0-9]/g)) { throw new RangeError(`%1=0 required; received ${this}`); }
    if (this.match(/-[^0]/g)) { throw new RangeError(`>= 0 required; received ${this}`); }
    _range(fromBase, "%1=0 | >= 2 | <= 36");
    _range(toBase, "%1=0 | >= 2 | <= 36");
    
    const numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    if (fromBase == 10) {
        const firstAlphabet = this.match(/[A-Za-z]/g)?.[0];
        if (firstAlphabet) { throw new RangeError(`Received number ${firstAlphabet} (${numberList.indexOf(firstAlphabet)}) when parsing from base ${fromBase}`); }

        const modList = [];
        let nowRemaining = BigInt(this.toUpperCase().replaceAll(".", ""));
        
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
    }
    
    if (toBase == 10) {
        const digits = this.toUpperCase().replaceAll(".", "").split("");
        const equalDigits = [];
        const digitWeight = [];
        
        digits.forEach(digit => {
            const equalValue = BigInt(numberList.indexOf(digit));
            try { _range(equalValue, `< ${fromBase}`); } catch { throw new RangeError(`Received number ${digit}${numberList.indexOf(digit) >= 10 ? ` (${equalValue})` : ""} when parsing from base ${fromBase}`); }
            
            equalDigits.push(equalValue);
        });
        for (let i = 0n; i < this.length; i++) {
            digitWeight.unshift(BigInt(fromBase) ** i);
        }
        
        let result = 0n;
        for (let i = 0; i < this.length; i++) {
            result += equalDigits[i] * digitWeight[i];
        }
        
        return String(result);
    }

    return this.valueOf().transBase(fromBase, 10).transBase(10, toBase);
});

/**
 * Parse a non-negative decimal integer into another base. (To prevent precision loss for large number, input BigInt)
 * This is actually a String.p.transBase, but simplified for Number and BigInt.
 * @param {number} int - (%1=0 | >= 2 | <= 36) The target base
 * @param {undefined} _ - The param position to prevent mistyping
 * @returns {string} The number string parsed into another base
 * @example (601).toBase(16) // "259" (turned 601 into 0x259)
 */
Number.prototype.nonEnum("toBase", function (base, _) {
    if (_ != undefined) { throw new TypeError("When using Number.p.toBase, the ORIGINAL base MUSTN'T be declared (it can only be decimal)."); }
    _range(this.valueOf(), "%1=0 | >= 0");
    _range(base, "%1=0 | >= 2 | <= 36");
    
    if (this > Number.MAX_SAFE_INTEGER || this < Number.MIN_SAFE_INTEGER) { warn(`${this} reaches the safe integer, which may cause precision loss. If available, use BigInt or String instead.`); }
    
    return String(this).transBase(10, base);
});
BigInt.prototype.nonEnum("toBase", function (base, _) {
    if (_ != undefined) { throw new TypeError("When using BigInt.p.toBase, the ORIGINAL base MUSTN'T be declared (it can only be decimal)."); }
    _range(this.valueOf(), "%1=0 | >= 0");
    _range(base, "%1=0 | >= 2 | <= 36");
    
    return String(this).transBase(10, base);
});

// HTML ELEMENTS

// HTML ELEMENTS / CHIWASET

// ChiwaSet: A new class with custom information of a single element. Convenient for some specified values / functions.
class ChiwaSet {
    constructor(element, index = 0) {
        _type(element, "string | object");
        _range(index, "%1=0 | >= 0");
        
        this.el = element instanceof HTMLElement ? element : document.querySelectorAll(element)[index] ?? null;
    }

    // Get / Set Editable Attributes
    get html() { return this.el.innerHTML; }
    set html(value) { this.el.innerHTML = value; }

    get text() { return this.el.innerText; }
    set text(value) { this.el.innerText = value; }

    get style() { return this.el.style; }
    set style(value) { this.el.style = value; }

    get color() { return this.style.color; }
    set color(value) { this.style.color = value; }

    get value() { return this.el.value ?? null; }
    set value(value) { this.el.value = value; }

    get checked() { return this.el.checked ?? null; }
    set checked(value) { this.el.checked = value; }

    get disabled() { return this.el.disabled ?? null; }
    set disabled(value) { this.el.disabled = value; }
    
    // Get Uneditable Attributes
    get hidden() { return this.style.display == "none" || this.style.opacity == "0" || this.el.hidden && this.style.display == ""; }
    
    // Set Editable Attributes

    // Element Functions
    // These are functions to modify element in ChiwaSet, while they were originally independent function in Inori Functions

    /**
     * Hide the element.
     * @example { ChiwaSet }.hide() // Hide the element
     */
    hide() {
        this.style.display = "none";
    }

    /**
     * Show the element with expected display method.
     * @param {string} display - The type of display
     * @example { ChiwaSet }.unhide("inline") // Show the element as "inline"
     */
    unhide(display = "block") {
        _type(display, "string");

        this.style.display = display;
    }

    /**
     * Hide or unhide an element by condition.
     * @param {any} condition - The condition to hide or unhide the element (if true, unhide)
     * @param {string} display - The type of display if unhide
     * @example { ChiwaSet }.toggleDisplay(judgment) // If judgment is true, unhide; else, hide
     */
    toggleDisplay(condition, display = "block") {
        _type(display, "string");

        if (condition) {
            this.unhide(display);
        } else {
            this.hide();
        }
    }

    /**
     * Turn an element's current color to another in transition.
     * @param {string} color - The target color of transition
     * @param {number} time -（>= 0) The time length of transition in milliseconds
     * @example { ChiwaSet }.transColor("var(--green)") // Turn the color to green in transition.
     */
    async transColor(color, time = 100) {
        _type(color, "string");
        _range(time, ">= 0");

        if (time == 0) {
            this.color = color;
            return;
        }

        let id = 1;
        while (cws(`style#temp${id}`).el) {
            log(id);
            id++;
        }
        const styleElement = document.createElement("style");
        styleElement.textContent = `.tempTransColor${id} { transition: color ${time / 1000}s var(--transit); }`;
        document.head.appendChild(styleElement);

        this.el.classList.add(`tempTransColor${id}`);
        this.color = color;

        await sleep(time / 1000);

        this.el.classList.remove(`tempTransColor${id}`);
        document.head.removeChild(styleElement);
    }

    /**
     * Fade out an element.
     * @param {number} time - (>= 0) The time length of fade out
     * @param {boolean} doNotHide - Do not hide the element after fading out (keep a blank space for the element)
     * @example { ChiwaSet }.fadeOut(undefined, 200) // Fade out in 0.2s.
     */
    async fadeOut(doNotHide = false, time = 100) {
        _type(doNotHide, "boolean");
        _range(time, ">= 0");

        if (time == 0) {
            if (!doNotHide) {
                this.hide();
            }
            this.style.opacity = 0;
        }

        let nowOpacity = this.style.opacity != "" ? Number(this.style.opacity) : 1;

        while (nowOpacity > 0) {
            nowOpacity -= 0.05;
            this.style.opacity = nowOpacity;
            await sleep(time / 20);
        }
        if (nowOpacity <= 0) {
            if (!doNotHide) {
                this.hide();
            }
            this.style.opacity = 0;
        }
    }

    /**
     * Fade in an element.
     * @param {string} display - The type of display
     * @param {number} time - (>= 0) The time length of fade in
     * @example { ChiwaSet }.fadeIn("block", 200) // Fade in in 0.2s.
     */
    async fadeIn(display = "block", time = 100) {
        _type(display, "string");
        _range(time, ">= 0");

        if (time == 0) {
            this.unhide(display);
            return;
        }

        let nowOpacity = this.style.opacity != "" ? Number(this.style.opacity) : 0;

        if (this.style.display == "none" || this.el.hidden) {
            this.unhide(display);
            this.style.opacity = 0;
        }

        while (nowOpacity < 1) {
            nowOpacity += 0.05;
            this.style.opacity = nowOpacity;
            await sleep(time / 20);
        }
    }
}

/**
 * Get a ChiwaSet of target element.
 * @param {string | object} element - The query string of element or an element
 * @param {number} index - (%1=0 | >= 0) The nth specified target to get
 * @returns {ChiwaSet} A ChiwaSet with common attributes.
 * @example cws("h1") // Get a ChiwaSet of the first h1 in page
 */
function cws(element, index = 0) {
    _type(element, "string | object");
    _range(index, "%1=0 | >= 0");

    return new ChiwaSet(element, index);
}

// HTML ELEMENTS / ACCESSIBILITY
// ChiwaSet can only be used for a single element. To apply changes to multiple elements, use accessibility functions below.

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

/**
 * Apply modifications to all queried element(s). It has same actions to query(element).forEach.
 * @param {string} element - The query input of target element
 * @param {function} callback - What should all queried elements do
 * @example applyAll("p", (el, i) => cws(el).text = `${i + 1}. ${cws(el).text}`) // Add a index number to all p
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

/**
 * Fade out an element and fade in another element.
 * @param {string} outElement - The id of target element to fade out
 * @param {string} inElement - The id of target element to fade in 
 * @param {string} display - The type of display
 * @param {number} time - (>= 0) The total time length of whole change session
 * @example fadeChange("title", "secondTitle", 500) // Fade out #title in 0.25s and fade in #secondTitle in 0.25s.
 */
async function fadeChange(outElement, inElement, display = "block", time = 200) {
    _type(outElement, "string");
    _type(inElement, "string");
    _range(time, ">= 0");

    if (time == 0) {
        cws(`#${outElement}`).hide();
        cws(`#${inElement}`).unhide(display);
        return;
    }

    cws(`#${outElement}`).fadeOut(undefined, time / 2);
    await sleep(time / 2 + 20);
    cws(`#${inElement}`).fadeIn(display, time / 2);
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

    cws(`#${inputId}`).el.addEventListener("change", event => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (event) {
                cws(`#${element}`).el.textContent = event.target.result;
            };
            reader.readAsText(file);
        } else {
            cws(`#${element}`).el.textContent = "";
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
        const fileInput = cws(`#${inputId}`).el;
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