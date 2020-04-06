const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  box1=new Box(200,300,50,50);
  box2=new Box(240,100,50,100);  
  box3=new Box(100,250,40,40);
  box4=new Box(150,200,60,200);
  box5=new Box(250,220,200,50)
  ground=new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   box3.display();
   box4.display(); 
   box5.display(); 
   ground.display();
}