var canvas;
var music;
var box1,box2,box3,box4
var box
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1=createSprite (100,550,100,30)
    box1.shapeColor='purple'
    box2=createSprite(300,550,100,30)
    box2.shapeColor='blue'
    box3=createSprite(500,550,100,30)
    box3.shapeColor=' yellow'
    box4=createSprite(700,550,100,30)
    box4.shapeColor='green'
    box=createSprite(random(20,750),400,50,50)
    box.shapeColor='white'
    box.velocityY=-3
    box.velocityX=3
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites()
    box.bounceOff(edges)
   if(box.isTouching(box1)&&box.bounceOff(box1)){
       box.shapeColor='purple'
       music.play()
   }
   if(box.isTouching(box2)&&box.bounceOff(box2)){
    box.shapeColor='blue'
    music.stop()
    box.velocityX=0
    box.velocityY=0
}
if(box.isTouching(box3)&&box.bounceOff(box3)){
    box.shapeColor='yellow'
    music.play()
}
if(box.isTouching(box4)&&box.bounceOff(box4)){
    box.shapeColor='green'
    music.play()
}

    drawSprites()


    //add condition to check if box touching surface and make it box
}
