// XTS FUNCTIONS

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
                + `\nSleep a moment then excute following commands.`
                + `\ntime : (number > 0) : Sleep time in miliseconds`
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
                `XTS Functions: getNum(text)`
                + `\nCreate a random integer.`
                + `\ntext : (string) : The text that gets number from it`
                + `\n[EXAMPLE] getNum("487bsrg13d74gh,-2") :: Return ['487', '13', '74', '2']`
            );
        }
        if (command == "logVar") {
            var success = 1;
            console.log(
                `XTS Functions: logVar(variant, name)`
                + `\nLog a varient in console.`
                + `\nvariant : (var) : The variant of log output`
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
                + `\nmethod : (string, OPTIONAL ("id")) : [Choose from id | class | query] The method of getting elements. If "query" is used, type element like CSS (for example, "#tar *")`
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
                + `\nmethod : (string, OPTIONAL ("id")) : [Choose from id | class | query] The method of getting elements. If "query" is used, type element like CSS (for example, "#tar *")`
                + `\n[EXAMPLE] colorTo("title", "#ff0000") :: Equals to document.getElementById("title").style.color = "#ff0000"`
            );
        }
        if (command == "hide") {
            var success = 1;
            console.log(
                `XTS Functions: hide(element, method)`
                + `\nHide an element.`
                + `\nelement : (string) : The id of target element`
                + `\nmethod : (string, OPTIONAL ("id")) : [Choose from id | class | query] The method of getting elements. If "query" is used, type element like CSS (for example, "#tar *")`
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
                + `\nmethod : (string, OPTIONAL ("id")) : [Choose from id | class | query] The method of getting elements. If "query" is used, type element like CSS (for example, "#tar *")`
                + `\n[EXAMPLE] unhide("title", "inline-block") :: Equals to document.getElementById("title").style.display = "inline-block"`
            );
        }
        if (command == "transColor") {
            var success = 1;
            console.log(
                `XTS Functions: transColor(element, toColor)`
                + `\nTurn an element's current color to another in transition.`
                + `\nelement : (string) : The id of target element`
                + `\ntoColor : (string) : The target color of transition`
                + `\n[EXAMPLE] transColor("title", "#00dd00") :: Turn the color of title to green in transition.`
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

function sleep(time) {
    if (time <= 0) { throw new Error("Cannot sleep less than 0 miliseconds"); }
    return new Promise(resolve => setTimeout(resolve, time));
}

function copyright(startYear, signature) {
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

// NUMERAL COMMANDS

function rand(min, max) {
    if (min > max) { throw new Error("Invalid minimum / maximum integer; minimum should be less than maximum"); }
    var range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

function getNum(string) {
    return string.match(/\d+(\.\d+)?/g);
}

// CONSOLE LOG

function logVar(variant, name) {
    if (name == undefined) { var name = "logVar"; }
    console.log(`${name}: ${variant}`);
}

// HTML ELEMENTS

function target(element) {
    if (document.getElementById(element) == undefined) { throw new ReferenceError(`${element} is not defined`); }
    return document.getElementById(element);
}

function copyFrom(element) {
    return target(element).innerHTML;
}

function copyTo(element, content) {
    target(element).innerHTML = content;
}

function styleTo(element, style, method) {
    if (method == undefined) { var method = "id"; }
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

function colorTo(element, color, method) {
    if (method == undefined) { var method = "id"; }
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

function hide(element, method) {
    if (method == undefined) { var method = "id"; }
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

function unhide(element, display, method) {
    if (display == undefined) { var display = "block"; }
    if (method == undefined) { var method = "id"; }
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

function transColor(element, toColor) {
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

// SAVE & LOAD

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

function load(inputId, element) {
    document.getElementById(inputId).addEventListener('change', function (event) {
        const fileInput = event.target;
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
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