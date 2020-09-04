var speed,weight

var bullet,wall,thickness


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,70,20);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2)
  speed = random(223,321)
  bullet.velocityX = speed;
 weight = random(30,52)
 thickness = random(22,83)
}

function draw() {
  background("black"); 
  if(hascollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = (25*weight*speed*speed)/(thickness*thickness*thickness)
    
    if(damage>10){
      wall.shapeColor = ("red")
    }
    if(damage<10 ){
      wall.shapeColor = ("green")
    }
    

  }
  
  
  drawSprites();
  
}
function hascollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width
  wallLeftEdge = wall.x
  if(bulletRightEdge<=wallLeftEdge){
    return true
  }
  return false
}