
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ground2,ground3,ground4;
var paper;
function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground1=new Ground(750,650,1500,20);

	ground2=new Ground(1300,630,180,20);
	ground3=new Ground(1200,570,20,100);
	ground4=new Ground(1400,570,20,100);
	
	paper=new Paper(100,50,70,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  paper.display();

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-1})
	}
}


