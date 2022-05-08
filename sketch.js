
var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.6,
		friction: 0,
		density: 0.1
	};

	//crear los cuerpos aquí.
   
    ball = Bodies.circle(100, 200, 20, ball_options);
	World.add(world, ball)

	groundObj = new ground(windowWidth/2, windowHeight - 20,windowWidth,20);
	World.add(world,groundObj)
	leftSide = new ground(windowWidth - 275, windowHeight - 90, 20, 120);
	World.add(world, leftSide);
	rightSide = new ground(windowWidth - 150, windowHeight - 90, 20, 120);
	World.add(world, rightSide);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.show();
  leftSide.show();
  rightSide.show();

  ellipse(ball.position.x, ball.position.y, 20);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Body.applyForce(ball, {x: 0, y:0}, {x: 0, y:1});
		Body.applyForce(ball, {x: 0, y:0}, {x: 1, y:0});
	}
	
}


