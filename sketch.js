var Y_AXIS = 1;
var X_AXIS = 2;
var colorSetterA, colorSetterB;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
    colorMode(RGB);
    colorSetterA = color(0, 0, 0);
    colorSetterB = color(0, 0, 0);

    gradientControl = new gradientController();
    gui = new dat.GUI();

    var fsat = gui.addFolder('color A');
    fsat.add(gradientControl, 'redA', 0, 254);
    fsat.add(gradientControl, 'greenA', 0, 254);
    fsat.add(gradientControl, 'blueA', 0, 254);

    var fsat = gui.addFolder('color B');
    fsat.add(gradientControl, 'redB', 0, 254);
    fsat.add(gradientControl, 'greenB', 0, 254);
    fsat.add(gradientControl, 'blueB', 0, 254);

    gui.remember(gradientControl);

}

function draw() {
    setGradient(0, 0, windowWidth, windowHeight, colorSetterA, colorSetterB, X_AXIS);

    var redA = gradientControl.redA;
    var greenA = gradientControl.greenA;
    var blueA = gradientControl.blueA;

    var redB = gradientControl.redB;
    var greenB = gradientControl.greenB;
    var blueB = gradientControl.blueB;

    colorSetterA = color(redA, greenA, blueA);
    colorSetterB = color(redB, greenB, blueB);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  if (axis == Y_AXIS) {
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == X_AXIS) {
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
