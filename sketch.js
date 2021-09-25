var a,b;

function setup() {
  createCanvas(400,400);
  a=createSprite(300, 200, 50, 50);
  a.shapeColor="green";
  b=createSprite(150,200,50,50);
  b.shapeColor="green";
}

function draw() {
  background(255,255,255);  

  a.x=World.mouseX;
  a.y=World.mouseY;
if(a.x-b.x<50){
  a.shapeColor="red";
  b.shapeColor="red";
}
else{
  a.shapeColor="green";
  b.shapeColor="green";
}

  drawSprites();
}