function displayLang(id) {
    let langSpan = document.getElementById("lang");
    langSpan.className = langSpan.className.replace("text-transparent", "");
    switch(id) {
        case 1:
            langSpan.innerHTML = "Java";
            break;
        case 2:
            langSpan.innerHTML = "C++";
            break;
        case 3:
            langSpan.innerHTML = "C";
            break;
        case 4:
            langSpan.innerHTML = "Javascript";
            break;
        case 5:
            langSpan.innerHTML = "Python";
            break;
        case 6:
            langSpan.innerHTML = "SQL";
            break;
        default:
            langSpan.innerHTML = "X";
    }
}

function resetDisplayLang() {
    let langSpan = document.getElementById("lang");
    langSpan.innerHTML = "X";
    langSpan.className = "text-transparent";

}