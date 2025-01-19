function getAge(year, month, day) {
    const date = new Date();
    const today = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
    };
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
    cws("#mbti").el.innerHTML += `<a id="mbti-text" href="https://www.16personalities.com/ch/${personality}-%E4%BA%BA%E6%A0%BC" target="_blank" style="text-decoration: underline;">${personality}</a>`;

    cws("#mbti-text").color = "var(--red)";
    switch (personality) {
        case "ISTJ": case "ISFJ": case "ESTJ": case "ESFJ": // Sentinels
            cws("#mbti-text").color = "rgb(66, 152, 180)";
            break;
        case "ISTP": case "ISFP": case "ESTP": case "ESFP": // Explorers
            cws("#mbti-text").color = "rgb(228, 174, 58)";
            break;
        case "INFJ": case "INFP": case "ENFJ": case "ENFP": // Diplomats
            cws("#mbti-text").color = "rgb(51, 164, 116)";
            break;
        case "INTJ": case "INTP": case "ENTJ": case "ENTP": // Analysts
            cws("#mbti-text").color = "rgb(136, 97, 154)";
            break;
    }
}