const onscroll = new OnScroll();

const timelineBox = new OnScrollEventTimeline()
    .add("#particle-content-box", { "left": 0 }, 1.5, "ease-out")
    .add("#particle-content-main-container", { "left": 0 }, 0.5, "ease-out")
    .add("#particle-content-description", { "bottom": 0 }, 0.5, "ease-out")

// FADE OUT INTRO
new OnScrollEvent({
    triggerElement: "#particle",
    triggerPosition: 30
}).setTransformation("#intro", { "opacity": "0" }, 2)
    .on("exit", () => {
        intro.handler.startActivities();
    })
    .on("enter", () => {
        intro.handler.stopActivities();
    })
    .addTo(onscroll);


//PIN STORY
new OnScrollEvent({
    triggerElement: "#particle",
    triggerPosition: 0,
    duration: 1500
}).setPin("#particle")
    .setTransformation(timelineBox)
    .addTo(onscroll)

// // CHANGE SLIDE
new OnScrollEvent({
    triggerElement: "#side-designer",
    triggerPosition: 0,
    duration: 2000
})
    .setPin("#side-designer")
    .setTransformation("#designer-text", {
        top: 0,
        opacity: 1
    }, 1)
    .on("enter", () => {
        particles.handler.stopAnimation();
        desingerBackground.handler.startAnimation();
        particlesCoder.handler.stopAnimation();
    })
    .on("exit-top", () => {
        particles.handler.startAnimation();
        desingerBackground.handler.stopAnimation();
    })
    .addTo(onscroll);

// CHANGE SLIDE
new OnScrollEvent({
    triggerElement: "#side-coder",
    triggerPosition: 0,
    duration: 2000
})
    .setPin("#side-coder")
    .setTransformation("#coder-text", {
        top: 0,
        opacity: 1
    }, 1)
    .on("enter", () => {
        desingerBackground.handler.stopAnimation();
        particlesCoder.handler.startAnimation();
        document.querySelector("#scroll").style.removeProperty("visibility");
    })
    .on("exit-bottom", () => {
        particlesCoder.handler.stopAnimation();
        document.querySelector("#scroll").style["visibility"] = "hidden";
    })
    .addTo(onscroll);