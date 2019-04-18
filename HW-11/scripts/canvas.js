var canvas;
var ctx;
var x = 50;
var y = 50;
//var square1, square2;
var direction;
var questions;
var blockArray = [];
var prizeArray = [];
var lives = 3;
var score = 0;
var prizeNum;
$(document).ready(function(){

    setup();

    $(this).keypress(function(event){
        getKey(event);

    });
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create three objects?
    player = new Player(0,0,50,50,"#A6FF98");
    // block = new Block(150,100,100,60,"#0000FF");
    // prize = new Prize(175,200,30,30,"#FF705E");

    //put the blocks the player will collide into an array
    $.getJSON("data/squares.json", function(data) {
        for(var i = 0; i < data.squares.blocks.length; i++)
        {
            blockArray.push(new Block(data.squares.blocks[i].x,data.squares.blocks[i].y, data.squares.blocks[i].h, data.squares.blocks[i].w, data.squares.blocks[i].color));
        }
        });

        //put the prize blocks the player will pick up into an array
        $.getJSON("data/squares.json", function(data) {
            for(var i = 0; i < data.squares.prizes.length; i++)

            {
              console.log(data.squares.prizes.length)
                prizeArray.push(new Prize(data.squares.prizes[i].x,data.squares.prizes[i].y, data.squares.prizes[i].h, data.squares.prizes[i].w, data.squares.prizes[i].color));
            }
        drawSquare();
    });

  }




//make player square respond to key presses
function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }

    //see if the player square has collided with any blocks
    var test = false;
    //console.log(prizeArray.length)
    for(var i = 0; i < prizeArray.length; i++)
    {
      //prizeNum=-1
      test = getPrize(player, prizeArray[i]);

//console.log(test)
      // console.log(test)
      if(test==true){
        prizeNum=i
        console.log(prizeNum)
        break;
      }
    }

    var test2 = false;
    for(var i = 0; i < blockArray.length; i++)
    {

        test2 = hasCollided(player,blockArray[i]);
        //console.log(test2)
        if(test2 == true)
        {
            break;

        }

        //console.log(test2);
    }

    if(test){
      score++;
delete prizeArray[prizeNum]
    }
    //move the player square back/away from the block
    if(test2)
    {
        lives--;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }

    }
    drawSquare();

}

//tell player block to move
function moveUp()
{
    player.Y=player.Y-10;
}
function moveDown()
{
    player.Y=player.Y+10;
}
function moveRight()
{
  console.log("help")
    player.X=player.X+10;
}
function moveLeft()
{
  console.log("test")
    player.X=player.X-10;
}

//draw stuff
function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = player.color;
    ctx.fillRect(player.X, player.Y, player.Width, player.Height);
    // ctx.fillStyle = prize.color;
    // ctx.fillRect(prize.x, prize.y, prize.w, prize.h);
    for(var i = 0; i < blockArray.length; i++)
    {
        ctx.fillStyle = blockArray[i].blockColor;
        ctx.fillRect(blockArray[i].x, blockArray[i].y, blockArray[i].w, blockArray[i].h);
    }
    for(var i = 0; i < prizeArray.length; i++)
    {
        ctx.fillStyle = prizeArray[i].blockColor;
        ctx.fillRect(prizeArray[i].x, prizeArray[i].y, prizeArray[i].w, prizeArray[i].h);
    }

    ctx.font = "30px Arial";
    ctx.fillText("Lives: " + lives, 10, 50);

    ctx.font = "30px Arial";
    ctx.fillText("Score:" + score, 10, 90);

}

//do I need to make another one of these for the prizes?
function hasCollided(player, block) {
    return !(
        ((player.Y + player.Height) < (block.Y)) ||
        (player.Y > (block.Y + block.Height)) ||
        ((player.X + player.Width) < block.X) ||
        (player.X > (block.X + block.Width))
    );
}

function getPrize(player, prize){
  return !(
      ((player.Y + player.Height) < (prize.Y)) ||
      (player.Y > (prize.Y + prize.Height)) ||
      ((player.X + player.Width) < prize.X) ||
      (player.X > (prize.X + prize.Width))
  );
}
