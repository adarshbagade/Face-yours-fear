
 
var player,playeridle;
var bg;
var playerWalk;
var playerAttack;
var bat,batimg;
var ghost,ghostimg;
var spider,spiderimg;
var wood,woodimg;
var gullotine,gullotineimg;
var bg2;


function preload(){
playeridle=loadAnimation("idle.png");
playerWalk=loadAnimation("1.png","2.png","3.png","4.png","5.png");
playerAttack= loadAnimation("attack1.png","attack2.png","attack3.png","attack4.png");
batimg=loadAnimation("bat1.png","bat2.png");
gullotineimg=loadAnimation("gull1.png","gull2.png","gull3.png","gull4.png");
//ghostimg=loadAnimation("ghost1.png");

spiderimg=loadAnimation("spiwalk1.png","spiwalk2.png","spiwalk3.png","spiwalk4.png","spiwalk5.png");
woodimg=loadAnimation("woodmonster1.png","woodmonster2.png","woodmonster3.png")

bg= loadImage("BG.png");
bg2= loadImage("background.jpg");


}




function setup() {
  canvas=createCanvas(displayWidth-30,800);
  spike=createImg("spike.gif")

  player = createSprite(100,600);
  player.addAnimation("idle",playeridle);
  player.addAnimation("walk",playerWalk);
  player.addAnimation("attack",playerAttack);
   player.scale=0.3;

   bat= createSprite(1200,1);
   bat.addAnimation("bat1",batimg);
   bat.velocityX=(-3);
   bat.velocityY=(1);
   bat.scale=3.5;

   wood=createSprite(1100,600);
   wood.addAnimation("wood1",woodimg);
   wood.velocityX=(-3);

   gullotine= createSprite(1100,550,{isStatic:true});
   gullotine.addAnimation("gull",gullotineimg);
    gullotine.scale=2;

    spider= createSprite(1100,600);
    spider.addAnimation("spi",spiderimg);
    spider.velocityX=-5;
    spider.scale=5;
    background(bg);
}
    

 



function draw() {
  background(bg);

  if (player.x>displayWidth-30){
    
    bg= loadImage("background.jpg");

    player.x=50;
    player.y=800-50;

    spike.position(400,700);
  }

  bat.velocityX=random(-1,-2);
  bat.velocityY=random(-1,2);

   if(keyWentDown(RIGHT_ARROW)){
    player.velocityX= 2;
    player.changeAnimation("walk");
   } 

   if(keyWentUp(RIGHT_ARROW)){
    player.velocityX= 0;
    player.changeAnimation("idle");
   } 

   if(keyWentDown(LEFT_ARROW)){
    player.velocityX= -2;
    player.changeAnimation("walk");
   } 

   if(keyWentUp(LEFT_ARROW)){
    player.velocityX= 0;
    player.changeAnimation("idle");
   } 

   if(keyWentDown("space")){
    
    player.changeAnimation("attack");
   } 

   if(keyWentUp("space")){
    
    player.changeAnimation("idle");
   } 
 drawSprites();

}
