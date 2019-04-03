const WINDOW_ORIENTATION = (window.innerHeight > window.innerWidth)? "PORTRAIT" : "LANDSCAPE";
window.onload = function () {
    start();
}

const intro = new UpdateIntroText();
const desingerBackground = new Background();
function start() {
   intro.handler.startActivities();
}

