/* eslint prefer-const: "off" */

let nowRolling;
let currentMode = "dynamic";
let skipAnimation = false;
let idNow = "";
let chanceMode = "all";
let order = 0;
let temp;

hint();
copyright(2024, "Guigang JNZX 2310 XZY (千和 いのり)");
cw("#skipAnimation").el.addEventListener("change", function () {
    skipAnimation = this.checked;
});
    
function initialize(basicInformation) {
    const returnInformation = {
        fullList: {
            all: basicInformation.nameList.isolate(),
            boy: [],
            girl: []
        },
        dynamicList: {
            times: {
                all: [],
                boy: [],
                girl: []
            },
            weight: {
                all: [],
                boy: [],
                girl: []
            },
            totalAvg: 0
        }
    };

    basicInformation.nameList.forEach((_, index) => {
        if (!basicInformation.girlId.includes(index + 1)) {
            returnInformation.fullList.boy.push(basicInformation.nameList[index]);
        } else {
            returnInformation.fullList.girl.push(basicInformation.nameList[index]);
        }
    });

    returnInformation.fullList.all.forEach(() => { returnInformation.dynamicList.weight.all.push(1); returnInformation.dynamicList.times.all.push(0); });
    returnInformation.fullList.boy.forEach(() => { returnInformation.dynamicList.weight.boy.push(1); returnInformation.dynamicList.times.boy.push(0); });
    returnInformation.fullList.girl.forEach(() => { returnInformation.dynamicList.weight.girl.push(1); returnInformation.dynamicList.times.girl.push(0); });

    return returnInformation;
}

function changeMode(mode) {
    currentMode = mode;

    let modeList = ["true", "dynamic", "false"];
    modeList = modeList.remove(mode);
    
    modeList.forEach(toHide => {
        cw(`#s-${toHide}`).hide();
    });
    cw(`#s-${mode}`).unhide();
    updateChance();
}

async function roll(type) {
    applyAll("#buttonLine button, #findBySex button, #findByIdLine button", target => {
        target.disabled = true;
    });
    
    let animationList;

    if (type != chanceMode) { updateChance(type == "all" ? "all" : "sex"); }

    if (currentMode == "true") {
        nowRolling = type == "all" ? fullList.all[rand(0, fullList.all.length - 1)] : type == "boy" ? fullList.boy[rand(0, fullList.boy.length - 1)] : fullList.girl[rand(0, fullList.girl.length - 1)];
        temp = type == "all" ? { real: fullList.all.indexOf(nowRolling), classId: fullList.all.indexOf(nowRolling) + 1 }
            : type == "boy" ? { real: fullList.boy.indexOf(nowRolling), classId: fullList.all.indexOf(nowRolling) + 1 }
                : { real: fullList.girl.indexOf(nowRolling), classId: fullList.all.indexOf(nowRolling) + 1 };
        animationList = fullList[type];
    }
    if (currentMode == "dynamic") {
        let totalWeight = 0;
        dynamicList.weight[type].forEach(weightNum => {
            totalWeight += weightNum;
        });

        const selectedWeight = rand(0, totalWeight, true);
        let nowWeight = 0;

        let selectedPosition;
        let sumList = [];
        for (let i = 0; i < dynamicList.weight[type].length; i++) {
            nowWeight += dynamicList.weight[type][i];
            sumList.push(nowWeight);
            if (nowWeight >= selectedWeight) {
                nowRolling = fullList[type][i];
                selectedPosition = i;
                break;
            }
        }
        temp = { weightList: { original: dynamicList.weight[type].isolate(), sum: sumList, result: { index: sumList.length - 1, classId: fullList.all.indexOf(nowRolling) + 1 } }, totalWeight: totalWeight, selectedWeight: selectedWeight };
        animationList = fullList[type];
        updateWeight(nowRolling);
    }
    if (currentMode == "false") {
        nowRolling = type == "all" ? remainingList.all[rand(0, remainingList.all.length - 1)] : type == "boy" ? remainingList.boy[rand(0, remainingList.boy.length - 1)] : remainingList.girl[rand(0, remainingList.girl.length - 1)];
        temp = type == "all" ? { real: remainingList.all.indexOf(nowRolling), classId: fullList.all.indexOf(nowRolling) + 1, remaining: remainingList.all.isolate() }
            : type == "boy" ? { real: remainingList.boy.indexOf(nowRolling), classId: fullList.all.indexOf(nowRolling) + 1, remaining: remainingList.boy.isolate() }
                : { real: remainingList.girl.indexOf(nowRolling), classId: fullList.all.indexOf(nowRolling) + 1, remaining: remainingList.girl.isolate() };
        animationList = fullList[type];
        animationList = remainingList[type];
    }
    
    const flashColor = type == "all" ? "var(--gray)" : type == "boy" ? "#88ddff" : "#ffbbbb";
    const toColor = type == "all" ? "var(--textColor-500)" : type == "boy" ? "var(--blue)" : "var(--pink)";
    if (!skipAnimation) {
        await animate(animationList, flashColor, toColor, type);
    } else {
        await animateSkip(false, toColor, type);
    }
    
    if (currentMode == "false") {
        remainingList.all = remainingList.all.remove(nowRolling);
        remainingList.boy = remainingList.boy.remove(nowRolling);
        remainingList.girl = remainingList.girl.remove(nowRolling);

        if (!remainingList.all[0]) {
            remainingList.all = fullList.all.isolate();
        }
        if (!remainingList.boy[0]) {
            remainingList.boy = fullList.boy.isolate();
        }
        if (!remainingList.girl[0]) {
            remainingList.girl = fullList.girl.isolate();
        }
    }

    applyAll("#buttonLine button, #findBySex button, #findByIdLine button:nth-child(-n+7)", target => {
        target.disabled = false;
    });

    updateChance(type == "all" ? "all" : "sex");
}

async function animate(flashNames, flashColor, toColor, type) {
    await cw("#name").fadeOut(true);
    cw("#name").color = flashColor;
    cw("#name").fadeIn();

    const flashTimes = currentMode == "false" && remainingList[type].length == 1 ? 0 : rand(8, 15);
    const timer = index => ((0.7 / flashTimes * index) ** 2 + 0.1 - flashTimes / 200) / 1.5;
    let lastAnimated;
    
    for (let i = 1; i <= flashTimes; i++) {
        const animateName = lastAnimated = flashNames.remove(lastAnimated)[rand(0, flashNames.length - 2)];
        cw("#name").html = currentMode == "false" ? `${animateName} <span style="font-size: 32px;">${fullList[type].length - remainingList[type].length + 1}/${fullList[type].length}</span>` : animateName;
        playClick();
        await sleep(timer(i) * 1000);
    }
    
    if (lastAnimated != nowRolling) { playClick(); }
    cw("#name").html = currentMode == "false" ? `${nowRolling} <span style="font-size: 32px;">${fullList[type].length - remainingList[type].length + 1}/${fullList[type].length}</span>` : nowRolling;
    await sleep(800);
    cw("#name").transColor(toColor, 200);
    logName();
}

async function animateSkip(isById, toColor, type) {
    await cw("#name").fadeOut(true);
    playClick();
    cw("#name").html = isById ? nowRolling : currentMode == "false" ? `${nowRolling} <span style="font-size: 32px;">${fullList[type].length - remainingList[type].length + 1}/${fullList[type].length}</span>` : nowRolling;
    cw("#name").color = toColor;
    cw("#name").fadeIn();
    if (!isById) { logName(); }
}

async function num(number) {
    if (idNow == "") {
        idNow += number;
        if (number == 0) {
            cw(`#b-0`).el.disabled = true;
        }
        if (number <= 4) {
            for (let i = 6; i <= 9; i++) {
                cw(`#b-${i}`).el.disabled = false;
            }
        }
        cw("#findById").transColor("var(--orange)");
    } else {
        idNow += number;
        temp = +idNow;
        nowRolling = `${fullList.all[+idNow - 1]} <span style='font-size: 32px;'>${idNow}</span>`;
        cw("#findById").transColor("var(--textColor-500)");
        await animateSkip(true, "var(--textColor-500)");
        logName(fullList.all[+idNow - 1]);
        idNow = "";

        cw(`#b-0`).el.disabled = false;
        for (let i = 6; i <= 9; i++) {
            cw(`#b-${i}`).el.disabled = true;
        }
    }
}

function findByIdReset() {
    idNow = "";
    cw("#findById").transColor("var(--textColor-500)");
    cw(`#b-0`).el.disabled = false;
    for (let i = 6; i <= 9; i++) {
        cw(`#b-${i}`).el.disabled = true;
    }
}

function updateWeight(whoIsRolled) {
    dynamicList.totalAvg += 1 / fullList.all.length;

    const rolledInAll = fullList.all.indexOf(whoIsRolled);
    const rolledInBoy = fullList.boy.indexOf(whoIsRolled);
    const rolledInGirl = fullList.girl.indexOf(whoIsRolled);

    dynamicList.times.all[rolledInAll]++; // Add rolled times to the people who is rolled
    if (rolledInBoy >= 0) {
        dynamicList.times.boy[rolledInBoy]++;
    } else {
        dynamicList.times.girl[rolledInGirl]++;
    }

    const calWeight = times => 3 ** (dynamicList.totalAvg - times);

    for (let i = 0; i < dynamicList.weight.all.length; i++) { // Calculate the new weight
        dynamicList.weight.all[i] = calWeight(dynamicList.times.all[i]);
    }
    for (let i = 0; i < dynamicList.weight.boy.length; i++) {
        dynamicList.weight.boy[i] = calWeight(dynamicList.times.boy[i]);
    }
    for (let i = 0; i < dynamicList.weight.girl.length; i++) {
        dynamicList.weight.girl[i] = calWeight(dynamicList.times.girl[i]);
    }
}

function playClick() {
    cw("#click").el.currentTime = 0.026;
    cw("#click").el.play();
}

function revealChance() {
    fadeChange("showChanceLine", "chanceTable");
    cw("#name").el.style.marginBottom = "116px";
}

function updateChance(showType) {
    cw("#chanceTable").html = "";
    if (!showType) { showType = chanceMode; }

    if (showType == "all") {
        cw("#chanceTable").html = "<span class='LNK' onclick='updateChance(\"sex\")'>切换显示按性别抽取的概率</span><br />";
        fullList.all.forEach((name, index) => {
            const id = index + 1;
            cw("#chanceTable").html += `[${id < 10 ? `0${id}` : id}] ${name}: <span id="chance-${id < 10 ? `0${id}` : id}"></span> ${id % 10 == 0 ? `<br />` : ""}`;
        });

        if (currentMode == "true") {
            for (let i = 1; i <= fullList.all.length; i++) {
                cw(`#chance-${i < 10 ? `0${i}` : i}`).html = `${(1 / fullList.all.length * 100).keep(5)}%`;
            }
        }
        if (currentMode == "dynamic") {
            let totalWeight = 0;
            dynamicList.weight.all.forEach(weightNum => {
                totalWeight += weightNum;
            });
            dynamicList.weight.all.forEach((weightNum, index) => {
                const i = index + 1;
                cw(`#chance-${i < 10 ? `0${i}` : i}`).html = `${(weightNum / totalWeight * 100).keep(5)}%`;
            });
        }
        if (currentMode == "false") {
            const nowLeftChance = 1 / remainingList.all.length;
            for (let i = 1; i <= fullList.all.length; i++) {
                if (remainingList.all.includes(fullList.all[i - 1])) {
                    cw(`#chance-${i < 10 ? `0${i}` : i}`).html = `${(nowLeftChance * 100).keep(5)}%`;
                } else {
                    cw(`#chance-${i < 10 ? `0${i}` : i}`).html = `0%`;
                }
            }
        }
    } else { // Show chance rolled by sex
        cw("#chanceTable").html = "<span class='LNK' onclick='updateChance(\"all\")'>切换显示全班抽取的概率</span><br />";
        fullList.all.forEach((name, index) => {
            const id = index + 1;
            cw("#chanceTable").html += `[${id < 10 ? `0${id}` : id}] ${name}: <span id="chance-${id < 10 ? `0${id}` : id}" style="color: ${!basicInformation.girlId.includes(id) ? "var(--blue)" : "var(--pink)"}"></span> ${id % 10 == 0 ? `<br />` : ""}`;
        });

        if (currentMode == "true") {
            for (let i = 1; i <= fullList.all.length; i++) {
                cw(`#chance-${i < 10 ? `0${i}` : i}`).html = `${(1 / fullList[!basicInformation.girlId.includes(i) ? "boy" : "girl"].length * 100).keep(5)}%`;
            }
        }
        if (currentMode == "dynamic") {
            const totalWeight = {
                boy: 0,
                girl: 0
            };
            dynamicList.weight.boy.forEach(weightNum => {
                totalWeight.boy += weightNum;
            });
            dynamicList.weight.girl.forEach(weightNum => {
                totalWeight.girl += weightNum;
            });

            dynamicList.weight.all.forEach((weightNum, index) => {
                const i = index + 1;
                cw(`#chance-${i < 10 ? `0${i}` : i}`).html = `${(weightNum / (basicInformation.girlId.includes(i) ? totalWeight.girl : totalWeight.boy) * 100).keep(5)}%`;
            });
        }
        if (currentMode == "false") {
            for (let i = 1; i <= fullList.all.length; i++) {
                const nowLeftChance = 1 / remainingList[!basicInformation.girlId.includes(i) ? "boy" : "girl"].length;
                if (remainingList[!basicInformation.girlId.includes(i) ? "boy" : "girl"].includes(fullList.all[i - 1])) {
                    cw(`#chance-${i < 10 ? `0${i}` : i}`).html = `${(nowLeftChance * 100).keep(5)}%`;
                } else {
                    cw(`#chance-${i < 10 ? `0${i}` : i}`).html = `0%`;
                }
            }
        }
    }

    chanceMode = showType;
}

function logName(byIdName) {
    if (byIdName) {
        log(++order, byIdName, "BY-ID", temp, skipAnimation ? "SKIPPED" : "NO-SKIP");
    } else {
        log(++order, nowRolling, currentMode.toUpperCase(), chanceMode == "all" ? "ALL" : cw("#name").el.style.color == "var(--blue)" ? "BOY" : "GIRL", temp, skipAnimation ? "SKIPPED" : "NO-SKIP");
    }
}

function hint() {
    log(`关于随机抽人历史记录的解读
  第 1 位: 抽取次数 (从 1 开始)
  第 2 位: 抽到的人
  第 3 位: 抽取方式: 'TRUE' 真随机; 'DYNAMIC' 动态随机; 'FALSE' 伪随机, 'BY-ID' 按学号找人
  第 4 位 ('BY-ID' 没有此项): 抽取范围: 'ALL' 全体; 'BOY' 男生; 'GIRL' 女生
  第 5 位 ('BY-ID' 没有此项): 抽取信息 (注意 JavaScript 中计数从 0 开始，所以下面部分数据会有 1 的差距)
    真随机: classId: 抽到的人的学号; real: 电脑真正随机到的数字
    动态随机: selectWeight: 随机到的权重; totalWeight: 抽取范围内总权重; weightList: { original: 原始权重表; result: { index: 第一个累计权重大于随即权重的序号; classId: 该序号对应的人的学号 } sum: 累计权重表 }
    伪随机: classId: 抽到的人的学号; real: 电脑真正随机到的数字; remaining: 抽取时的抽取范围 (剩余人员列表)
  第 6 位: 抽取时是否跳过了动画: 'NO-SKIP' 未跳过; 'SKIPPED' 跳过`);
}