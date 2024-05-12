// Varients excluded numbers like "min" "max" or varients like "varient" should be in string type.

function rand(min, max) {                                               // RETURN a random integer in [min, max]. [Example] rand(1, 10) ==> 6
    if (min > max) { throw new Error("Invalid minimum / maximum integer; minimum should be less than maximum"); }
    var range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

function logVar(varient, name) {            // Log a varient in console. [Example] logVar("score", score) ==> 128 [Optional] "name" can be undefined, default as "logVar"
    if (name == undefined) {
        console.log(`logVar: ${varient}`);
    } else {
        console.log(`${name}: ${varient}`);
    }
}

function target(element) {  // RETURN an element in HTML. [Example] var text = target("title").innerText; <==> var text = document.getElementById("title").innerText;
    if (document.getElementById(element) == undefined) { throw new ReferenceError(`${element} is not defined`); }
    return document.getElementById(element);
}

function copyFrom(element) {    // RETURN an element's innerHTML. [Example] var str = copyFrom("title"); <==> var str = document.getElementById("title").innerHTML;
    return target(element).innerHTML;
}

function copyTo(element, content) { // Change an element's innerHTML. [Example] copyTo("title", "Hello"); <==> document.getElementById("title").innerHTML = "Hello";
    target(element).innerHTML = content;
}

function styleTo(element, style) {  // Change an element's CSS style. [Example] styleTo("title", "margin-left: 64px;"); <==> document.getElementById("title").style = "margin-left: 64px;";
    target(element).style = style;
}

function colorTo(element, color) {  // Change an element's color. [Example] colorTo("title", "#ff0000"); <==> document.getElementById("title").style.color = "#ff0000";
    target(element).style.color = color;
}

function hide(element) {    // Hide an element. [Example] hide("para1"); <==> document.getElementById("para1").style.display = "none";
    target(element).style.display = "none";
}

function unhide(element, style) {   // Show an element with expected format. [Example] unhide("para1", "inline"); <==> document.getElementById("para1").style.display = "inline"; [Optional] "element" can be undefined, default as "block"
    if (style == undefined) {
        target(element).style.display = "block";
    } else {
        target(element).style.display = style;
    }
}

function save(filename, content) {  // Download a file with expected content. [Example] save("readme.txt", "Please read this file."); (It'll download a file named readme.txt with "Please read this file.")
    var blob = new Blob([content], { type: "text/plain" });
    var a = document.createElement("a");
    a.style.display = "none";
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

function load(inputId, element) {    // Keeps copy the content from file in <input id="inputId" /> to an expected position. [Example] load("top-file", "fileInfo"); (When a file is selected in <input id="top-file" />, its content will be copied to "fileInfo".) [Optional] "target" can be undefined, default as "file-content"
    document.getElementById(inputId).addEventListener('change', function(event) {
        const fileInput = event.target;
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                var fileContent = event.target.result;
                if (element == undefined) { var element = "file-content"; }
                else {
                    target(element).textContent = fileContent;
                }
            };
            reader.readAsText(file);
        }
    });
}

function copyright(startYear, signature) {  // Create the copyright text in <element id="copyright"></element>. [Example] copyright(2021, "Hacker"); (It'll shown "Copyright © 2021-2024 Hacker. All Rights Reserved." in "copyright".) [Optional] "signature" can be undefined, default as "xtsdcb69"
    if (signature == undefined) { var signature = "xtsdcb69"; }
    var date = new Date();
    var thisYear = date.getFullYear();
    if (thisYear < parseInt(startYear)) { throw new Error("Cannot set a copyright starting from future"); }
    if (thisYear == parseInt(startYear)) {
        copyTo("copyright", `Copyright &copy; ${startYear} ${signature}. All Rights Reserved.`);
    } else {
        copyTo("copyright", `Copyright &copy; ${startYear}-${thisYear} ${signature}. All Rights Reserved.`);
    }
}

function getNum(string) {   // RETURN all numbers in a string. Split in array. [Example] getNum("487bsrg13d74gh,-2") ==> ['487', '13', '74', '2']
    return string.match(/\d+(\.\d+)?/g);
}

function transColor(element, toColor) { // Turn an element's current color to another in transition. [Example] transColor("title", "#00dd00"); (It'll turn title's color to green.)
    if (toColor.indexOf("#") < 0) { throw new Error("toColor should be in hex type"); }
    var speed = 10
    var speed = speed || 30;
    var color_from = target(element).style.color || "rgb(102, 102, 102)";
    var color_to = toColor;
    var r_from = parseInt(getNum(color_from)[0]);
    var g_from = parseInt(getNum(color_from)[1]);
    var b_from = parseInt(getNum(color_from)[2]);
    var r_to = parseInt(color_to.substr(1, 2), 16);
    var g_to = parseInt(color_to.substr(3, 2), 16);
    var b_to = parseInt(color_to.substr(5, 2), 16);
    var step = 10;
    var r_diff = ( r_to - r_from ) / step;
    var g_diff = ( g_to - g_from ) / step;
    var b_diff = ( b_to - b_from ) / step;
    var st = setInterval(function() {
        var nowcolor = target(element).style.color || "rgb(102, 102, 102)";
        var r_now = parseInt(getNum(nowcolor)[0]);
        var g_now = parseInt(getNum(nowcolor)[1]);
        var b_now = parseInt(getNum(nowcolor)[2]);
        var r_tocolor = ( r_now + r_diff ).toFixed(0);
        var g_tocolor = ( g_now + g_diff ).toFixed(0);
        var b_tocolor = ( b_now + b_diff ).toFixed(0);
        target(element).style.color = `rgb(${r_tocolor}, ${g_tocolor}, ${b_tocolor})`;
        if (r_to > r_from && r_tocolor >= r_to || r_to < r_from && r_tocolor <= r_to || g_to > g_from && g_tocolor >= g_to || g_to < g_from && g_tocolor <= g_to || b_to > b_from && b_tocolor >= b_to || b_to < b_from && b_tocolor <= b_to) {
            clearInterval(st);
            target(element).style.color = color_to;
        }
    }, speed);
}

function sleepByLoadCpu(miliSec) {   // Pause remaining codes until sleep over by overloading CPU. It'll stop all missions during sleep [Example] sleepByLoadCpu(1000); (It'll pause excuting codes until 1s later.)
    var now = new Date();
    var end = now.getTime() + miliSec;
    while (true) {
        var now = new Date();
        if (now.getTime() > end) {
            return;
        }
    }
}

function sleep(ms) {   // [MUST USED IN async function fName(), and usage must be "await sleep(ms);"] Pause remaining codes until sleep over. [Example] sleep(1000); (It'll pause excuting codes until 1s later.)
    return new Promise(resolve => setTimeout(resolve, ms));
}