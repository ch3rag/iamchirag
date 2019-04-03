function UpdateIntroText() {

    const introTextStrings = ["the world$####is your$####canvas.", "make$#####it$####colorful.", "welcome$####to my$####world!"];
    const introText = document.getElementsByClassName("intro-text")[0];
    const cursor = document.getElementsByClassName("intro-text")[1];
    textHeight = 0;
    
    if(WINDOW_ORIENTATION === "LANDSCAPE") {
        textHeight = introText.parentElement.clientHeight / 3;
        cursor.style["line-height"] = introText.style["line-height"] = textHeight + "px";    
    } else {
        let properties = computeTextSize(introText, "theXXworld");
        textHeight = properties.fontSize;
        introText.parentElement.style["height"] = (properties.fontHeight * 3) + "px";
    }

    cursor.style["font-size"] = introText.style["font-size"] = textHeight + "px";
    let introIndexer = 0;   //POINTS TO CURRENT STRING
    let i = 0;  //POINTS TO CURRENT CHARACTER IN THE STRING

    addText = function() {
        if(i < introTextStrings[introIndexer].length) {
            let ch = introTextStrings[introIndexer].charAt(i++);
            if(ch == "$") ch = "<br />"
            if(ch == "#") ch = "";
            introText.innerHTML += ch;
            return true;
        } else {
            i = 0;
            introIndexer = (introIndexer + 1) % introTextStrings.length;
            return false;
        }
    }

    deleteText = function() {
        if(introText.innerHTML.length > 0) {
            introText.innerHTML = introText.innerHTML.substring(0, introText.innerHTML.length - 1);
            return true;
        }
        else  {
            return false;
        }
    }

    delayText = function() {
        return false;
    }

    activities = [
        {name: addText, delay: 100},
        {name: delayText, delay: 1000},
        {name: deleteText, delay: 50},
        {name: delayText, delay: 1000},
    ];

    this.handler = new CustomEventHandler();
    this.handler.cycle = true;
    this.handler.setActivities(activities);
}

