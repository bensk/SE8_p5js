var x
var y
var width
var height
var balls = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  x = windowWidth / 2
  y = windowHeight / 2
  width = 10
  height = 10
   for (var i=0; i<100; i++) {
    balls.push(new Ball());
  }
  // ball = new Ball()
  // ball1 = new Ball()
}

function draw() {
  background('white')
  // ellipse(x, y, width, height)
  // ellipse(y,x,width,height)
  // ellipse(x,x,width,height)
  // ball.display()
  // ball.move()
  // ball1.display()
  // ball1.move()
  textSize(64)
  text("☂️",mouseX-100,mouseY+100)
  for (var i=0; i<balls.length; i++) {
    balls[i].move();
    balls[i].display();
  }
  
}

function Ball() {
  this.x = random(0,windowWidth);
  this.y = random(0,windowHeight);
  this.diameter = width;
  this.speed = 10;

  this.move = function() {
    // this.x += random(-this.speed, this.speed);
    // this.y += random(-this.speed, this.speed);
    
    
    if (this.y < windowHeight) {
    this.y = this.y + 1*this.speed
    this.x = this.x + random(-3,3)
    this.diameter = this.diameter+1
  } else {
    this.y = 0
    this.diameter = 10
  }
  };

  this.display = function() {
    textSize(32)
    text("💧",this.x,this.y)
  };
}