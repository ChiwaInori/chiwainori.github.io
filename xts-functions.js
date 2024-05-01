// Varients excluded numbers like "min" "max" or varients like "varient" should be in string type.

function rand(min, max) {                           // RETURN a random integer in [min, max].
    var range = max - min + 1;                      // [Example] rand(1, 10) ==> 6
    return Math.floor(Math.random() * range) + min;
}

function logVar(varient, name) {            // Log a varient in console.
    if (name == undefined) {                // [Example] logVar("score", score) ==> 128
        console.log(`logVar: ${varient}`);  // [Optional] "name" can be undefined, default as "logVar"
    } else {
        console.log(`${name}: ${varient}`);
    }
}

function target(element) {                      // RETURN an element in HTML.
    return document.getElementById(element);    // [Example] var text = target("title").innerText; <==>  var text = document.getElementById("title").innerText;
}

function copyFrom(element) {                            // RETURN an element's innerHTML.
    return document.getElementById(element).innerHTML;  // [Example] var str = copyFrom("title"); <==> var str = document.getElementById("title").innerHTML;
}

function copyTo(element, content) {                         // Change an element's innerHTML.
    document.getElementById(element).innerHTML = content;   // [Example] copyTo("title", "Hello"); <==> document.getElementById("title").innerHTML = "Hello";
}

function styleTo(element, style) {                          // Change an element's CSS style.
    document.getElementById(element).style = style;         // [Example] styleTo("title", "margin-left: 64px;"); <==> document.getElementById("title").style = "margin-left: 64px;";
}

function colorTo(element, color) {                          // Change an element's color.
    document.getElementById(element).style.color = color;   // [Example] colorTo("title", "#ff0000"); <==> document.getElementById("title").style.color = "#ff0000";
}

function hide(element) {                                        // Hide an element.
    document.getElementById(element).style.display = "none";    // [Example] hide("para1"); <==> document.getElementById("para1").style.display = "none";
}

function unhide(element, style) {                                   // Show an element with expected format.
    if (style == undefined) {                                       // [Example] unhide("para1", "inline"); <==> document.getElementById("para1").style.display = "inline";
        document.getElementById(element).style.display = "block";   // [Optional] "element" can be undefined, default as "block"
    } else {
        document.getElementById(element).style.display = style;
    }
}

function save(filename, content) {                          // Download a file with expected content.
    var blob = new Blob([content], { type: "text/plain" }); // [Example] save("readme.txt", "Please read this file."); (It'll download a file named readme.txt with "Please read this file.")
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

function load(inputId, target) {                                                    // Keeps copy the content from file in <input id="inputId" /> to an expected position.
    document.getElementById(inputId).addEventListener('change', function(event) {   // [Example] load("top-file", "fileInfo"); (When a file is selected in <input id="top-file" />, its content will be copied to "fileInfo".)
        const fileInput = event.target;                                             // [Optional] "target" can be undefined, default as "file-content"
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                var fileContent = event.target.result;
                if (target == undefined) {
                    document.getElementById("file-content").textContent = fileContent;
                } else {
                    document.getElementById(target).textContent = fileContent;
                }
            };
            reader.readAsText(file);
        }
    });
}

function copyright(startYear, signature) {  // Create the copyright text in <element id="copyright"></element>.
    if (signature == undefined) {           // [Example] copyright(2021, "Hacker"); (It'll shown "Copyright © 2021-2024 Hacker. All Rights Reserved." in "copyright".)
        var signature = "xtsdcb69";         // [Optional] "signature" can be undefined, default as "xtsdcb69"
    }
    var date = new Date();
    var thisYear = date.getFullYear();
    if (thisYear == parseInt(startYear)) {
        document.getElementById("copyright").innerHTML = `Copyright &copy; ${startYear} ${signature}. All Rights Reserved.`;
    } else {
        document.getElementById("copyright").innerHTML = `Copyright &copy; ${startYear}-${thisYear} ${signature}. All Rights Reserved.`;
    }
}

function getNum(string) {                   // RETURN all numbers in a string. Split in array.
    return string.match(/\d+(\.\d+)?/g);    // [Example] getNum("487bsrg13d74gh,-2") ==> ['487', '13', '74', '2']
}

function transColor(element, toColor) {     // Turn an element's current color to another in transition.
    var speed = 10;                         // [Example] transColor("title", "#00dd00"); (It'll turn title's color to green.)
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