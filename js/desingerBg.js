function Background() {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const parent = document.getElementById("side-designer");
  canvas.width = parent.offsetWidth;
  canvas.height = parent.offsetHeight;
  canvas.style.position = "absolute";
  canvas.style.zIndex = -9999;
  parent.appendChild(canvas);
  // const pallet = ['#f2d7ee', '#d3bcc0', '#a5668b','#69306d', '#0e103d'];
  const pallet = ['red', '#e6e6e6', '#f3f3f3','blue', '#6e7f80'];
  // const pallet = ['#f75c03', '#3a7ca5', '#16425b','#9b287b', '#d90368'];
  
  const walker = new Array(20);
  for(let i = 0 ; i < walker.length ; i++) {
    walker[i] = new Walker(Math.random() * canvas.width, Math.random() *  canvas.height, -5 + Math.random() * 10, -5 + Math.random() * 10,  -1 + Math.random() * 2, 0, 0.01,  "hsl(" + Math.random() * 255 + ", 100%, 50%)")
  }

  this.draw = function() {
    for(let i = 0; i < walker.length ; i++) {
      walker[i].step();
      walker[i].draw();
    }
  }

  function Walker(x, y, vx, vy, delta, dx, dy, c) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.px = x;
    this.py = y;
    this.dangle = delta;
    this.ax = dx;
    this.ay = dy;
    this.color = c;
    this.angle = 0;
    
    this.step = function() {
      this.angle += this.dangle;
      let cosx = Math.cos(this.angle);
      let sinx = Math.sin(this.angle);
      let x = this.vx;
      let y = this.vy;
      this.vx = cosx * x - sinx * y;
      this.vy = sinx * x + cosx * y;
      this.vx += this.ax;
      this.vy += this.ay;
      this.px = this.x;
      this.py = this.y;
      this.x += this.vx;
      this.y += this.vy;
    }

    this.draw = function() {
      context.beginPath();
      context.moveTo(this.px, this.py);
      context.lineTo(this.x, this.y);
      context.strokeStyle = this.color;
      context.stroke();
      context.closePath();
    }
  }

  this.handler = new CustomEventHandler();
  this.handler.setAnimation(this);
}