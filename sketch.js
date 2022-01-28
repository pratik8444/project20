let astronut
let bg,brush,sleep,gym,eat,bath,move;
let gym2;
let drink

function preload(){
bg= loadImage("images/iss.png");
brush=loadAnimation("images/brush.png")
sleep=loadAnimation("images/sleep.png")
gym=loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png");
gym2=loadAnimation("images/gym11.png","images/gym11.png","images/gym12.png","images/gym12.png")
eat=loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png","images/eat2.png")
bath=loadAnimation("images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png")
move=loadAnimation("images/move1.png","images/move1.png","images/move2.png","images/move2.png")
drink=loadAnimation("images/drink1.png","images/drink1.png","images/drink2.png","images/drink2.png")
}

function setup() {+

  createCanvas(800,400);
 astronut= createSprite(400, 200, 50, 50);
 astronut.addAnimation("sleeping",sleep)
 astronut.scale=0.1
}

function draw(){ 
  background(bg);  
  drawSprites();


  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
  text("n key = gym2",20,130);
  text("o key = drink",20,145);
  edges=createEdgeSprites();
  astronut.bounceOff(edges);

if(keyDown("UP_ARROW")){
  astronut.addAnimation("brushing",brush);
  astronut.changeAnimation("brushing");
  astronut.y=300
  astronut.velocityX=0
  astronut.velocityY=0
}
if(keyDown("DOWN_ARROW")){
  astronut.addAnimation("gyming",gym)
  astronut.changeAnimation("gyming")
  astronut.y=300
  astronut.velocityX=0
  astronut.velocityY=0
}
if(keyDown("LEFT_ARROW")){
  astronut.addAnimation("eating",eat)
  astronut.changeAnimation("eating");
  astronut.y=300
  astronut.x=200
  astronut.velocityX=0.5
  astronut.velocityY=0.5
}
if(keyDown("RIGHT_ARROW")){
  astronut.addAnimation("bathing",bath);
  astronut.changeAnimation("bathing")
  astronut.x=300
  astronut.velocityY=0
  astronut.velocityX=0
}
if (keyDown("m")){
  astronut.addAnimation("moving",move);
  astronut.changeAnimation("moving");
  astronut.velocityX=1
  astronut.velocityY=1
}
if(keyDown("n")){
  astronut.addAnimation("gymming2",gym2)
  astronut.changeAnimation("gymming2")
  astronut.x=300
  astronut.velocityX=0
  astronut.velocityY=0
}
if (keyDown("o")){
  astronut.addAnimation("drinking",drink)
  astronut.changeAnimation("drinking")
  astronut.y=300
  astronut.velocityX=0
  astronut.velocityY=0
}


}