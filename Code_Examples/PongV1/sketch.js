var x
var y
var speed = 10
var xDirection = 1
var yDirection = 1
score = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  x = 20
  y = 20
}

function draw() {
  noCursor()
  background('white')
  textSize(32)
  text(score, 40, 40)
  ellipse(x, y, 20, 20)
  rect(windowWidth-50, mouseY, 20, 80)
  x = x + xDirection * speed
  y = y + yDirection * speed
  if (x >= windowWidth-50 && y >= mouseY && y <= mouseY + 80) { // removed || so score would work correctly
    xDirection = xDirection * -1;
    score = score + 1
  } else if (x <= 0) {
    xDirection = xDirection * -1;

  } else if (y >= height || y <= 0) {
    yDirection = yDirection * -1;
  } else if (x >= windowWidth) {
    x = 10
    y = random(0, windowHeight)
    score = 0
  }
}