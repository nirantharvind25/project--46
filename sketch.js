const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var player, playerimage
var ground,virusImage,virus,virusGroup,boosterGroup;

function preload(){
  playerimage=loadAnimation("player/player1.png","player/player2.png","player/player3.png","player/player4.png","player/player5.png",
  "player/player6.png","player/player7.png","player/player8.png")
  
}


function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);

    engine = Engine.create();
    world = engine.world;
 player=createSprite(100,height-40,10,10)
 player.addAnimation("player",playerimage)
ground=createSprite(width/2,height,width,10)
virusGroup=createGroup()
boosterGroup=createGroup()
}


function draw(){
    background(0);
    if(keyDown("SPACE"))
    {
      player.velocityY=-10
    }
    player.velocityY+=1
    player.collide(ground)
corona()
immunity()
drawSprites()
}


function corona()
{
  if(frameCount%70===0){
    virus=createSprite(width-30,height-60,20,20)
    virus.velocityX=-7
    virus.lifetime=width-30/7
    virusGroup.add(virus)
  }
}

function immunity()
{
  if(frameCount%100===0){
    booster=createSprite(width+10,Math.round(random(height-400,height-200)),20,20)
    booster.velocityX=-5
    booster.lifetime=width+10/5
    boosterGroup.add(booster)
  }
}