var tower,towerImg;
var door,doorGroup,doorImg;
var climber,climberGroup,cliberImg;
var ghost,ghostImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload()
{
towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png")
 doorGroup=new Group();
  climberImg=loadImage("climber.png")
 climberGroup=new Group();
  ghostImg=loadImage("ghost-standing.png"

)
}
function setup(){
createCanvas(600,600);
tower=createSprite(300,300);
tower.addImage("tower",towerImg);
  tower.velocityY=2;
spawndoor();
ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
  
}
function draw(){
  background(0)
  if (gameState===PLAY){
if(tower.y > 400){
  tower.y=300
}
   if(keyDown("space")){
      ghost.velocityY = -2  ;
       
    }
      if(keyDown("left_arrow")){
      ghost.x = ghost.x - 3;
    }
    
    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 3;
    }
    
   
    if(climberGroup.isTouching(ghost)){
      ghost.velocityY = 0;
       ghost.destroy();
      gameState = END
    }
   ghost.velocityY = ghost.velocityY + 0.8
  }
  if (gameState===END){
    text("GAME OVER",200,200)
  }
  drawSprites();
}
function spawndoor(){
  if (frameCount%240===0){
    door=createSprite(200,-50);
    door.addImage("door",doorImg);
   door.x = Math.round(random(120,400));

    door.velocityY=2
    door.lifetime=240;
    doorGroup.add(door);
       climber=createSprite(200,10);
    climber.addImage(climberImg);
    climber.velocityY=2;
        climber.lifetime=240;
climberGroup.add(climber)
  }

}