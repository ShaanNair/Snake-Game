var snake;
var apple;
var rand;
var head;
function setup(){
    createCanvas(500,500);
    snake = createSprite(250,250,10,10);
    snake.shapeColor = "green";
    var rand = randomNumber[10,490];
    apple= createSprite(rand,rand,10,10);
    apple.shapeColor = "red"; 
    var head = snake.body[snake.height-1]
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        SnakeMovement(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        SnakeMovement(1,0);
    }
    else if(keyDown(UP_ARROW)){
        SnakeMovement(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        SnakeMovement(0,+1);
    }
    if (snake.eat(apple)){
        snake.body.height+=10;
    }
    drawSprites();
    endGame();
}

function SnakeMovement(x,y){
    snake.x = snake.x + x;
    snake.y = snake.y + y;
}
function endGame(){
    var x = snake.body[snake.body.height-1].x;
    var y = snake.body[snake.body.hright-1].y;
    if (x > width-1 || x < 0 || y > height-1 || y < 0){
    text("The game is over",250,250)
}
function grow(){
    let head = snake.body[snake.body.length-1].copy();
  snake.len++;
  snake.body.push(head);
}

}
function eat(pos) {
    var x = snake.body[snake.body.length-1].x;
  var y = snake.body[snake.body.length-1].y;
  if(x == pos.x && y == pos.y) {
    snake.grow();
    return true;
  }
}