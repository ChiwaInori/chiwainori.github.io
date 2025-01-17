// This file is to be compatible with Chiwa Functions.
// Functions in this file shouldn't be used in new projects anymore. This is just for compatibility to existed files.

/* eslint no-shadow: "off" */

function inori() {
    log("INORI COMPATIBLE is available in current session.");
}

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
 * Add something to the start of an element's innerHTML.
 * @param {string} element - The id of target element
 * @param {any} content - The content to add to the element
 * @example addBefore("p1", "Title: ") // Add "Title" to the start of #p1
*/
function addBefore(element, content) {
    _type(element, "string");
    
    copyTo(element, `${content}${copyFrom(element)}`);
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

/**
 * Hide or unhide an element by condition.
 * @param {string} element  - The id of target element
 * @param {any} condition - The condition to hide or unhide the element (if true, unhide)
 * @param {string} display - The type of display if unhide
 * @param {"id" | "class" | "query"} method - The method of getting elements. If "query" is used, type element like CSS (for example, "#target *")
 */
function toggleDisplay(element, condition, display = "block", method = "id") {
    _type(element, "string");
    _type(display, "string");
    if (method != "id" && method != "class" && method != "query") { throw new TypeError(`method must be "id" or "class" or "query"`); }

    if (condition) {
        unhide(element, display, method);
    } else {
        hide(element, method);
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
 * @param {string} display - The type of display
 * @param {number} time - (>= 0) The time length of fade in
 * @example fadeIn("title", 200) // Fade in #title in 0.2s.
 */
async function fadeIn(element, display = "block", time = 100) {
    _type(element, "string");
    _range(time, ">= 0");

    if (time == 0) {
        unhide(element, display);
        return;
    }

    let nowOpacity;

    if (target(element).style.display == "none" || query(`${element}[hide]`)) {
        unhide(element, display); target(element).style.opacity = 0;
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