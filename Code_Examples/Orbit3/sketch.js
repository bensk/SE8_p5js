function setup() {
	createCanvas(windowWidth, windowHeight)
}
var x = 0
var y = 5
var countingUp = 1;

function draw() {
	background('white')
	text("Mouse: " + mouseX + ", " + mouseY, 0, 10)
	text("Window: " + windowWidth + ", " + windowHeight, 0, 20)
	text(x, 0, 30)
  fill('yellow')
	ellipse(windowWidth/2, windowHeight/2, abs(y-37), 37)
	
	translate(width / 2, height / 2);
	strokeWeight(y)
	rotate((PI / 3.0) * x / 1000);
	point(windowWidth/4, windowHeight/4);
	y += (1 * countingUp);
	strokeWeight(8)
	rotate((PI / 3.0) * x / 100);
	point(windowWidth/8, windowHeight/8);
	rotate((PI / 3.0) * x / 100);

	if (y == 75 || y == 5) {
		countingUp *= -1;
	}
	rotate(PI);
	point(windowWidth/15, windowHeight/15);
	
	
	x = x + 10
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}