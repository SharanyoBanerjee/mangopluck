var mango1,mango2,mango3,mango4,mango5,mango6;
var tree,ground,boyImage,stone,launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
  boyImage = loadImage("boy.png")
}

function setup() {
	createCanvas(1400, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(700,700,1400,30)

	mango1 = new Mango(1100,150,40);
	mango2 = new Mango(980,200,45);
	mango3 = new Mango(1020,250,46);
	mango4 = new Mango(1100,220,36);
	mango5 = new Mango(970,290,34);
	mango6 = new Mango(1200,250,40);

	tree = new Tree(850,100,500,600);

	stone = new Stone(300,440,30);
	
	launcher = new Launcher(stone.body,{x:310,y:495})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  image(boyImage,300,440,160,320)

  ground.display();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  stone.display()

  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
    
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}
function detectCollision(lstone,lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

 var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
 if(distance <= lmango.r+ lstone.r )
 {
   Matter.Body.setStatic(lmango.body,false)
 }
}
function keyPressed() {
  if(keyCode === 32) {
    Matter.Body.setPosition(stone.body,{x:310,y:495})
    launcher.attach(stone.body);
  }
}


