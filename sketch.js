var ball;
var hball;
var ballPosition;
var database;


function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var hballPosition = database.ref('ball/position');
    hballPosition.on("value",readPosition ,showError)
}
function readPosition()
{
    ballPosition = data.val();
    hball.x = position.x;
    hball.y = position.y;
    console.log("string")
}

function draw(){
    background("white");
    if (ballPosition!== undefined)
    {
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
}
function writePosition(x,y)
{
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
  });
  console.log("string");

}

