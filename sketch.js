var movingRect, fexedRect;

function setup(){
  createCanvas(1800,800);
  fexedRect= createSprite(600,400,50,80);
  fexedRect.shapeColor="pink";
  movingRect= createSprite(400,200,80,30);
  movingRect.shapeColor="blue";

}

function draw(){
 background(0,0,0);

 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;
 drawSprites();

 if(movingRect.x - fexedRect.x< fexedRect.width/2 + movingRect.width/2 &&
  fexedRect.x - movingRect.x< fexedRect.width/2 + movingRect.width/2 && 
  movingRect.y - fexedRect.y< fexedRect.height/2 + movingRect.height/2 &&
  fexedRect.y - movingRect.y< fexedRect.height/2 + movingRect.height/2){
  
    movingRect.shapeColor="green";
    fexedRect.shapeColor="red";
 }
 else{
   movingRect.shapeColor="blue";
   fexedRect.shapeColor="pink";
 }

}