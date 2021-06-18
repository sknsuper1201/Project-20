var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var rat, ratImg1,ratImg2;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3= loadAnimation("images/cat4.png");
    ratImg1=loadAnimation("images/mouse1.png");
    ratImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    ratImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 650);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    rat = createSprite(200, 650);
    rat.addAnimation("jerryStanding", ratImg1);
    rat.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - rat.x < (tom.width - rat.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        rat.addAnimation("ratLastImage", ratImg3);
        rat.scale=0.15;
        rat.changeAnimation("ratLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        rat.addAnimation("ratTeasing", ratImg2);
        rat.frameDelay = 25;
        rat.changeAnimation("ratTeasing");
    }
}