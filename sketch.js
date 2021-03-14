var bullet;
var wall,thickness;       
var speed, weight;
function setup() {
  createCanvas(windowWidth,400);
  thickness = Math.round(random(22,83))
  bullet = createSprite(40, 200, 50, 30);
  wall = createSprite(width-250,200,thickness,height/2);
  wall.shapeColor = "brown"
  speed = Math.round(random (55,90));
  weight=  Math.round(random (400,1500));
}

function draw() {
  background(0);  
  bullet.velocityX = speed;
  if(collied(bullet,wall)){
    bullet.velocityX = 0;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage < 10){
      wall.shapeColor= color(0,255,0)
    } else if(damage > 10){
      wall.shapeColor= color(255,0,0)
    } 
  }
  drawSprites();
  text("damage : "+damage,width-200,50,fill("white"))
  text("Speed : "+Math.round(speed),width-200,70,fill("white"))
  text("weight : "+Math.round(weight),width-200,90,fill("white"))
  text("wall thickness : "+Math.round(thickness),width-200,110,fill("white"))
}

function collied(lbullet,lwall){
  bulletRigthEdge = lbullet.x+ lbullet.width;
  wallLeftEdge= lwall.x;

  if(bulletRigthEdge>=wallLeftEdge)
  {
    return true;
  } else{
    return false;
  }
}