var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var monkey , monkey_running;
var invisibleground;  
var boundary;
var SurvivalTime = 0;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  
monkey = createSprite(50,320,5,5);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.2;

obstacleGroup = new Group();
}


function draw() {
  background("white");
  textSize(20);
  text("SURVIVAL TIME:" + SurvivalTime,120,50);
  SurvivalTime = SurvivalTime+1;
  ground = createSprite (150,390,500,20);
  ground.velocityX = 5;
  ground.x = ground.width/2;
  console.log(ground.x)
  if(ground.x > 0)  {
  ground.x = ground.width/2;
  }
  invisibleground = createSprite(150,5,500,10);
  invisibleground.visible = false;
  
  boundary = createSprite(150,380,500,10);
  boundary.visible = false;
  monkey.collide(boundary);
  
  if(monkey.collide(invisibleground)){
  monkey.velocityY = 15;
  
  }
  if(keyDown ( "space") ){     
  monkey.velocityY = -15;  
  monkey.collide(ground);
  }
  
  if(frameCount % 50 === 0){
    banana = createSprite(300,100,5,5);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.y = Math.round(random(50,250));
    banana.lifetime = 100;
  }
  if(frameCount % 300  === 0){
  obstacle = createSprite(300,360,5,5);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2; 
  obstacle.velocityX = -7;
  obstacleGroup.add(obstacle);
  }
  drawSprites();
}