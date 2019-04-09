//creating paddle making instructions
//variable for the instance of Paddle that is actually the paddle
var paddle;
//variable for the instance of Paddle that is the ball
var ball;
//you have to have this one to make the whole thing work, idk.
var ctx;
//ball's x location
var ballX;
//ball's y location
var ballY;
//change in ball's x location
var deltaBallX;
//change in ball's y location
var deltaBallY;

class Paddle {
  constructor(width, height, x, y, color){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  getPaddleWidth(){
    return this.width;
  }
getPaddleHeight(){
  return this.height;
}

  getPaddleXLocation(){
    return this.x;

  }
  setPaddleX(value){
    this.x += value;
  }

  setPaddleY(value){
    this.y += value;
  }
getPaddleYLocation(){
    return this.y;
}
  getPaddleColor(){
    return this.color;
  }

  drawPaddle(ctx){
    ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      // console.log(this.x, this.y, this.width, this.height);
      // if( this.x<0 || this.x>300) deltaBallX=-deltaBallX;
      // if( this.y<0 || this.y>300) deltaBallY=-deltaBallY;
      // this.x+=deltaBallX;
      // this.y+=deltaBallY;
}


      //setInterval(update, 1000 / 60);
  }

class Ball{
  constructor(width, height, x, y, deltaX, deltaY, color){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.deltaX = deltaX;
    this.deltaY = deltaY;
    this.color = color;
  }
  getBallWidth(){
    return this.width;
  }
getBallHeight(){
  return this.height;
}

  getBallXLocation(){
    return this.x;

  }
  setBallX(value){
    this.x += value;
  }

  setBallY(value){
    this.y += value;
  }
getBallYLocation(){
    return this.y;
}

getBallDeltaX(){
  return this.deltaX;
}

setBallDeltaX(){
  this.deltaX += value;
}

getBallDeltaY(){
  return this.deltaY;
}

setBallDeltaY(){
this.deltaY += value;
}
  getBallColor(){
    return this.color;
  }

  drawBall(ctx){
    ctx.fillStyle = this.color;
      ctx.fillRect(this.width, this.height, this.x, this.y, this.deltaX, this.deltaY);
      if( this.x<0 || this.x>800) this.deltaBallX=-this.deltaBallX;
      if( this.y<0 || this.y>600) this.deltaBallY=-this.deltaBallY;
      this.x+=this.deltaBallX;
      this.y+=this.deltaBallY;
  }

}


$(document).ready(function () {

//making a new ball object

ball = new Ball(40, 40, 0, 0, "red");
console.log("hi")
//making a new paddle object
paddle = new Paddle (40, 100, 600, 100, "blue");

//creates a response when you press the keyboard keys as detailed in the get key event function
$(this).keypress(function(event){
      getKey(event);
  });

//basic canvas setup
var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
// var x = 50;
// var y = 50;
// ctx.fillStyle = "#0000FF";
// ball.drawBall(ctx);
//the equivalent of background refresh
ctx.clearRect(0, 0, 800, 600);
//draws the little paddle
paddle.drawPaddle(ctx);
//draws the square that we're pretending is the ball.
ball.drawBall(ctx);

});

//tells the game what to do when certain keys are pressed
function getKey(event) {
  var char = event.which || event.keyCode;
  var actualLetter = String.fromCharCode(char);
  if (actualLetter == "w") {
    moveUp();
  }

     if (actualLetter == "s") {
      moveDown();
    }
       if (actualLetter == "d") {
        moveRight();
      }
       if (actualLetter == "a") {
          moveLeft();
        }

//including these here too means that the whole thing updates and redraws when you press a key, creating animation
ctx.clearRect(0, 0, 800, 600);
paddle.drawPaddle(ctx);
ball.drawBall(ctx)
}


//the actual functions that control where a key moves in response to key presses
function moveUp() {
  paddle.setPaddleY(-10);
}

function moveDown() {
paddle.setPaddleY(10);
}

function moveRight() {
  this.x += 10;
}

function moveLeft() {
  this.x -= 10;
}

//currently we don't need this so we'll see where this ends up
//function update() {

  // ctx.clearRect(0, 0, 800, 600);
  // getKey();

//}
