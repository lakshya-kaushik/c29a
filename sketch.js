const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var box1, pig1;
var backgroundImg;
var bird, slingShot;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

   

   bird = new Bird(200,50);
   slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("grey");
    Engine.update(engine);
    strokeWeight(4);
   

    bird.display();
    platform.display();
     slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}