window.onload = function () {
    window.scrollTo(0, 0);
    setTimeout(start, 1000);
    //setTimeout(scroll, 5000);

    const controller = new ScrollMagic.Controller();

    // FADE INTRO OUT
    new ScrollMagic.Scene({
        triggerElement: "#trigger-intro",
        duration: document.getElementById("intro").offsetHeight/2
    })
    .setTween("#intro", {opacity: 0})
    //.addIndicators()
    .addTo(controller);

    //PIN STORY
    new ScrollMagic.Scene({
        triggerElement: "#trigger-intro",
        triggerHook: "onLeave",
        duration: 300
    })
    .setPin("#particle")
    //.addIndicators()
    .addTo(controller);


    let timeline = new TimelineMax()
        .add(TweenMax.to("#particle-box", 1, {left: document.getElementById("particle").offsetWidth/2 - 150}))
        .add(TweenMax.to("#particle-box-text", 0.5, {left: "0%"}))
        .add(TweenMax.to("#particle-box-description", 0.5, {bottom: "10%", opacity: 1}))

    new ScrollMagic.Scene({
        triggerElement: "#trigger-intro",
        triggerHook: "onLeave",
    })
    .setTween(timeline)
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#final",
        duration: 400
    })
    .setTween("#particle-box-parent", {opacity: 0, left: "10%"})
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#final",
        duration: 400
    })
    .setTween("#details", {opacity: 1, top: "30%"})
    .addTo(controller);

    
    new ScrollMagic.Scene({
        triggerElement: "#final",
        triggerHook: "onEnter"
    })
    .setPin("#final")
    .setPin("#particle")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#final",
    })
    .setTween("#final", {opacity: 1})
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#final",
    })
    .setTween("#scroll", {display: "none"})
    .addTo(controller);

    let options = {
        "particles": {
            "number": {
                "value": 30
            },
            "shape": {
                "value": "circle"
            },
            "size": {
                "value": 5,
                "random": true
            }
        },
        "interactivity": {

        }
    }
    particlesJS("particle", options);
}

function start() {
    setInterval(changeText, 1000);
    const menuCanelButton = document.getElementsByClassName("cancel-menu-btn")[0];
    const menuButton = document.getElementsByClassName("menu-option")[0];
    menuCanelButton.addEventListener("click", dropMenu);
    menuButton.addEventListener("click", openMenu);
    updateIntroText();
}


function scroll() {
    let i = 0;
    setInterval(function() {
        window.scrollTo(0,i);
        i++;
    }, 1);
}

function updateIntroText() {
    const introTextStrings = ["the world$####is your$####canvas.", "make$#####it$####colorful."];
    const introText = document.getElementsByClassName("text")[0];
    let introIndexer = 0;
    let i = 0;
    let aCounter = 0;
    addText = function() {
        if(i < introTextStrings[introIndexer].length) {
            let ch = introTextStrings[introIndexer].charAt(i++);
            if(ch == "$") ch = "<br />";
            if(ch == "#") ch = "";
            introText.innerHTML += ch;
            return true;
        } else {
            i = 0;
            introIndexer = (introIndexer + 1) % introTextStrings.length;
            return false;
        }
    }

    function deleteText() {
        if( introText.innerHTML.length > 0) {
            introText.innerHTML = introText.innerHTML.substring(0, introText.innerHTML.length - 1);
            return true;
        }
        else  {
            return false;
        }
    }

    function delayText() {
        console.log(introText.offsetHeight);
        return false;
    }
    let activities = [
        {name: addText, delay: 100},
        {name: delayText, delay: 1000},
        {name: deleteText, delay: 50},
        {name: delayText, delay: 1000},
    ];

    function performActivity () {
        let timer = setInterval(function() {
            if(!activities[aCounter].name())  {
                aCounter = (aCounter + 1) % activities.length;
                clearInterval(timer);
                performActivity();
            }
        }, activities[aCounter].delay);
    }
    performActivity();
}

function changeText() {
    const logoContainer = document.getElementById("logo-container");
    logoContainer.childNodes.forEach(x => Math.random() < 0.5? x.className = "sup": x.className="");
}


function dropMenu() {
    const menuDiv = document.getElementsByClassName("menu-slide-up")[0];
    menuDiv.classList.add("close");
}

function openMenu() {
    const menuDiv = document.getElementsByClassName("menu-slide-up")[0];
    menuDiv.classList.remove("close");
}