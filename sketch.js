var player;
var playerImg, npcImg;
var obstacleImg;
var ground1, groundImg;
var invisGround;
var x = 50;
var treeImg;
var score = 0;
var npcGroup, obstacleGroup, treeGroup;
var gameState = 0;

function preload()
{
  playerImg = loadImage("pc.png");
  npcImg = loadImage("npcs.png");
  obstacleImg = loadImage("obstacle.png");
  groundImg = loadImage("ground2.png");
  backgroundImg = loadImage("background.jpg");
  treeImg = loadImage("tree.png");
  badgeImg = loadImage("badge.png");

}

function setup() 
{
  createCanvas(800,400);

  player = createSprite(200, 285, 20, 20);
  player.addImage(playerImg);

  ground1 = createSprite(400, 360, 800, 40);
  ground1.addImage(groundImg)
  ground1.velocityX = -5; 
  ground1.x = ground1.width /2;

 // background1 = createSprite(400, 200, 20, 20);
  //background1.addImage(backgroundImg);

  invisGround = createSprite(400, 400, 800, 40);
  invisGround.visible = false;
 
  npcGroup = createGroup();
  obstacleGroup = createGroup();
  treeGroup = createGroup();

  player.setCollider("rectangle",0,0,60,200);
 
}

function draw() {
  background(255);  


  // background1.depth = player.depth;
  // player.depth = player.depth+1;
  // console.log(player.depth);
  // console.log(background1.depth);


 
  
  
    
    if(keyDown("space"))
    {
      player.velocityY = -12;
    }

    player.velocityY = player.velocityY+0.8; 

    score = score + Math.round(getFrameRate()/60);

    ground1.velocityX = -5;
    
    if (ground1.x < 0)
   {
    ground1.x = ground1.width/2;
   }


    spawnObstacles();
  
  player.collide(invisGround);

  drawSprites();

  

}


function spawnObstacles()
{
    if(frameCount % 80 === 0)
    {
      var obstacle = createSprite(400, 345, 20, 20);
      obstacle.x = Math.round(random(350, 700));
      obstacle.addImage(obstacleImg);
      obstacle.velocityX = -6;
      obstacle.scale = 0.2;
      obstacle.lifetime = 400;
      obstacleGroup.add(obstacle);

    }
}

