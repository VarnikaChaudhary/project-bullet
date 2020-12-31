var bullet,wall,thickness,bulletRightEdge,wallLeftEdge;
var weight,speed;
function setup() {
  createCanvas(1600,400);
 // createSprite(400, 200, 50, 50);
  bullet=createSprite(700,200,50,20);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2);
  weight=random(140,250);
  speed=random(4,10);
  thickness=random(22,83)
}

function draw() {
  background("black");  
  drawSprites();
  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    if(damage>10)
    {
      wall.shapeColor=color(250,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
bullet.velocityX=speed;
}
function hascollided(Lbullet,Lwall)
{
  bulletRightEdge=Lbullet.x +Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}