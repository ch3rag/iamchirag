// COMPUTES TEXT SIZE THAT FITS WITHIN WIDTH
function computeTextSize(child, len) {
    let textHeight = 0;
    let tempDisplay = child.style.display;
    let tempText = child.innerHTML;
    child.style.display = "inline-block";
    if(typeof len == "number") {
        child.innerHTML = "X".repeat(len);
    } else if(typeof len === "string") {
        child.innerHTML = len;
    }
    while(child.clientWidth <= child.parentElement.clientWidth) {
        textHeight += 1;
        child.style['font-size'] = textHeight + "px";       
    }
    textHeight--;
    let returnObj = {"fontSize" : textHeight, "fontHeight": child.clientHeight};
    child.innerHTML = tempText;
    child.style.display = tempDisplay;
    return returnObj;
}