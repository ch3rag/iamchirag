const particles = new ParticleSystem(document.getElementById("particle"), {
    "particle": {"number": 30, "stroke": "#057195", "color": "rgb(255,26,111)", "strokeWeight": 0, "collision": "wrap",
    "display": {"size": 5, "random": true},
    "opacity": {"value": 1, "random": false, "animate": false, "speed": 0.02},
    "velocity": {"direction": "random", "random": true, "value": 2, "x": -1, "y": 2},
    "trails": {"enabled": false, "length": 0.1}
  },
  "linking": {"enabled": true, "distance":100, "color": "gray", "width": 1, "mouseLinking": false},
  "interaction": {"mousemove": {"enabled": false, "radius": 100, "force": -1000}}

});

const particlesCoder = new ParticleSystem(document.getElementById("side-coder"), {
    "particle": {"number": 20, "stroke": "blue", "color": "red", "strokeWeight": 3, "collision": "wrap",
    "display": {"size": 5, "random": true},
    "opacity": {"value": 1, "random": true, "animate": false, "speed": 0.02},
    "velocity": {"direction": "fixed", "random": true, "value": 4, "x": -2, "y": 2},
    "trails": {"enabled": true, "length": 0.005}
  },
  "linking": {"enabled": false, "distance": 100, "color": "maroon", "width": 0.2, "mouseLinking": false},
  "interaction": {"mousemove": {"enabled": false, "radius": 100, "force": -1000}}
});

particlesCoder.handler.stopAnimation();