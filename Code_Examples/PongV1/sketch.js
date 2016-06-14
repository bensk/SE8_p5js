var x
var y
var speed = 10
var xDirection = 1
var yDirection = 1

function setup() {
  createCanvas(500, 500)
  x = 20
  y = 20
}

function draw() {
  noCursor()
  background('white')
  ellipse(x, y, 20, 20)
  rect(450, mouseY, 20, 80)
  x = x + xDirection * speed
  y = y + yDirection * speed
  if (x >=450 && y>=mouseY && y <=mouseY+80 || x <=0) {
    xDirection = xDirection * -1;
  } else if (y >= height || y <= 0) {
    yDirection = yDirection * -1;
  } else if (x>=windowWidth){
    x = 20
    y = 20
  }
}