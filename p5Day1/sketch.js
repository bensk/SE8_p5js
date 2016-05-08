var aim = "Aim: How can we begin learning a new programming language?";
var do_now = "Do Now: How many programming langauges have you learned? Which is your favorite, and why?"
function setup() {
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
background('white');
textSize(120);
textFont("Proxima Nova");
textStyle('bold');
fill(`#FF4296`);
if (mouseIsPressed)
text(aim,mouseX,mouseY,windowWidth)
else
text(aim, 10, 100,windowWidth);
textSize(36)
textStyle('bold')
fill('#424242')
text(do_now,10,600,windowWidth, windowHeight)
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseIsPressed(){
	
}