
var miniorShell, miniorShellImg
var miniorShell1
var miniorShell2
var miniorShell3
var miniorShell4
var miniorShell5
var miniorShell6
var miniorShell7
var miniorShell8
var miniorShell9
var miniorShell10
var miniorShell11
var miniorShell12
var miniorShell13
var miniorShell14
var miniorShell15
var miniorShell16
var miniorShell17
var miniorShell18
var miniorShell19
var miniorShell20
var bullet, bulletImg, bulletGroup
var destroycount =0
var gameOver, gameOverImg
var winScreen, winScreenImg

var invisibleLine

var shipImg, ship
var blastImg

var rocksImg
var rocks, rocks1, rocks2
var rocksGroup



var playState = 1, endState = 0, gameState = playState

function preload(){
  miniorShellImg = loadImage('./assets/miniorShell.png')
  shipImg = loadImage('./assets/ship.png')
  rocksImg = loadImage('./assets/miniorPiece.png')
  blastImg = loadImage('./assets/burst.png')
  gameOverImg = loadImage('./assets/gameOver.png')
  bulletImg = loadImage('./assets/bullet.png')
  winScreenImg = loadImage('./assets/WinScreen.png')
}
function setup() {
  createCanvas(windowWidth, windowHeight);

 

  edges = createEdgeSprites()

 
  

  rocksGroup = new Group()
  miniorGroup = new Group()
  bulletGroup = new Group()

  ship = createSprite(550,550, 50, 50)
  ship.addImage("play",shipImg)
  ship.addImage('end', blastImg)
  ship.scale = 0.2
  ship.rotation = 270

  miniorShell=createSprite(300, 100, 50, 50);
  miniorShell.addImage(miniorShellImg)
  miniorShell.scale = 0.04
  
  
  miniorShell1=createSprite(400, 100, 50, 50);
  miniorShell1.addImage(miniorShellImg)
  miniorShell1.scale = 0.04

  miniorShell2=createSprite(500, 100, 50, 50);
  miniorShell2.addImage(miniorShellImg)
  miniorShell2.scale = 0.04

  miniorShell3=createSprite(600, 100, 50, 50);
  miniorShell3.addImage(miniorShellImg)
  miniorShell3.scale = 0.04

  miniorShell4=createSprite(700, 100, 50, 50);
  miniorShell4.addImage(miniorShellImg)
  miniorShell4.scale = 0.04

  miniorShell5=createSprite(800, 100, 50, 50);
  miniorShell5.addImage(miniorShellImg)
  miniorShell5.scale = 0.04
  
  miniorShell6=createSprite(900, 100, 50, 50);
  miniorShell6.addImage(miniorShellImg)
  miniorShell6.scale = 0.04

  miniorShell7=createSprite(310, 200, 50, 50);
  miniorShell7.addImage(miniorShellImg)
  miniorShell7.scale = 0.04

  miniorShell8=createSprite(410, 200, 50, 50);
  miniorShell8.addImage(miniorShellImg)
  miniorShell8.scale = 0.04

  miniorShell9=createSprite(510, 200, 50, 50);
  miniorShell9.addImage(miniorShellImg)
  miniorShell9.scale = 0.04

  miniorShell10=createSprite(610, 200, 50, 50);
  miniorShell10.addImage(miniorShellImg)
  miniorShell10.scale = 0.04
  
  miniorShell11=createSprite(710, 200, 50, 50);
  miniorShell11.addImage(miniorShellImg)
  miniorShell11.scale = 0.04

  miniorShell12=createSprite(810, 200, 50, 50);
  miniorShell12.addImage(miniorShellImg)
  miniorShell12.scale = 0.04

  miniorShell13=createSprite(910, 200, 50, 50);
  miniorShell13.addImage(miniorShellImg)
  miniorShell13.scale = 0.04

  miniorShell14=createSprite(320, 300, 50, 50);
  miniorShell14.addImage(miniorShellImg)
  miniorShell14.scale = 0.04

  miniorShell15=createSprite(420, 300, 50, 50);
  miniorShell15.addImage(miniorShellImg)
  miniorShell15.scale = 0.04

  miniorShell16=createSprite(520, 300, 50, 50);
  miniorShell16.addImage(miniorShellImg)
  miniorShell16.scale = 0.04

  miniorShell17=createSprite(620, 300, 50, 50);
  miniorShell17.addImage(miniorShellImg)
  miniorShell17.scale = 0.04

  miniorShell18=createSprite(720, 300, 50, 50);
  miniorShell18.addImage(miniorShellImg)
  miniorShell18.scale = 0.04

  miniorShell19=createSprite(820, 300, 50, 50);
  miniorShell19.addImage(miniorShellImg)
  miniorShell19.scale = 0.04

  miniorShell20=createSprite(920, 300, 50, 50);
  miniorShell20.addImage(miniorShellImg)
  miniorShell20.scale = 0.04 

  invisibleLine = createSprite(width/2, 400, width, 10)
  invisibleLine.visible = false

  gameOver = createSprite(650, 350, 50, 50);
  gameOver.addImage(gameOverImg)
  gameOver.visible = false

  winScreen = createSprite(650,350, 50, 50);
  winScreen.addImage(winScreenImg)
  winScreen.visible = false

  ship.visible = true

}
var life = 3
function draw() {



  background("black"); 
if(gameState === playState){
 generateRocks()
 generateBullets()
 destroy();
/*
if(miniorShell.destroy() && miniorShell1.destroy() && miniorshell2.destroy() && miniorShell3.destroy() && miniorShell4.destroy() && miniorShell5.destroy() && miniorShell6.destroy() && miniorShell7.destroy() && miniorShell8.destroy() && miniorShell9.destroy() && miniorShell10.destroy() && miniorShell11.destroy() && miniorShell12.destroy() && miniorShell13.destroy() && miniorShell14.destroy() && miniorShell15.destroy() && miniorShell16.destroy() && miniorShell17.destroy() && miniorShell18.destroy() && miniorShell19.destroy() && miniorShell20.destroy() ){
  winScreen.visible = true;
  gameState = endState;
  console.log('asjdflaj;s')
}*/ 

if(destroycount==20)
{
  console.log("hi")
  winScreen.visible = true;
}

 if(keyDown(LEFT_ARROW)){
  ship.x = ship.x-5;
}

if(keyDown(RIGHT_ARROW)){
  ship.x = ship.x+5
}

if(miniorGroup.isTouching(bulletGroup)){
  bulletGroup.destroyEach();
//console.log("hi")
  //for(var i=0; i<bulletGroup.length; i++){
   // bulletGroup.destroyEach(get[i])
 // }
}


//console.log(life)

 textSize(15)
 //console.log(life)
 
 if(rocksGroup.collide(ship)){
  //life = life-1
 // console.log('hi')
 life = life-1
 for(var i=0; i<rocksGroup.length; i++){
  rocksGroup.destroyEach(get[i])
}


 



ship.bounceOff(edges[1])
ship.bounceOff(edges[0])

  
  if(life === 0){
  gameState = endState
  ship.changeImage("end", blastImg)
  ship.scale = 0.4
  gameOver.visible = true
  }

}
}

 if(gameState === endState){

  miniorGroup.setRotationEach(0)
  miniorGroup.setVisibleEach(false)
  rocksGroup.setVisibleEach(false)

  ship.visible = false

  gameOver.scale = 3
 }

 

 miniorGroup.add(miniorShell)
 miniorGroup.add(miniorShell1)
 miniorGroup.add(miniorShell2)
 miniorGroup.add(miniorShell3)
 miniorGroup.add(miniorShell4)
 miniorGroup.add(miniorShell5)
 miniorGroup.add(miniorShell6)
 miniorGroup.add(miniorShell7)
 miniorGroup.add(miniorShell8)
 miniorGroup.add(miniorShell9)
 miniorGroup.add(miniorShell10)
 miniorGroup.add(miniorShell11)
 miniorGroup.add(miniorShell12)
 miniorGroup.add(miniorShell13)
 miniorGroup.add(miniorShell14)
 miniorGroup.add(miniorShell15)
 miniorGroup.add(miniorShell16)
 miniorGroup.add(miniorShell17)
 miniorGroup.add(miniorShell18)
 miniorGroup.add(miniorShell19)
 miniorGroup.add(miniorShell20)

 

   //miniorShell.x += random(1,5)
  //miniorShell.y += random(1,5)
  //miniorShell.x = miniorShell.x + 3;
  // miniorShell.y = miniorShell.y + 3; 
  miniorShell.rotation +=5
  miniorShell.rotateToDirection = true

  //miniorShell1.x = miniorShell1.x + 3;
  //miniorShell1.y = miniorShell1.y + 3;
  //miniorShell1.x = miniorShell.x
  //miniorShell1.y = miniorShell.y
  miniorShell1.rotation +=5
  miniorShell1.rotateToDirection = true

  //miniorShell1.x = miniorShell1.x + 3;
  //miniorShell1.y = miniorShell1.y + 3;
  //miniorShell1.x = miniorShell.x
  //miniorShell1.y = miniorShell.y
  miniorShell2.rotation +=5
  miniorShell2.rotateToDirection = true

  //miniorShell1.x = miniorShell1.x + 3;
  //miniorShell1.y = miniorShell1.y + 3;
  //miniorShell1.x = miniorShell.x
  //miniorShell1.y = miniorShell.y
  miniorShell3.rotation +=5
  miniorShell3.rotateToDirection = true

  //miniorShell1.x = miniorShell1.x + 3;
  //miniorShell1.y = miniorShell1.y + 3;
  //miniorShell1.x = miniorShell.x
  //miniorShell1.y = miniorShell.y
  miniorShell4.rotation +=5
  miniorShell4.rotateToDirection = true

  //miniorShell1.x = miniorShell1.x + 3;
  //miniorShell1.y = miniorShell1.y + 3;
  //miniorShell1.x = miniorShell.x
  //miniorShell1.y = miniorShell.y
  miniorShell5.rotation +=5
  miniorShell5.rotateToDirection = true

  //miniorShell1.x = miniorShell1.x + 3;
  //miniorShell1.y = miniorShell1.y + 3;
  //miniorShell1.x = miniorShell.x
  //miniorShell1.y = miniorShell.y
  miniorShell6.rotation +=5
  miniorShell6.rotateToDirection = true

   //miniorShell.x += random(1,5)
  //miniorShell.y += random(1,5)
  //miniorShell.x = miniorShell.x + 3;
 // miniorShell.y = miniorShell.y + 3;
 miniorShell7.rotation +=5
 miniorShell7.rotateToDirection = true

  //miniorShell.x += random(1,5)
  //miniorShell.y += random(1,5)
  //miniorShell.x = miniorShell.x + 3;
 // miniorShell.y = miniorShell.y + 3;
 miniorShell8.rotation +=5
 miniorShell8.rotateToDirection = true

  //miniorShell.x += random(1,5)
  //miniorShell.y += random(1,5)
  //miniorShell.x = miniorShell.x + 3;
 // miniorShell.y = miniorShell.y + 3;
 miniorShell9.rotation +=5
 miniorShell9.rotateToDirection = true

  //miniorShell.x += random(1,5)
  //miniorShell.y += random(1,5)
  //miniorShell.x = miniorShell.x + 3;
 // miniorShell.y = miniorShell.y + 3;
 miniorShell10.rotation +=5
 miniorShell10.rotateToDirection = true

  //miniorShell.x += random(1,5)
  //miniorShell.y += random(1,5)
  //miniorShell.x = miniorShell.x + 3;
 // miniorShell.y = miniorShell.y + 3;
 miniorShell11.rotation +=5
 miniorShell11.rotateToDirection = true

  //miniorShell.x += random(1,5)
  //miniorShell.y += random(1,5)
  //miniorShell.x = miniorShell.x + 3;
 // miniorShell.y = miniorShell.y + 3;
 miniorShell12.rotation +=5
 miniorShell12.rotateToDirection = true

  //miniorShell.x += random(1,5)
  //miniorShell.y += random(1,5)
  //miniorShell.x = miniorShell.x + 3;
 // miniorShell.y = miniorShell.y + 3;
 miniorShell13.rotation +=5
 miniorShell13.rotateToDirection = true

   //miniorShell.x += random(1,5)
  //miniorShell.y += random(1,5)
  //miniorShell.x = miniorShell.x + 3;
 // miniorShell.y = miniorShell.y + 3;
 miniorShell14.rotation +=5
 miniorShell14.rotateToDirection = true

   //miniorShell.x += random(1,5)
  //miniorShell.y += random(1,5)
  //miniorShell.x = miniorShell.x + 3;
 // miniorShell.y = miniorShell.y + 3;
 miniorShell15.rotation +=5
 miniorShell15.rotateToDirection = true

    //miniorShell.x += random(1,5)
  //miniorShell.y += random(1,5)
  //miniorShell.x = miniorShell.x + 3;
 // miniorShell.y = miniorShell.y + 3;
 miniorShell16.rotation +=5
 miniorShell16.rotateToDirection = true

    //miniorShell.x += random(1,5)
  //miniorShell.y += random(1,5)
  //miniorShell.x = miniorShell.x + 3;
 // miniorShell.y = miniorShell.y + 3;
 miniorShell17.rotation +=5
 miniorShell17.rotateToDirection = true

    //miniorShell.x += random(1,5)
  //miniorShell.y += random(1,5)
  //miniorShell.x = miniorShell.x + 3;
 // miniorShell.y = miniorShell.y + 3;
 miniorShell18.rotation +=5
 miniorShell18.rotateToDirection = true

    //miniorShell.x += random(1,5)
  //miniorShell.y += random(1,5)
  //miniorShell.x = miniorShell.x + 3;
 // miniorShell.y = miniorShell.y + 3;
 miniorShell19.rotation +=5
 miniorShell19.rotateToDirection = true

    //miniorShell.x += random(1,5)
  //miniorShell.y += random(1,5)
  //miniorShell.x = miniorShell.x + 3;
 // miniorShell.y = miniorShell.y + 3;
 miniorShell20.rotation +=5
 miniorShell20.rotateToDirection = true


  drawSprites();

  text("Lives: "+ life, 50, 600)
  console.log(destroycount)
}




function generateRocks(){
  if(frameCount %50 === 0){
    rocks = createSprite(100, 100)
    rocks1 = createSprite(220, 200)
    rocks2 = createSprite(220, 300)

    rocksGroup.add(rocks)
    rocksGroup.add(rocks1)
    rocksGroup.add(rocks2)

    rocks.addImage(rocksImg)
    rocks1.addImage(rocksImg)
    rocks2.addImage(rocksImg)

    rocks.depth = 1
    rocks1.depth = 1
    rocks2.depth = 1

    rocks.scale = 0.5
    rocks1.scale = 0.5
    rocks2.scale = 0.5

    rocks.velocityY = 5
    rocks1.velocityY = 5
    rocks2.velocityY = 5

    rocks.x = random(300, 920)
    rocks1.x = random(310, 920)
    rocks2.x = random(320, 920)
  }
}


function generateBullets(){
  if(frameCount%15===0){
  bullet = createSprite(ship.x, ship.y)
  bulletGroup.add(bullet)
  bullet.addImage(bulletImg)
  bullet.scale=0.2
  bullet.rotation=-90
  bullet.velocityY=-10
  bullet.depth=0
  }
}

function destroy(){
  if(bulletGroup.isTouching(miniorShell)){
    miniorShell.destroy()
    destroycount=destroycount+1
    bulletGroup.destroyEach()
    console.log("hi")
  }

  
  if(bulletGroup.isTouching(miniorShell1)){
    miniorShell1.destroy()
    destroycount=destroycount+1
    bulletGroup.destroyEach()
  }

  if(bulletGroup.isTouching(miniorShell2)){
    miniorShell2.destroy()
    destroycount=destroycount+1
    bulletGroup.destroyEach()
  }

  if(bulletGroup.isTouching(miniorShell3)){
    miniorShell3.destroy()
    destroycount=destroycount+1
    bulletGroup.destroyEach()
  }

  if(bulletGroup.isTouching(miniorShell4)){
    miniorShell4.destroy()
    destroycount=destroycount+1
    bulletGroup.destroyEach()
  }

  if(bulletGroup.isTouching(miniorShell5)){
    miniorShell5.destroy()
    destroycount=destroycount+1
    bulletGroup.destroyEach()
  }

  if(bulletGroup.isTouching(miniorShell6)){
    miniorShell6.destroy()
    destroycount=destroycount+1
    bulletGroup.destroyEach()
  }

  if(bulletGroup.isTouching(miniorShell7)){
    miniorShell7.destroy()
    destroycount=destroycount+1
    bulletGroup.destroyEach()
  }

  if(bulletGroup.isTouching(miniorShell8)){
    miniorShell8.destroy()
    destroycount=destroycount+1
    bulletGroup.destroyEach()
  }

  if(bulletGroup.isTouching(miniorShell9)){
    miniorShell9.destroy()
    destroycount=destroycount+1
    bulletGroup.destroyEach()
  }

  if(bulletGroup.isTouching(miniorShell10)){
    miniorShell10.destroy()
    destroycount=destroycount+1
    bulletGroup.destroyEach()
  }

  if(bulletGroup.isTouching(miniorShell11)){
    miniorShell11.destroy()
    destroycount=destroycount+1
    bulletGroup.destroyEach()
  }


  if(bulletGroup.isTouching(miniorShell12)){
    miniorShell12.destroy()
    destroycount=destroycount+1
    bulletGroup.destroyEach()
  }


  if(bulletGroup.isTouching(miniorShell13)){
    miniorShell13.destroy()
    destroycount=destroycount+1
    bulletGroup.destroyEach()
  }


  if(bulletGroup.isTouching(miniorShell14)){
    miniorShell14.destroy()
    destroycount=destroycount+1
    bulletGroup.destroyEach()
  }


  if(bulletGroup.isTouching(miniorShell15)){
    miniorShell15.destroy()
    bulletGroup.destroyEach()
    destroycount=destroycount+1
  }


  if(bulletGroup.isTouching(miniorShell16)){
    miniorShell16.destroy()
    bulletGroup.destroyEach()
    destroycount=destroycount+1
  }


  if(bulletGroup.isTouching(miniorShell17)){
    miniorShell17.destroy()
    bulletGroup.destroyEach()
    destroycount=destroycount+1
  }


  if(bulletGroup.isTouching(miniorShell18)){
    miniorShell18.destroy()
    bulletGroup.destroyEach()
  }


  if(bulletGroup.isTouching(miniorShell19)){
    miniorShell19.destroy()
    bulletGroup.destroyEach()
    destroycount=destroycount+1
  }


  if(bulletGroup.isTouching(miniorShell20)){
    miniorShell20.destroy()
    bulletGroup.destroyEach()
    destroycount=destroycount+1
  } 
}

