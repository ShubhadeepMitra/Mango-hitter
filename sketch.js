
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var mango1,mango2,mango3,mango4,mango5,chain,tree1,boy1,stone1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(600,280,50);
	mango2=new Mango(750,280,50);
	mango3=new Mango(700,270,50);
	mango4=new Mango(375,265,50);
	mango5=new Mango(475,305,50);

	tree1=new Tree(600,300,500,500);

	boy1=new Boy(200,550,250,250);

	stone1=new Stone(120,495,50,50);

	chain1=new Slingshot(stone1.body,{x:120,y:495});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  tree1.display();

  boy1.display();

  stone1.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	chain.fly()
}


