var fillTop
var fillMiddle
var fillBottom

function setup() {
	createCanvas(windowWidth, windowHeight)
	
	text("Hello",20,20)
	fillTop = "white"
	fillMiddle = "white"
	fillBottom = "white"
}

function draw() {
background('white')

	if (mouseY < windowHeight / 3) {
		fillTop = "green"
		fillMiddle = "white"
		fillBottom = 'white'
	} else if (mouseY < 2 * windowHeight / 3) {
		fillTop = "white"
		fillMiddle = "yellow"
		fillBottom = "white"
	} else if (mouseY < windowHeight) {
		fillTop = "white"
		fillMiddle = "white"
		fillBottom = "red"
		textSize(32)
		text("Stop!", 100, 100)
	}
	rect(windowWidth/2-10,windowHeight/2,20,1000)
	rectMode(CENTER)
	fill('grey')
	
	rect(windowWidth / 2, windowHeight / 2, 100, 200, 5, 5, 5, 5)
		// Top Light
	fill(fillTop)
	ellipse(windowWidth / 2, windowHeight / 2 - 60, 50, 50)
		// Middle Light
	fill(fillMiddle)
	ellipse(windowWidth / 2, windowHeight / 2, 50, 50)
		// Bottom Light
	fill(fillBottom)
	ellipse(windowWidth / 2, windowHeight / 2 + 60, 50, 50)
}