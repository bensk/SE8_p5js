var x
var y
var speed


function setup() {
	createCanvas(windowWidth, windowHeight)
	x = 25
	y = 25
	speed = 10

}

function draw() {

	print(speed, windowWidth / 2, windowHeight / 2)
	background('white')

	noStroke()
	fill(x / 2, y / 2, 128)
	ellipse(x, y, 50, 50)
	if (y <= 25) {

		x = x + 1 * speed
	}
	if (y >= windowHeight - 25) {
		x = x - 1 * speed
	}
	if (x >= windowWidth - 25) {
		y = y + 1 * speed
	}
	if (x <= 25) {
		y = y - 1 * speed
	}
	// if (x >= windowWidth) {
	// 		// } else if (y <= windowHeight - 25) {
	// 		// 	y = y + 1 * speed
	// }
}

function keyTyped() {
	if (key == "+") {
		speed = speed + 5
	} else if (key == "-") {
		speed = speed - 5
	}
}

function windowResized() {
	resizeCanvas(windowWidth,windowHeight)
}