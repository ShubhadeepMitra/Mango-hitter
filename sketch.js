const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;

var ground1;
var bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  ground1=new Ground(400,100,200,10)

  bob1 = new Bob(340,200,50,50);
  chain1=new chain(bob1.body,ground1.body,-60,0);

  bob2 = new Bob(370,200,50,50);
  chain2=new chain(bob2.body,ground1.body,-30,0);
  
  bob3 = new Bob(400,200,50,50);
  chain3=new chain(bob3.body,ground1.body,0,0);
  
  bob4 = new Bob(430,200,50,50);
  chain4=new chain(bob4.body,ground1.body,30,0);
  
  bob5 = new Bob(460,200,50,50);
  chain5=new chain(bob5.body,ground1.body,60,0);
}

function draw() {
  background(255,100,100); 

  bob1.display();
  chain1.display();
  bob2.display();
  chain2.display();
  bob3.display();
  chain3.display();
  bob4.display();
  chain4.display();
  bob5.display();
  chain5.display();
  
  ground1.display();
  drawSprites(); 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:100, y:100})
  }
}