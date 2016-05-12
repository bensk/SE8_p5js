function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {

  strokeWeight(0)
  fill('green')
  rect(0, 0, windowWidth / 3, windowHeight)
  fill('white')
  rect(windowWidth / 3, 0, windowWidth / 3, windowHeight)
  fill('red')
  rect(2 * windowWidth / 3, 0, windowWidth / 3, windowHeight)
  textSize(32)

  fill('brown')
  textAlign('center')
  textSize(144)
  text("🐥", windowWidth / 2, windowHeight / 2)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}