/* ANIMATION HANDLER */
function CustomEventHandler() {

  this.aCount = 0;
  this.activities = [];
  this.cycle = false;
  this.timer = null;
  this.animation = null;
  this.frameRequest = null;
  
  this.setActivities = function(act) {
    this.activities = act;
  }
  
  this.startActivities = function() {
    this.dispatcher = function(x) { 
      clearInterval(x.timer); 
       x.timer = setInterval(function() {
        if(!x.activities[x.aCount].name()) {
          if(x.cycle) {
            x.aCount = (x.aCount + 1) % x.activities.length;
            clearInterval(x.timer);
            x.dispatcher(x);
          } else if(x.aCount < x.activities.length - 1) {
            x.aCount++;
            clearInterval(x.timer);
            x.dispatcher(x);
          } else clearInterval(x.timer);
        }
      }, x.activities[x.aCount].delay)
    }
    this.dispatcher(this);
  }
  
  this.stopActivities = function() {
    clearInterval(this.timer);
  }
  
  this.objs = this;
  this.startAnimation = null;
  this.setAnimation = function(x) {
    if(typeof(x) === "object") {
      this.startAnimation = function() {
        this.self = this;
        this.self.objs = x;
        this.self.objs.draw(); 
        this.self.frameRequest = window.requestAnimationFrame(() => this.self.startAnimation());
      }
    } else {
      this.startAnimation = function() {
        this.self = this;
        this.self.animation(); 
        this.self.frameRequest = window.requestAnimationFrame(() => this.self.startAnimation());
      }
      this.animation = x;
    }
  }
  
  this.stopAnimation = function() {
    window.cancelAnimationFrame(this.frameRequest);
  }
}