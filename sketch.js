let x, y, r;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  x = width / 2;
  y = height / 2;
  r = 5;
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  circle(x, y, r * 2);
}
