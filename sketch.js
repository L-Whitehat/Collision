function setup() {
  createCanvas(800,400);
  box=createSprite(400, 200, 50, 50);
  square=createSprite(450, 250, 50, 50)
  square.shapeColor="pink"
  box.shapeColor="blue"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  square.x=mouseX
  square.y=mouseY
  if (square.x-box.x<box.width/2+square.width/2
    &&box.x-square.x<box.width/2+square.width/2
    &&square.y-box.y<box.height/2+square.height/2
    &&box.y-square.y<box.height/2+square.height){
      square.shapeColor="purple"
      box.shapeColor="yellow"
    }
    else{
      square.shapeColor="pink"
  box.shapeColor="blue"
    }
}