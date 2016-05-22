function setup() {
  createCanvas(windowWidth, 200);
}

function draw() {
  background("#F5F2F0");
  line(windowWidth/2,0,windowWidth/2,windowHeight)
  ellipse(mouseX,mouseY,50,50)
  if(mouseX>windowWidth/2){
    fill('#4FC2A1')
    text("I'm on right side!",mouseX+30,mouseY)
  } else {
    fill('#EDB538')
    text("I'm on left side!",mouseX-110,mouseY)
  }
  ellipse(mouseX,mouseY,50,50)
}