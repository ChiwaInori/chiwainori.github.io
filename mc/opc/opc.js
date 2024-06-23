function getAge(year, month, day) {
    const date = new Date();
    const today = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
    }
    let ageFix = 0;

    // Change age information line color
    if (today.month == month && today.day == day) {
        document.getElementById("birthday-text").style = "color: #00a8ff;";
        document.getElementById("ageNum").style = "color: #00a8ff;";
    }

    if (today.month == month && today.day < day || today.month < month) { // If birthday haven't passed, lessen age by 1
        ageFix = 1;
    }
    document.getElementById("ageNum").innerHTML = today.year - year - ageFix;
}

function personality(personality) {
    target("mbti").innerHTML += `<a id="mbti-text" href=\"https://www.16personalities.com/ch/${personality}-%E4%BA%BA%E6%A0%BC\" target="_blank" style="text-decoration: underline;">${personality}</a>`;

    colorTo("mbti-text", "var(--judge-false)");
    if (personality == "ISTJ" || personality == "ISFJ" || personality == "ESTJ" || personality == "ESFJ") { // Sentinels
        colorTo("mbti-text", "rgb(66, 152, 180)");
    }
    if (personality == "ISTP" || personality == "ISFP" || personality == "ESTP" || personality == "ESFP") { // Explorers
        colorTo("mbti-text", "rgb(228, 174, 58)");
    }
    if (personality == "INFJ" || personality == "INFP" || personality == "ENFJ" || personality == "ENFP") { // Diplomats
        colorTo("mbti-text", "rgb(51, 164, 116)");
    }
    if (personality == "INTJ" || personality == "INTP" || personality == "ENTJ" || personality == "ENTP") { // Analysts
        colorTo("mbti-text", "rgb(136, 97, 154)");
    }
}